import { useState } from "react";
import { CalendarBar } from "../../layouts/header/CalendarBar";
import {
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  FileText,
  Lock,
  Play,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const StudentClasses = () => {
  const [selectedDay, setSelectedDay] = useState("dec-23");

  const navigate = useNavigate();
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
  const currentDayData = classesData[selectedDay] || {
    date: "Date not available",
    dayLabel: "Unknown",
    schedule: [],
    tasks: [],
  };

  return (
    <div>
      {/* <Header /> */}
      <>
        {/* Calendar Bar - Replaces old header and day selector */}
        <CalendarBar selectedDay={selectedDay} onSelectDay={setSelectedDay} />

        {/* Main Content */}
        <div className="mt-3">
          {/* Selected Day Header Card */}
          <div className="mb-6 bg-linear-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl mb-1">{currentDayData.dayLabel}</h2>
                <p className="text-indigo-100">{currentDayData.date}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-indigo-100 mb-1">
                  Classes Today
                </div>
                <div className="text-2xl">
                  {currentDayData.schedule.length || "No"}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Schedule for Selected Day */}
            <div className="col-span-2 space-y-6">
              {/* Cheat Sheet for Selected Day */}

              {selectedDay === "dec-24" && (
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Lock className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">Cheat Sheet Locked</h3>
                      <p className="text-sm text-gray-600">
                        Complete today's classes to unlock this cheat sheet
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="text-xl text-gray-900 mb-6">Class Schedule</h2>
                {currentDayData.schedule.length === 0 ? (
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg text-gray-900 mb-2">
                      No Classes Scheduled
                    </h3>
                    <p className="text-sm text-gray-600">
                      Enjoy your day off! Classes resume soon.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {currentDayData.schedule.map(
                      (session: any, index: number) => (
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
                            <h3 className="text-gray-900 mb-1">
                              {session.title}
                            </h3>
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
                          {session.status === "upcoming" && (
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                              Set Reminder
                            </button>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Tasks for Selected Day */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl text-gray-900">Tasks & Assignments</h2>
                  {currentDayData.tasks.length > 0 && (
                    <span className="text-sm text-gray-600">
                      {
                        currentDayData.tasks.filter(
                          (t: any) => t.status === "pending"
                        ).length
                      }{" "}
                      pending
                    </span>
                  )}
                </div>
                {currentDayData.tasks.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg text-gray-900 mb-2">
                      No Tasks Assigned
                    </h3>
                    <p className="text-sm text-gray-600">
                      Check back later for assignments and quizzes.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {currentDayData.tasks.map((task: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-all"
                      >
                        <div
                          className={`w-10 h-10 ${
                            task.type === "mcq"
                              ? "bg-blue-100"
                              : "bg-purple-100"
                          } rounded-lg flex items-center justify-center`}
                        >
                          {task.type === "mcq" ? (
                            <Brain className="w-5 h-5 text-blue-600" />
                          ) : (
                            <Code className="w-5 h-5 text-purple-600" />
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
                                      : task.difficulty === "Medium"
                                      ? "bg-orange-100 text-orange-700"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  {task.difficulty}
                                </span>
                                <span>{task.points} points</span>
                              </>
                            )}
                          </div>
                        </div>
                        {task.status === "completed" && (
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-green-600">
                              {task.score}%
                            </span>
                          </div>
                        )}
                        {task.status === "pending" && (
                          <button
                            onClick={
                              () => task.type === "mcq"
                              //   ? onNavigate("mcq-test")
                              //   : onNavigate("code-practice")
                            }
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                          >
                            Start
                          </button>
                        )}
                        {task.status === "locked" && (
                          <span className="text-sm text-gray-400">Locked</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Right sidebar - Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg text-gray-900 mb-4">Day Summary</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Total Classes</span>
                      <span className="text-gray-900">
                        {currentDayData.schedule.length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Completed</span>
                      <span className="text-green-600">
                        {
                          currentDayData.schedule.filter(
                            (s: any) => s.status === "completed"
                          ).length
                        }
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Upcoming</span>
                      <span className="text-orange-600">
                        {
                          currentDayData.schedule.filter(
                            (s: any) => s.status === "upcoming"
                          ).length
                        }
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Total Tasks</span>
                      <span className="text-gray-900">
                        {currentDayData.tasks.length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Completed</span>
                      <span className="text-green-600">
                        {
                          currentDayData.tasks.filter(
                            (t: any) => t.status === "completed"
                          ).length
                        }
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Pending</span>
                      <span className="text-orange-600">
                        {
                          currentDayData.tasks.filter(
                            (t: any) => t.status === "pending"
                          ).length
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default StudentClasses;
