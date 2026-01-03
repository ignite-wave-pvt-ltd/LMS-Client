import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Login from "./pages/auth/LoginPage";
import { StudentDashboard } from "./pages/StudentDashboard/StudentDashboard";
import StudentClasses from "./pages/StudentClasses/StudentClasses";
import LiveClass from "./pages/Live/Live";
import { ProgressAnalytics } from "./pages/Progress/Progress";
import CheatSheets from "./pages/CheatSheets/CheatSheets";
import MCQTest from "./pages/McqTest/McqTest";
import { CodePractice } from "./pages/CodePractice/CodePractice";
import { Curriculum } from "./pages/Curriculum/Curriculum";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { WeeklyAssignment } from "./pages/WeeklyAssignment/WeeklyAssignment";
import { CodePlayground } from "./pages/CodePlayground/CodePlayground";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          {/* Your app components go here */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/curriculum" element={<Curriculum />} />

            {/* Student routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<StudentDashboard />} />
            <Route path="/classes" element={<StudentClasses />} />
            <Route path="/live" element={<LiveClass />} />
            <Route path="/progress" element={<ProgressAnalytics />} />
            <Route path="/cheatsheets" element={<CheatSheets />} />
            <Route path="/mcq-test" element={<MCQTest />} />
            <Route path="/code-practice" element={<CodePractice />} />

            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/weekly-assignment" element={<WeeklyAssignment />} />
            <Route path="/code-playground" element={<CodePlayground />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
