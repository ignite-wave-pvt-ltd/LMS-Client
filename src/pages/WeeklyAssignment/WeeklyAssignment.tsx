import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Upload,
  Github,
  ExternalLink,
  AlertCircle,
  Download,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function WeeklyAssignment() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "requirements" | "submission"
  >("overview");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const navigate = useNavigate();

  const assignment = {
    title: "Build a Task Management App with MERN Stack",
    week: "Week 8",
    assignedDate: "December 21, 2025",
    dueDate: "December 27, 2025, 11:59 PM",
    status: "In Progress",
    points: 500,
    difficulty: "Medium",
    estimatedTime: "8-12 hours",
    progress: 35,
  };

  const requirements = {
    frontend: [
      "Build a responsive React application using functional components and hooks",
      "Implement user authentication (signup, login, logout)",
      "Create, read, update, and delete tasks",
      "Filter tasks by status (All, Active, Completed)",
      "Add due dates and priority levels to tasks",
      "Implement dark mode toggle",
      "Use Tailwind CSS for styling",
    ],
    backend: [
      "Set up Express.js server with proper routing",
      "Create MongoDB models for Users and Tasks",
      "Implement JWT authentication",
      "Build RESTful API endpoints for CRUD operations",
      "Add input validation and error handling",
      "Implement proper authorization (users can only access their own tasks)",
    ],
    bonus: [
      "Add task categories or tags",
      "Implement search functionality",
      "Add pagination for large task lists",
      "Deploy to Heroku or Vercel",
      "Write basic unit tests",
    ],
  };

  const rubric = [
    {
      category: "Functionality",
      points: 200,
      description: "All core features working correctly",
    },
    {
      category: "Code Quality",
      points: 100,
      description: "Clean, organized, and well-commented code",
    },
    {
      category: "UI/UX Design",
      points: 100,
      description: "Responsive, intuitive user interface",
    },
    {
      category: "Backend Implementation",
      points: 75,
      description: "Proper API structure and database design",
    },
    {
      category: "Documentation",
      points: 25,
      description: "Clear README with setup instructions",
    },
    {
      category: "Bonus Features",
      points: 100,
      description: "Additional features implemented (optional)",
    },
  ];

  const resources = [
    { name: "Project Starter Template", type: "GitHub Repo", url: "#" },
    { name: "API Design Guide.pdf", type: "PDF", size: "1.2 MB" },
    {
      name: "Authentication Tutorial Video",
      type: "Video",
      duration: "45 min",
    },
    { name: "MongoDB Schema Examples", type: "Code Snippets", url: "#" },
  ];

  const previousSubmissions = [
    {
      week: "Week 6",
      title: "Weather Dashboard App",
      score: "450/500",
      grade: "90%",
      status: "Graded",
    },
    {
      week: "Week 4",
      title: "E-commerce Product Page",
      score: "425/500",
      grade: "85%",
      status: "Graded",
    },
    {
      week: "Week 2",
      title: "Portfolio Website",
      score: "480/500",
      grade: "96%",
      status: "Graded",
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/home")}
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl text-gray-900">{assignment.title}</h1>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-sm text-gray-600">
                    {assignment.week} • Saturday Challenge
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      assignment.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : assignment.difficulty === "Medium"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {assignment.difficulty}
                  </span>
                  <span className="text-sm text-gray-600">
                    {assignment.points} points
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right mr-2">
                <div className="text-sm text-gray-600">Due Date</div>
                <div className="text-sm text-gray-900">
                  {assignment.dueDate}
                </div>
              </div>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Submit Assignment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-3">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Progress Card */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm text-indigo-100">
                      Saturday Challenge
                    </span>
                  </div>
                  <h2 className="text-2xl mb-2">{assignment.title}</h2>
                  <p className="text-indigo-100 text-sm">
                    Estimated time: {assignment.estimatedTime}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl mb-1">{assignment.progress}%</div>
                  <div className="text-sm text-indigo-100">Complete</div>
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                <div
                  className="bg-white rounded-full h-2 transition-all"
                  style={{ width: `${assignment.progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-100">
                  Assigned: {assignment.assignedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Due in 4 days
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex border-b border-gray-200">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "requirements", label: "Requirements" },
                  { id: "submission", label: "Submission" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 px-6 py-4 ${
                      activeTab === tab.id
                        ? "bg-gray-50 text-indigo-600 border-b-2 border-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-3">
                        Assignment Overview
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Build a full-stack task management application that
                        allows users to create, organize, and track their daily
                        tasks. This project will test your understanding of the
                        complete MERN stack, including React hooks, Express
                        routing, MongoDB schemas, and user authentication.
                      </p>
                      <p className="text-gray-700">
                        You'll implement CRUD operations, user authentication
                        with JWT, and create a responsive UI with Tailwind CSS.
                        This is a comprehensive project that brings together all
                        the concepts we've covered in the past 8 weeks.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg text-gray-900 mb-3">
                        Learning Objectives
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Build a complete full-stack application from scratch",
                          "Implement secure user authentication and authorization",
                          "Design and implement RESTful APIs",
                          "Create responsive and intuitive user interfaces",
                          "Manage application state effectively",
                          "Deploy a production-ready application",
                        ].map((objective, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg text-gray-900 mb-3">
                        Grading Rubric
                      </h3>
                      <div className="space-y-2">
                        {rubric.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                          >
                            <div>
                              <div className="text-gray-900">
                                {item.category}
                              </div>
                              <div className="text-sm text-gray-600">
                                {item.description}
                              </div>
                            </div>
                            <div className="text-indigo-600">
                              {item.points} pts
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "requirements" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-3">
                        Frontend Requirements
                      </h3>
                      <ul className="space-y-2">
                        {requirements.frontend.map((req, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg text-gray-900 mb-3">
                        Backend Requirements
                      </h3>
                      <ul className="space-y-2">
                        {requirements.backend.map((req, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg text-gray-900 mb-3">
                        Bonus Features (Optional)
                      </h3>
                      <ul className="space-y-2">
                        {requirements.bonus.map((req, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <div className="w-5 h-5 border-2 border-indigo-300 bg-indigo-50 rounded mt-0.5 shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-blue-900 mb-1">
                            Important Notes
                          </h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>
                              • Make sure your code is well-commented and
                              organized
                            </li>
                            <li>
                              • Include a comprehensive README with setup
                              instructions
                            </li>
                            <li>
                              • Test all features thoroughly before submission
                            </li>
                            <li>
                              • Ensure your app is responsive on mobile devices
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "submission" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-3">
                        Submission Guidelines
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <h4 className="text-gray-900 mb-2">
                            GitHub Repository
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Submit the link to your public GitHub repository
                          </p>
                          <input
                            type="text"
                            placeholder="https://github.com/username/task-manager"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                          />
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <h4 className="text-gray-900 mb-2">
                            Live Demo URL (Optional)
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">
                            If deployed, provide the live application URL
                          </p>
                          <input
                            type="text"
                            placeholder="https://my-task-manager.herokuapp.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                          />
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <h4 className="text-gray-900 mb-2">
                            Additional Files
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Upload any additional documentation or screenshots
                          </p>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 mb-2">
                              Drag & drop files here, or click to browse
                            </p>
                            <input
                              type="file"
                              multiple
                              onChange={handleFileUpload}
                              className="hidden"
                              id="file-upload"
                            />
                            <label
                              htmlFor="file-upload"
                              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer inline-block"
                            >
                              Choose Files
                            </label>
                          </div>
                          {uploadedFiles.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {uploadedFiles.map((file, i) => (
                                <div
                                  key={i}
                                  className="flex items-center justify-between p-2 bg-white rounded border border-gray-200"
                                >
                                  <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-700">
                                      {file}
                                    </span>
                                  </div>
                                  <button className="text-red-600 text-sm hover:text-red-700">
                                    Remove
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex gap-3">
                        <Clock className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-yellow-900 mb-1">
                            Submission Deadline
                          </h4>
                          <p className="text-sm text-yellow-800">
                            Your submission is due by {assignment.dueDate}. Late
                            submissions will receive a 10% penalty per day.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2">
                      <Upload className="w-5 h-5" />
                      Submit Assignment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Resources */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">Resources</h3>
              <div className="space-y-3">
                {resources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.url || "#"}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
                  >
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                      {resource.type === "GitHub Repo" ? (
                        <Github className="w-5 h-5 text-indigo-600" />
                      ) : resource.type === "Video" ? (
                        <ExternalLink className="w-5 h-5 text-indigo-600" />
                      ) : (
                        <Download className="w-5 h-5 text-indigo-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">
                        {resource.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {resource.type} {resource.size && `• ${resource.size}`}{" "}
                        {resource.duration && `• ${resource.duration}`}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Previous Submissions */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">
                Previous Assignments
              </h3>
              <div className="space-y-3">
                {previousSubmissions.map((submission, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm text-gray-900">
                          {submission.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {submission.week}
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                        {submission.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {submission.score}
                      </span>
                      <span className="text-sm text-indigo-600">
                        {submission.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help */}
            <div className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-700 mb-4">
                Stuck on something? Reach out to your instructor or TA during
                office hours.
              </p>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                Ask for Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
