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
import ProtectedRoute from "./routes/ProtectedRoute";
import AppLayout from "./layouts/AppLayout";
import AuthProviderWrapper from "./providers/AuthProvider";

const App = () => {
  return (
    <div>
      <AuthProviderWrapper>
        <BrowserRouter>
          <div className="App">
            {/* Your app components go here */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/curriculum" element={<Curriculum />} />

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />

              {/* Student (protected) routes */}
              <Route element={<ProtectedRoute />}>
                <Route
                  path="/home"
                  element={
                    <AppLayout>
                      <StudentDashboard />
                    </AppLayout>
                  }
                />

                <Route
                  path="/classes"
                  element={
                    <AppLayout>
                      <StudentClasses />
                    </AppLayout>
                  }
                />

                {/* Example: /live should not display header (or footer if you prefer) */}
                <Route
                  path="/live"
                  element={
                    <AppLayout
                      showHeader={false}
                      isFullScreen={true}
                      showrightSidebar={false}
                    >
                      <LiveClass />
                    </AppLayout>
                  }
                />

                <Route
                  path="/progress"
                  element={
                    <AppLayout>
                      <ProgressAnalytics />
                    </AppLayout>
                  }
                />

                <Route
                  path="/cheatsheets"
                  element={
                    <AppLayout>
                      <CheatSheets />
                    </AppLayout>
                  }
                />

                <Route
                  path="/mcq-test"
                  element={
                    <AppLayout>
                      <MCQTest />
                    </AppLayout>
                  }
                />

                <Route
                  path="/code-practice"
                  element={
                    <AppLayout>
                      <CodePractice />
                    </AppLayout>
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <AppLayout>
                      <ProfilePage />
                    </AppLayout>
                  }
                />

                <Route
                  path="/weekly-assignment"
                  element={
                    <AppLayout>
                      <WeeklyAssignment />
                    </AppLayout>
                  }
                />

                <Route
                  path="/code-playground"
                  element={
                    <AppLayout
                      showHeader={false}
                      isFullScreen={true}
                      showrightSidebar={false}
                    >
                      <CodePlayground />
                    </AppLayout>
                  }
                />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProviderWrapper>
    </div>
  );
};

export default App;
