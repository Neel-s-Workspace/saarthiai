# SaarthiAI (सारथी) 🚀
### AI-Powered Academic Intelligence, Career Mentorship & Student Wellness Ecosystem

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/Frontend-React%2019-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Bundler-Vite%207-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Styles-Tailwind%20CSS%204-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20Express%205-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma%207-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL%2015-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Google Gemini](https://img.shields.io/badge/AI%20Engine-Gemini%201.5%20Flash-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
[![Tests](https://img.shields.io/badge/Tests-54%2F54%20Passing-brightgreen.svg)](tests/regression/)
[![Docker](https://img.shields.io/badge/Container-Docker%20Compose-2496ED?logo=docker&logoColor=white)](docker-compose.yml)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [System Architecture](#-system-architecture)
- [Key Features](#-key-features)
  - [1. Student Intelligence Hub](#1-student-intelligence-hub)
  - [2. Career Guidance & Placement Engine](#2-career-guidance--placement-engine)
  - [3. AI Study & Learning Copilots](#3-ai-study--learning-copilots)
  - [4. Gamified Learning & Social Battles](#4-gamified-learning--social-battles)
  - [5. Counselor & At-Risk Early Warning System](#5-counselor--at-risk-early-warning-system)
  - [6. Mental Wellness & Crisis Intervention](#6-mental-wellness--crisis-intervention)
  - [7. Institutional & Admin Analytics](#7-institutional--admin-analytics)
- [Tech Stack](#-tech-stack)
- [Database Schema](#-database-schema)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Installation](#local-installation)
  - [Docker Compose Deployment](#docker-compose-deployment)
- [Environment Configuration](#-environment-configuration)
- [API Reference](#-api-reference)
- [Testing & Quality Assurance](#-testing--quality-assurance)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**SaarthiAI** is a comprehensive, AI-driven educational platform designed to bridge the gap between academic progress, career navigation, institutional counseling, and student well-being. Built for higher education and high school institutions, Saarthi acts as a 24/7 personal mentor ("सारथी") for students while providing educators and counselors with actionable, predictive insights to prevent academic attrition.

---

## 🏗 System Architecture

```mermaid
graph TD
    Client["Client Browser (React 19 + Tailwind CSS + Lucide)"]
    Nginx["Nginx Reverse Proxy & Static Host (Port 80)"]
    Express["Node.js Express 5 API Server (Port 5000)"]
    Auth["JWT + bcrypt Authentication & RBAC Middleware"]
    RateLimiter["IP Rate Limiting Middleware (/api/ai)"]
    Prisma["Prisma ORM 7 (Connection Pool Singleton)"]
    Postgres[("PostgreSQL 15 Database (Port 5432)")]
    Gemini["Google Gemini 1.5 Flash API (@google/genai)"]

    Client -->|HTTP / SPA Routing| Nginx
    Nginx -->|API Requests /api/*| Express
    Express --> Auth
    Auth --> RateLimiter
    Express --> Prisma
    Prisma --> Postgres
    Express -->|Generative Prompts & JSON Structured Outputs| Gemini
```

---

## 🚀 Key Features

### 1. Student Intelligence Hub
- **Academic Dashboard:** Real-time visibility into cumulative GPA, dynamic attendance percentages, upcoming assignment deadlines, and performance trends.
- **Attendance Intelligence:** Smart tracking with predictive alerts highlighting subjects nearing institutional attendance thresholds.
- **Academic Records & Documents:** Secure digital repository for transcripts, marksheets, and certifications.

### 2. Career Guidance & Placement Engine
- **Career Match Engine:** Interactive assessment assessing skills, passions, and industry demand to calculate match scores across engineering, design, data science, and research tracks.
- **TechHub & Learning Path Generator:** Tailored step-by-step technological roadmaps with curated modules, documentation, and dynamic project timelines.
- **Skill Gap Analysis:** Comparative role benchmarks showing target competencies versus current student proficiency levels.
- **Exam Planner:** Active exam dashboard with dynamic countdown timers, syllabus trackers, and stream-based filtering.
- **Opportunity & Scholarship Finder:** Searchable directories for internships, government scholarships, and competitive research fellowships.
- **AI Resume Builder:** Real-time resume text optimizer generating ATS-tailored bullet points and impact statements.

### 3. AI Study & Learning Copilots
- **SqueezeNote:** Intelligent lecture notes and article summarizer that extracts core takeaways, generates revision flashcards, and exports clean markdown or text.
- **Confusion to Clarity:** Concept deconstructor that takes complex academic topics and explains them intuitively using the Feynman technique, real-world analogies, and interactive Q&A.
- **Contextual Ask AI Assistant:** Floating multi-turn companion equipped with sliding-window history bounding, Markdown rendering, and instant study tips.

### 4. Gamified Learning & Social Battles
- **Quiz Battle:** Fast-paced subject battles with real-time score validation, opponent pairing, and anti-tamper numeric score checking.
- **XP & Level Progression:** Automated XP calculation ($XP \to \text{Level}$) updated inside atomic database transactions (`prisma.$transaction`).
- **Badges & Streaks:** Gamification milestones recognizing daily study streaks, quiz mastery, and milestone achievements.

### 5. Counselor & At-Risk Early Warning System
- **Early-Warning System:** Algorithmic detection filtering students based on critical CGPA drops and sub-75% attendance.
- **Counselor Authorization Isolation:** Role-based data access ensuring counselors only view and manage students assigned directly to their roster.
- **Appointment Scheduler & Case Notes:** Complete lifecycle management for one-on-one student consultations (Pending, Approved, Completed) with private session notes and student feedback tracking.
- **Faculty Copilot:** Dedicated educator tool generating dynamic topic quizzes and tailored pedagogical suggestions.

### 6. Mental Wellness & Crisis Intervention
- **Wellness Check-in:** Mood logging, burnout detection, stress-management exercises, and guided breathing techniques.
- **Emergency Crisis Support Modal:** Immediate, accessible modal providing emergency hotlines (Tele-MANAS, Vandrevala Foundation, National Emergency Services) and urgent counselor contact shortcuts.

### 7. Institutional & Admin Analytics
- **Admin Dashboard:** Cross-departmental metrics covering total student enrollment, counselor load distribution, and institutional retention rates.
- **Security & Route Guarding:** Strict JWT-based role authorization (`STUDENT`, `COUNSELOR`, `ADMIN`) guarding all platform endpoints and navigation views.

---

## 🛠 Tech Stack

### Frontend
- **Framework:** React 19 (`react`, `react-dom`)
- **Build Tool:** Vite 7 with custom vendor chunk splitting (`manualChunks`)
- **Styling:** Tailwind CSS 4 with `@tailwindcss/vite`
- **Routing:** React Router DOM 7 (with protected layouts & 404 catch-all)
- **Icons & Animation:** Lucide React, Framer Motion
- **Data Visualization:** Recharts

### Backend
- **Runtime:** Node.js (v18+ / v20+ / v24+)
- **Server Framework:** Express 5
- **ORM:** Prisma 7 (`@prisma/client`, `prisma`)
- **Database:** PostgreSQL 15
- **Authentication:** JSON Web Tokens (`jsonwebtoken`) + Salted Hashing (`bcryptjs`)
- **AI SDK:** Official Google GenAI SDK (`@google/genai` v1.44.0) with model fallback
- **Security:** Strict CORS origin whitelist, Rate limiting on AI routes, Input sanitization

### DevOps & Infrastructure
- **Containerization:** Docker & Docker Compose
- **Web Server & Reverse Proxy:** Nginx Alpine with SPA fallback routing
- **Testing:** Node.js Native Test Runner (`node:test` & `node:assert/strict`)

---

## 🗄 Database Schema

The relational database schema is managed via **Prisma ORM** (`backend/prisma/schema.prisma`):

| Model | Primary Purpose | Key Relations |
| :--- | :--- | :--- |
| `User` | Core identity & authentication (Email, Password Hash, Role) | Linked 1:1 to `Student` or `Counselor`; 1:N to `Message` |
| `Student` | Student profile (Enrollment No, Department, CGPA, Attendance) | Belongs to `Counselor`; Owns `QuizAccount`, `Analytics`, `StudyNote` |
| `Counselor` | Faculty mentor profile (Employee ID, Department) | Assigned to multiple `Student` records; 1:N `Appointment` |
| `Appointment` | Counseling appointments with topic, meeting notes & status | Connects `Student` & `Counselor`; 1:1 cascade to `Feedback` |
| `QuizAccount` | Gamified quiz profile tracking cumulative XP, Level, and Rank | Linked 1:1 to `Student`; 1:N `QuizMatch` |
| `QuizMatch` | Individual quiz match results (topic, score, opponent) | Belongs to `QuizAccount` |
| `StudentAnalytics` | Predictive academic health (success score, risk level) | Linked 1:1 to `Student` |
| `StudyNote` | Notes created via SqueezeNote and flashcard exports | Belongs to `Student` |
| `SkillProfile` | Specific student skills and 0–100 proficiency ratings | Belongs to `Student` |
| `CareerGoal` | Target career roles and milestone tracking | Belongs to `Student` |

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
- [PostgreSQL](https://www.postgresql.org/) (local installation or Docker)
- [Google Gemini API Key](https://aistudio.google.com/)

---

### Local Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/buildwithneel/saarthiai.git
cd saarthiai
```

#### 2. Configure Backend
```bash
cd backend
npm install

# Copy environment configuration template
cp .env.example .env
```

Edit `backend/.env` with your actual database URL and Gemini API credentials:
```env
PORT=5000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/counselor_app?schema=public"
JWT_SECRET="your-secure-jwt-secret-key"
GEMINI_API_KEY="your-gemini-api-key"
GEMINI_MODEL="gemini-1.5-flash"
CLIENT_URL="http://localhost:5173,http://localhost:3000"
```

Apply database migrations:
```bash
npx prisma db push
```

Start the backend API server:
```bash
npm start
# or for live reloading during development:
npx nodemon server.js
```

#### 3. Configure Frontend
Open a new terminal window:
```bash
cd frontend
npm install
```

Create `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the Vite development server:
```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser.

---

### Docker Compose Deployment

Run the complete full-stack environment (PostgreSQL + Express Backend + Nginx/React Frontend) with a single command:

```bash
docker compose up --build -d
```

- **Frontend Application:** `http://localhost:80`
- **Backend API:** `http://localhost:5000/api`
- **PostgreSQL Database:** `localhost:5432`

To shut down services:
```bash
docker compose down
```

---

## ⚙️ Environment Configuration

| Variable | Service | Required | Default | Description |
| :--- | :---: | :---: | :---: | :--- |
| `PORT` | Backend | Optional | `5000` | Port on which the Express server listens |
| `DATABASE_URL` | Backend | **Yes** | — | PostgreSQL connection string |
| `JWT_SECRET` | Backend | **Yes** | — | Secret string used for signing authentication JWTs |
| `GEMINI_API_KEY` | Backend | **Yes** | — | Google Gemini API Key |
| `GEMINI_MODEL` | Backend | Optional | `gemini-1.5-flash` | Gemini model version identifier |
| `CLIENT_URL` | Backend | Optional | `http://localhost:5173` | Permitted CORS origins (comma-separated) |
| `VITE_API_URL` | Frontend | **Yes** | `http://localhost:5000/api` | Base API endpoint consumed by Axios |

---

## 📡 API Reference

### Authentication (`/api`)
- `POST /api/login` — Authenticate user credentials, check password hash, and issue JWT.

### Quiz & Gamification (`/api/quiz`) *(Protected)*
- `GET /api/quiz/profile` — Fetch student XP, level, rank, and badges.
- `GET /api/quiz/history` — Retrieve past quiz battles and scores.
- `POST /api/quiz/match` — Record a quiz match result and update XP atomically inside a transaction.

### Counselor Services (`/api/counselor`) *(Protected — Counselor/Admin)*
- `GET /api/counselor/early-warning` — Fetch at-risk students filtered by counselor assignment.
- `GET /api/counselor/appointments` — List assigned appointments.
- `POST /api/counselor/appointments` — Schedule a new consultation.

### Student Services (`/api/student`) *(Protected — Student)*
- `GET /api/student/profile` — Fetch academic profile, GPA, and counselor assignment.
- `GET /api/student/analytics` — Retrieve success score and attendance intelligence.

### AI Engine (`/api/ai`) *(Protected + Rate-Limited)*
- `POST /api/ai/chat` — Multi-turn assistant conversation with sliding-window history.
- `POST /api/ai/roadmap` — Generate structured step-by-step skill learning roadmaps.
- `POST /api/ai/squeeze` — Summarize text notes and generate flashcards.
- `POST /api/ai/clarity` — Explain complex academic topics using intuitive analogies.
- `POST /api/ai/quiz-generate` — Dynamic topic-based quiz generator for faculty.

---

## 🧪 Testing & Quality Assurance

SaarthiAI features a complete suite of **54 regression tests** covering security boundaries, database transaction integrity, input validation, and frontend state synchronization:

```bash
# Run all native regression test suites
node --test tests/regression/*.test.js
```

### Test Coverage Highlights:
- **Security:** Complete login password check enforcement, JWT route protection, and AI prompt injection sanitization.
- **Data Integrity:** Atomic `$transaction` for quiz XP updates, singleton Prisma client verification, and PostgreSQL cascade deletes.
- **Resiliency:** Express global 404 & error handling, rate limiting on expensive endpoints, and JSON markdown stripping.
- **Frontend Quality:** Dynamic date computation, controlled search inputs, and React Router catch-all fallback.

---

## 🤝 Contributing

Contributions to SaarthiAI are warmly welcomed! Please adhere to the following workflow:

1. Fork the project (`https://github.com/buildwithneel/saarthiai`).
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/) (`git commit -m 'feat(wellness): add guided meditation module'`).
4. Run the regression test suite (`node --test tests/regression/*.test.js`).
5. Push to your branch (`git push origin feature/amazing-feature`).
6. Open a Pull Request against `buildwithneel/saarthiai:main`.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <b>SaarthiAI</b> — Empowering every student with the guidance they deserve.
</p>
