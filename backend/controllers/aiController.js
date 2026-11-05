const { GoogleGenAI } = require('@google/genai');
const dotenv = require('dotenv');
dotenv.config();

// Initialize the Google Gemini client
let aiClient = null;
try {
    if (process.env.GEMINI_API_KEY) {
        aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } else {
        console.warn("GEMINI_API_KEY is not set in .env. Running AI in offline mode.");
    }
} catch (error) {
    console.warn("Failed to initialize Google Gen AI client. Running in offline mode.");
}

const generateCareerRoadmap = async (req, res) => {
    const { major, interests, currentSemester } = req.body;

    // Mock Fallback
    const fallbackRoadmap = [
        { title: 'Foundation Building', timeframe: 'Sem 1-2', description: 'Focus on core programming and CS concepts' },
        { title: 'Exploration & Projects', timeframe: 'Sem 3-4', description: 'Explore various domains like web, app, or AI and build initial projects' },
        { title: 'Specialization & Internships', timeframe: 'Sem 5-6', description: 'Deep dive into a specialization and secure a summer internship' },
        { title: 'Placement & Advanced Topics', timeframe: 'Sem 7-8', description: 'Prepare for placements, build a stellar portfolio, and study advanced topics' }
    ];

    try {
        if (!aiClient) {
            return res.json({ roadmap: fallbackRoadmap });
        }

        const prompt = `You are Saarthi AI, an intelligent academic and career mentor designed to guide Indian students. 
Generate a personalized career roadmap for a student majoring in ${major} in their ${currentSemester} semester, with interests in ${interests}.

Use simple conversational Hinglish (Hindi + English) so that Indian students easily understand.
Your roadmap must include:
- Step-by-Step Learning Phases (with Duration, Topics to learn, Daily study plan, Mini project)
- Workload Management tips
- Motivation and Final Guidance

Format the response EXACTLY as a JSON array of 4-5 objects with 'title', 'timeframe', and 'description' keys.
The 'title' should be the phase name.
The 'timeframe' should be the duration.
The 'description' MUST contain the detailed Hinglish advice, topics, and mini-projects for that phase.
Do not include any surrounding markdown blocks like \`\`\`json or \`\`\`. Output ONLY the raw JSON array.`;

        const response = await aiClient.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

                const textResponse = response.text;
        let roadmap = fallbackRoadmap;
        try {
            const cleanText = textResponse.replace(/```json/gi, '').replace(/```/g, '').trim();
            const jsonMatch = cleanText.match(/\[[\s\S]*\]/);
            roadmap = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(cleanText);
        } catch (e) {
            console.warn("Roadmap JSON parsing failed, using fallback:", e.message);
            roadmap = fallbackRoadmap;
        }

        res.json({ roadmap });
    } catch (error) {
        console.error("Error generating roadmap:", error);
        res.json({ roadmap: fallbackRoadmap });
    }
};

const askAssistant = async (req, res) => {
    const { query, history } = req.body;

    const offlineMessage = "Hello! I am currently running in offline mode. I can still guide you to explore the Placement Preparation and Career Match Engine on your dashboard!";
    const errorMessage = "My connection to the neural mainframe was interrupted, but don't let that stop you! Keep focusing on your coursework and let me know if you need help later.";

    try {
        if (!aiClient) {
            return res.json({ response: offlineMessage });
        }

        const systemPrompt = `You are Saarthi AI, an intelligent academic and career mentor designed to guide Indian students in achieving academic success, preparing for exams, and building strong career skills through personalized learning roadmaps and study plans.
Your role is to act like a smart mentor and academic guide, helping students with:
- Exam preparation planning
- Career skill roadmaps
- Study planning
- Time management
- Motivation and guidance

Your responses must always feel personalized, practical, and encouraging, like a mentor guiding a student step-by-step.
Use simple conversational Hinglish (Hindi + English) so that Indian students easily understand.
Example tone:
"Aapko sabse pehle fundamentals strong karne honge."
"Agar aap daily 2 ghante padhte ho to 3-4 weeks mein ye topic cover ho sakta hai."
"Weekend par ek small project banana try karo."
Avoid complicated English. Use simple language.

PART 1 - EXAM PREPARATION PLAN GENERATOR
When the user wants help preparing for an exam, generate a realistic and personalized exam preparation plan.
If the user hasn't provided the following details, ask them nicely for what's missing: Exam Name, Exam Type, Exam Date, Current Date, Subjects, Subject Difficulty, Daily Study Hours Available, Current Preparation Level (Not Started, Beginner, Intermediate, Revision Stage).
Then, follow these steps to create the plan:
Step 1 - Calculate Time Remaining: Days remaining and realistic study time.
Step 2 - Subject Priority Analysis: Hard -> more time, Medium -> balanced, Easy -> lighter.
Step 3 - Adjust Plan Based on Preparation Level.
Step 4 - Generate Daily Study Schedule: Day-by-day plan without exceeding daily limits. Rotate subjects.
Step 5 - Final Revision Strategy: Last few days for mock tests and past papers.
Output Format: Exam Overview, Subject Priority Summary, Complete Daily Study Plan, Final Revision Strategy.

PART 2 - PERSONALIZED CAREER ROADMAP GENERATOR
When a student asks for career guidance, generate a detailed personalized roadmap.
Step 1 - Collect User Inputs: Ask the student these questions one-by-one or in a friendly way before generating the roadmap:
- What is your main goal? (e.g., AI Engineer, Web Developer)
- What is your current level?
- Which skills do you already know?
- How much time can you dedicate daily?
- What is your target timeline?
- How do you prefer to learn?
- What is your current situation? (e.g., College student)
- What are your weak areas?
Step 2 - Generate a Personalized Learning Roadmap: Goal Understanding, Total Timeline Plan.
Step 3 - Step-by-Step Learning Phases: Duration, Topics, Daily plan, Weekly targets, Mini project, Tips.
Step 4 - Workload Management: Practical advice for balancing study with college/work.
Step 5 - Motivation and Final Guidance.

Important Rules for Saarthi AI:
- Always personalize responses using user inputs.
- Always adjust plans according to daily available time.
- Always include practical projects in roadmaps.
- Always give realistic timelines.
- Use simple Hinglish so Indian students easily understand.
- Maintain a friendly, motivating mentor tone.
- Your goal is to behave like a true Saarthi (guide) who helps students move step-by-step toward academic and career success.`;

        // Format history into dialogue
        let conversationText = "";
        if (history && history.length > 0) {
            conversationText = history.map(msg => `${msg.role === 'user' ? 'Student' : 'Saarthi'}: ${msg.content}`).join('\\n');
            conversationText += `\\nStudent: ${query}`;
        } else {
            conversationText = `Student: ${query}`;
        }

        const fullPrompt = `${systemPrompt}\n\nHere is the conversation so far:\n${conversationText}\n\nSaarthi:`;

        const response = await aiClient.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: fullPrompt,
        });

        res.json({ response: response.text });
    } catch (error) {
        console.error("Error with AI assistant:", error);
        res.json({ response: errorMessage });
    }
};

const generateTechHubPath = async (req, res) => {
    const { educationLevel, currentSkills, domainToLearn, timeAvailable, goal } = req.body;

    const fallbackRoadmap = {
        userAnalysis: "We couldn't reach the AI at the moment, but here is a sample analysis. You are highly motivated, but need a structured path.",
        phases: [
            { title: "Foundations", duration: "Weeks 1-4", topics: "Basic concepts", projects: "Hello World", resources: "Freecodecamp" },
            { title: "Advanced Topics", duration: "Weeks 5-8", topics: "Complex algorithms", projects: "Clone standard app", resources: "YouTube tutorials" }
        ],
        timeline: "8 Weeks",
        weeklyPlan: "Focus on theory weekdays, projects on weekends.",
        careerGuidance: "Keep building projects to stand out."
    };

    try {
        if (!aiClient) {
            return res.json({ roadmap: fallbackRoadmap });
        }

        const prompt = `You are an expert AI Tech Mentor inside the Antigravity app.

IMPORTANT:
- Output MUST be detailed and long (like a full roadmap).
- DO NOT generate week-wise or short card format.
- Use a PHASE-based structure (Phase 1, 2, 3) inside the JSON.
- Match a professional but friendly tone (mix of English + simple Hindi).
- Focus only on TECH (coding, tools, projects).
- You MUST output EVERYTHING in the EXACT JSON format below. Do not add markdown like \`\`\`json. ONLY output the raw parseable JSON object.

USER INPUT:
- Education: ${educationLevel}
- Interests: ${currentSkills} (user's current skills/interests)
- Strengths: ${domainToLearn} (domain they want to learn)
- Goal: ${goal}
- Time per day: ${timeAvailable} hours

INSTRUCTIONS:
Generate a DETAILED TECH LEARNING ROADMAP and map it to the following JSON structure:

EXPECTED JSON STRUCTURE:
{
  "userAnalysis": "🧠 Profile Summary: Write a personalized paragraph (mix of English+Hindi). Mention user interests + strengths + future direction.",
  "phases": [
    {
      "title": "Phase 1: Foundation",
      "duration": "Month 1-3",
      "topics": "Goal: [Brief Goal]\\nSkills to Learn:\\n• [Skill 1]\\n• [Skill 2]\\n• [Skill 3]\\nDaily Effort: [Hours needed]\\nOutcome: [What they will achieve]",
      "projects": "• [Project 1]\\n• [Project 2]",
      "resources": "• [Resource 1]\\n• [Resource 2]"
    },
    {
      "title": "Phase 2: Skill Building",
      "duration": "Month 4-6",
      "topics": "Goal: [Brief Goal]\\nTools / Technologies:\\n• [Tool 1]\\n• [Tool 2]\\n• [Tool 3]\\nDaily Effort: [Hours needed]\\nOutcome: [What they will achieve]",
      "projects": "• [Project 1]\\n• [Project 2]",
      "resources": "• [Resource 1]\\n• [Resource 2]"
    },
    {
      "title": "Phase 3: Industry Readiness",
      "duration": "Month 7-12",
      "topics": "Goal: [Brief Goal]\\nAdvanced Skills:\\n• [Skill]\\n• [Skill]\\nCareer Prep:\\n• [Prep 1]\\n• [Prep 2]\\nOutcome: [Outcome]",
      "projects": "• [Project 1]\\n• [Project 2]",
      "resources": "• [Resource 1]\\n• [Resource 2]"
    }
  ],
  "timeline": "e.g., 12 Months",
  "weeklyPlan": "Brief plan based on ${timeAvailable} hours/day",
  "careerGuidance": "🎯 Final Career Direction\\n[Suggest best tech role + Explain WHY it suits them]\\n\\n📌 Suggested Actions:\\n• Create monthly goals\\n• Practice coding regularly\\n• Work on real-world projects\\n• Improve weak areas\\n\\n📚 Recommended Resources:\\n• FreeCodeCamp\\n• YouTube\\n• GitHub\\n• Official Docs"
}`;

        const response = await aiClient.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        const textResponse = response.text;
        
        let roadmap;
        try {
            // Strip markdown block if it exists (safer regex)
            const cleanJson = textResponse.replace(/```json/gi, '').replace(/```/g, '').trim();
            roadmap = JSON.parse(cleanJson);
        } catch (e) {
            // Further fallback if parsing fails, try to extract json
            const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
            roadmap = jsonMatch ? JSON.parse(jsonMatch[0]) : fallbackRoadmap;
        }

        res.json({ roadmap });
    } catch (error) {
        console.error("Error generating TechHub roadmap:", error);
        res.json({ roadmap: fallbackRoadmap });
    }
};

module.exports = {
    generateCareerRoadmap,
    askAssistant,
    generateTechHubPath
};
