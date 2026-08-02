import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import CounselorDashboard from './pages/CounselorDashboard';
import DigitalTwin from './pages/DigitalTwin';
import StudentDashboard from './pages/StudentDashboard';
import AttendanceIntelligence from './pages/AttendanceIntelligence';
import CounselorConnect from './pages/CounselorConnect';
import StudentForms from './pages/StudentForms';
import MentalWellness from './pages/MentalWellness';
import CareerRoadmap from './pages/CareerRoadmap';
import SkillGapAnalysis from './pages/SkillGapAnalysis';
import CareerMatchEngine from './pages/CareerMatchEngine';
import ExamPlanner from './pages/ExamPlanner';
import ResumeBuilder from './pages/ResumeBuilder';
import OpportunityFinder from './pages/OpportunityFinder';
import PlacementPrep from './pages/PlacementPrep';
import QuizBattle from './pages/QuizBattle';
import AcademicRecords from './pages/AcademicRecords';
import UpcomingMeetings from './pages/UpcomingMeetings';
import RealTimeIntelligence from './pages/RealTimeIntelligence';
import TechHub from './pages/TechHub';
import Squeeze from './pages/Squeeze';
import ConfusionClarity from './pages/ConfusionClarity';
import SuccessDashboard from './pages/SuccessDashboard';
import EarlyWarning from './pages/EarlyWarning';
import FacultyCopilot from './pages/FacultyCopilot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AttendanceIntelligence />} />

          <Route path="/counselor" element={<CounselorDashboard />} />
          <Route path="/counselor/attendance" element={<AttendanceIntelligence />} />
          <Route path="/counselor/digital-twin" element={<DigitalTwin />} />

          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/tech-hub" element={<TechHub />} />
          <Route path="/student/squeeze" element={<Squeeze />} />
          <Route path="/student/connect" element={<CounselorConnect />} />
          <Route path="/student/forms" element={<StudentForms />} />
          <Route path="/student/wellness" element={<MentalWellness />} />
          <Route path="/student/roadmap" element={<CareerRoadmap />} />
          <Route path="/student/skills" element={<SkillGapAnalysis />} />
          <Route path="/student/career" element={<CareerMatchEngine />} />
          <Route path="/student/exams" element={<ExamPlanner />} />
          <Route path="/student/resume" element={<ResumeBuilder />} />
          <Route path="/student/opportunities" element={<OpportunityFinder />} />
          <Route path="/student/placement" element={<PlacementPrep />} />
          <Route path="/student/quiz" element={<QuizBattle />} />
          <Route path="/student/records" element={<AcademicRecords />} />
          <Route path="/student/meetings" element={<UpcomingMeetings />} />
          <Route path="/student/intelligence" element={<RealTimeIntelligence />} />
          <Route path="/student/clarity" element={<ConfusionClarity />} />
          <Route path="/student/success" element={<SuccessDashboard />} />

          <Route path="/counselor/early-warning" element={<EarlyWarning />} />
          <Route path="/counselor/copilot" element={<FacultyCopilot />} />

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
