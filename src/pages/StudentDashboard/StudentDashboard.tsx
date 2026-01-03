import {
  Play,
  Clock,
  Code,
  Brain,
  Calendar,
  CheckCircle,
  Award,
} from "lucide-react";
import { RightSidebar } from "../../layouts/RightSidebar/RightSidebar";
import { useNavigate } from "react-router-dom";
import Header from "../../layouts/header/Header";

export function StudentDashboard() {
  const navigate = useNavigate();

  // Define data for multiple days - Extended December schedule
  const classesData: Record<string, any> = {
    "dec-16": {
      date: "December 16, 2025",
      dayLabel: "Tuesday",
      schedule: [
        {
          time: "09:00 AM",
          title: "ES6 Fundamentals Introduction",
          status: "completed",
          duration: "2h",
        },
        {
          time: "11:30 AM",
          title: "Let, Const & Template Literals",
          status: "completed",
          duration: "1.5h",
        },
        {
          time: "02:00 PM",
          title: "Destructuring Deep Dive",
          status: "completed",
          duration: "2h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "ES6 Basics Quiz",
          questions: 15,
          timeLimit: "20 min",
          status: "completed",
          score: 82,
        },
        {
          type: "code",
          title: "Variable Declaration Practice",
          difficulty: "Easy",
          points: 50,
          status: "completed",
          score: 50,
        },
      ],
    },
    "dec-17": {
      date: "December 17, 2025",
      dayLabel: "Wednesday",
      schedule: [
        {
          time: "09:00 AM",
          title: "Arrow Functions Masterclass",
          status: "completed",
          duration: "2h",
        },
        {
          time: "11:30 AM",
          title: "Spread & Rest Operators",
          status: "completed",
          duration: "1.5h",
        },
        {
          time: "02:00 PM",
          title: "Object & Array Methods",
          status: "completed",
          duration: "2.5h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "Functions & Operators Quiz",
          questions: 18,
          timeLimit: "22 min",
          status: "completed",
          score: 88,
        },
        {
          type: "code",
          title: "Array Methods Challenge",
          difficulty: "Medium",
          points: 100,
          status: "completed",
          score: 95,
        },
      ],
    },
    "dec-18": {
      date: "December 18, 2025",
      dayLabel: "Thursday",
      schedule: [
        {
          time: "09:00 AM",
          title: "Promises & Async/Await",
          status: "completed",
          duration: "2.5h",
        },
        {
          time: "12:00 PM",
          title: "Error Handling in Async Code",
          status: "completed",
          duration: "1.5h",
        },
        {
          time: "02:00 PM",
          title: "Fetch API Workshop",
          status: "completed",
          duration: "2h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "Async Programming Quiz",
          questions: 20,
          timeLimit: "25 min",
          status: "completed",
          score: 90,
        },
        {
          type: "code",
          title: "API Data Fetching Task",
          difficulty: "Medium",
          points: 100,
          status: "completed",
          score: 100,
        },
      ],
    },
    "dec-19": {
      date: "December 19, 2025",
      dayLabel: "Friday",
      schedule: [
        {
          time: "09:00 AM",
          title: "Module Systems (ES6)",
          status: "completed",
          duration: "2h",
        },
        {
          time: "11:30 AM",
          title: "Classes & Prototypes",
          status: "completed",
          duration: "2h",
        },
        {
          time: "02:00 PM",
          title: "JavaScript Week Recap",
          status: "completed",
          duration: "1.5h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "Modules & Classes Quiz",
          questions: 16,
          timeLimit: "20 min",
          status: "completed",
          score: 85,
        },
        {
          type: "code",
          title: "Build a Class-Based System",
          difficulty: "Hard",
          points: 150,
          status: "completed",
          score: 140,
        },
      ],
    },
    "dec-20": {
      date: "December 20, 2025",
      dayLabel: "Saturday",
      schedule: [],
      tasks: [],
    },
    "dec-21": {
      date: "December 21, 2025",
      dayLabel: "Sunday",
      schedule: [
        {
          time: "09:00 AM",
          title: "JavaScript ES6+ Deep Dive",
          status: "completed",
          duration: "2h",
        },
        {
          time: "11:30 AM",
          title: "Array Methods Workshop",
          status: "completed",
          duration: "1.5h",
        },
        {
          time: "02:00 PM",
          title: "Async Programming Masterclass",
          status: "completed",
          duration: "2.5h",
        },
        {
          time: "05:00 PM",
          title: "Code Review Session",
          status: "completed",
          duration: "1h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "JavaScript ES6 Quiz",
          questions: 20,
          timeLimit: "25 min",
          status: "completed",
          score: 85,
        },
        {
          type: "mcq",
          title: "Async Programming Test",
          questions: 15,
          timeLimit: "20 min",
          status: "completed",
          score: 92,
        },
        {
          type: "code",
          title: "Array Manipulation Challenge",
          difficulty: "Medium",
          points: 100,
          status: "completed",
          score: 100,
        },
      ],
    },
    "dec-22": {
      date: "December 22, 2025",
      dayLabel: "Monday",
      schedule: [
        {
          time: "09:00 AM",
          title: "React Component Architecture",
          status: "completed",
          duration: "2h",
        },
        {
          time: "11:30 AM",
          title: "State Management Basics",
          status: "completed",
          duration: "1.5h",
        },
        {
          time: "02:00 PM",
          title: "React Hooks in Practice",
          status: "completed",
          duration: "2.5h",
        },
        {
          time: "05:00 PM",
          title: "Q&A Session",
          status: "completed",
          duration: "1h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "React Fundamentals Quiz",
          questions: 18,
          timeLimit: "22 min",
          status: "completed",
          score: 88,
        },
        {
          type: "code",
          title: "Build a Counter Component",
          difficulty: "Easy",
          points: 50,
          status: "completed",
          score: 50,
        },
        {
          type: "code",
          title: "Todo List with Hooks",
          difficulty: "Medium",
          points: 100,
          status: "completed",
          score: 95,
        },
      ],
    },
    "dec-23": {
      date: "December 23, 2025",
      dayLabel: "Tuesday",
      schedule: [
        {
          time: "09:00 AM",
          title: "Advanced React Patterns",
          status: "completed",
          duration: "2h",
        },
        {
          time: "11:30 AM",
          title: "State Management with Redux",
          status: "completed",
          duration: "1.5h",
        },
        {
          time: "02:00 PM",
          title: "MongoDB & Mongoose Deep Dive",
          status: "live",
          duration: "2.5h",
        },
        {
          time: "05:00 PM",
          title: "Q&A and Doubt Clearing Session",
          status: "upcoming",
          duration: "1h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "React Patterns Quiz",
          questions: 15,
          timeLimit: "20 min",
          status: "pending",
        },
        {
          type: "mcq",
          title: "Redux Fundamentals Test",
          questions: 20,
          timeLimit: "25 min",
          status: "pending",
        },
        {
          type: "code",
          title: "Build a Custom Hook",
          difficulty: "Easy",
          points: 50,
          status: "pending",
        },
        {
          type: "code",
          title: "Implement useReducer Pattern",
          difficulty: "Medium",
          points: 100,
          status: "pending",
        },
      ],
    },
    "dec-24": {
      date: "December 24, 2025",
      dayLabel: "Wednesday",
      schedule: [
        {
          time: "09:00 AM",
          title: "MongoDB Aggregation Pipelines",
          status: "upcoming",
          duration: "2h",
        },
        {
          time: "11:30 AM",
          title: "Database Optimization Techniques",
          status: "upcoming",
          duration: "1.5h",
        },
        {
          time: "02:00 PM",
          title: "Building Complex Queries",
          status: "upcoming",
          duration: "2.5h",
        },
        {
          time: "05:00 PM",
          title: "Practice Session",
          status: "upcoming",
          duration: "1h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "MongoDB Aggregation Quiz",
          questions: 20,
          timeLimit: "25 min",
          status: "locked",
        },
        {
          type: "code",
          title: "Data Analysis with Aggregation",
          difficulty: "Hard",
          points: 150,
          status: "locked",
        },
        {
          type: "code",
          title: "Query Optimization Task",
          difficulty: "Medium",
          points: 100,
          status: "locked",
        },
      ],
    },
    "dec-25": {
      date: "December 25, 2025",
      dayLabel: "Thursday",
      schedule: [],
      tasks: [],
    },
    "dec-26": {
      date: "December 26, 2025",
      dayLabel: "Friday",
      schedule: [
        {
          time: "09:00 AM",
          title: "Express.js Fundamentals",
          status: "upcoming",
          duration: "2h",
        },
        {
          time: "11:30 AM",
          title: "RESTful API Design",
          status: "upcoming",
          duration: "2h",
        },
        {
          time: "02:00 PM",
          title: "Middleware & Routing",
          status: "upcoming",
          duration: "2.5h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "Express.js Quiz",
          questions: 18,
          timeLimit: "20 min",
          status: "locked",
        },
        {
          type: "code",
          title: "Build a REST API",
          difficulty: "Medium",
          points: 120,
          status: "locked",
        },
      ],
    },
    "dec-27": {
      date: "December 27, 2025",
      dayLabel: "Saturday",
      schedule: [
        {
          time: "09:00 AM",
          title: "Authentication & Authorization",
          status: "upcoming",
          duration: "2.5h",
        },
        {
          time: "12:00 PM",
          title: "JWT Implementation Workshop",
          status: "upcoming",
          duration: "2h",
        },
        {
          time: "02:30 PM",
          title: "Security Best Practices",
          status: "upcoming",
          duration: "2h",
        },
      ],
      tasks: [
        {
          type: "mcq",
          title: "Auth & Security Quiz",
          questions: 22,
          timeLimit: "25 min",
          status: "locked",
        },
        {
          type: "code",
          title: "Implement JWT Auth",
          difficulty: "Hard",
          points: 150,
          status: "locked",
        },
      ],
    },
    "dec-28": {
      date: "December 28, 2025",
      dayLabel: "Sunday",
      schedule: [
        {
          time: "09:00 AM",
          title: "MERN Stack Integration",
          status: "upcoming",
          duration: "3h",
        },
        {
          time: "01:00 PM",
          title: "Full Stack App Workshop",
          status: "upcoming",
          duration: "3h",
        },
      ],
      tasks: [
        {
          type: "code",
          title: "Build Complete MERN App",
          difficulty: "Hard",
          points: 200,
          status: "locked",
        },
      ],
    },
  };

  // Today's data (for dashboard tab)
  const todaySchedule = classesData["dec-23"].schedule;
  const todayTasks = classesData["dec-23"].tasks;

  const weeklyTask = {
    title: "Build a Task Management App with MERN Stack",
    dueDate: "Saturday, Dec 27, 2025",
    status: "In Progress",
    progress: 35,
  };

  const stats = [
    {
      label: "Attendance",
      value: "92%",
      trend: "+5%",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Quiz Average",
      value: "87%",
      trend: "+12%",
      icon: Brain,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Coding Tasks",
      value: "45/52",
      trend: "86%",
      icon: Code,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Current Streak",
      value: "12 days",
      trend: "🔥",
      icon: Award,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">
            Welcome back, Priya! 👋
          </h1>
          <p className="text-gray-600">
            Monday, December 23, 2025 • Week 8 of 12
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm text-green-600">{stat.trend}</span>
              </div>
              <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Schedule */}
          <div className="col-span-2 space-y-6">
            {/* Today's Schedule */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl text-gray-900">Today's Schedule</h2>
                <button
                  // onClick={() => setActiveTab("classes")}
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  View All Classes
                </button>
              </div>
              <div className="space-y-4">
                {todaySchedule.map((session: any, index: any) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                  >
                    <div className="text-center min-w-20">
                      <div className="text-sm text-gray-900">
                        {session.time}
                      </div>

                      <div className="text-xs text-gray-500">
                        {session.duration}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{session.title}</h3>
                      <div className="flex items-center gap-2">
                        {session.status === "completed" && (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                            <CheckCircle className="w-3 h-3" />
                            Completed
                          </span>
                        )}
                        {session.status === "live" && (
                          <span className="inline-flex items-center gap-1 text-xs text-red-600 bg-red-100 px-2 py-1 rounded animate-pulse">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            Live Now
                          </span>
                        )}
                        {session.status === "upcoming" && (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            Upcoming
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => navigate("/cheatsheets")}
                      className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shrink-0"
                    >
                      View
                    </button>
                    {session.status === "live" && (
                      <button
                        onClick={() => navigate("/live")}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Join Now
                      </button>
                    )}
                    {session.status === "completed" && (
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        Watch Recording
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Tasks */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl text-gray-900">Today's Tasks</h2>
                <span className="text-sm text-gray-600">4 pending</span>
              </div>
              <div className="space-y-3">
                {todayTasks.map((task: any, index: any) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-all"
                  >
                    <div
                      className={`w-10 h-10 ${
                        task.type === "mcq" ? "bg-blue-100" : "bg-purple-100"
                      } rounded-lg flex items-center justify-center`}
                    >
                      {task.type === "mcq" ? (
                        <Brain
                          className={`w-5 h-5 ${
                            task.type === "mcq"
                              ? "text-blue-600"
                              : "text-purple-600"
                          }`}
                        />
                      ) : (
                        <Code
                          className={`w-5 h-5 ${
                            task.type === "mcq"
                              ? "text-blue-600"
                              : "text-purple-600"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{task.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        {task.type === "mcq" ? (
                          <>
                            <span>{task.questions} questions</span>
                            <span>•</span>
                            <span>{task.timeLimit}</span>
                          </>
                        ) : (
                          <>
                            <span
                              className={`px-2 py-0.5 rounded ${
                                task.difficulty === "Easy"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-orange-100 text-orange-700"
                              }`}
                            >
                              {task.difficulty}
                            </span>
                            <span>{task.points} points</span>
                          </>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        task.type === "mcq"
                          ? navigate("/mcq-test")
                          : navigate("/code-practice")
                      }
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      Start
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Weekly Task & Quick Actions */}
          <div className="space-y-6">
            {/* Weekly Assignment */}
            <div className="bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">Saturday Challenge</span>
              </div>
              <h3 className="text-lg mb-3">{weeklyTask.title}</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{weeklyTask.progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all"
                    style={{ width: `${weeklyTask.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-purple-100">
                  Due: {weeklyTask.dueDate}
                </span>
              </div>
              <button
                onClick={() => navigate("/weekly-assignment")}
                className="w-full px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50"
              >
                Continue Working
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">This Week</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">
                        Classes Attended
                      </div>
                      <div className="text-xs text-gray-600">5 of 5</div>
                    </div>
                  </div>
                  <div className="text-green-600">100%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">
                        Quizzes Completed
                      </div>
                      <div className="text-xs text-gray-600">8 of 10</div>
                    </div>
                  </div>
                  <div className="text-blue-600">80%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">
                        Coding Problems
                      </div>
                      <div className="text-xs text-gray-600">9 of 10</div>
                    </div>
                  </div>
                  <div className="text-purple-600">90%</div>
                </div>
              </div>
            </div>

            {/* Leaderboard Snippet */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">Your Rank</h3>
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="text-center py-4">
                <div className="text-4xl text-gray-900 mb-1">#24</div>
                <div className="text-sm text-gray-600 mb-4">
                  out of 2,547 students
                </div>
                <div className="text-xs text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block">
                  ↑ Up 8 positions this week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
