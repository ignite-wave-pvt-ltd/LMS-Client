import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Code,
  Brain,
  BookOpen,
  Video,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Curriculum() {
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1]);

  const naviagte = useNavigate();

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks((prev) =>
      prev.includes(weekNum)
        ? prev.filter((w) => w !== weekNum)
        : [...prev, weekNum]
    );
  };

  const curriculumData = [
    {
      week: 1,
      title: "JavaScript Fundamentals & ES6+",
      phase: "Foundation",
      duration: "30 hours",
      topics: [
        { name: "JavaScript Basics Review", type: "lecture", duration: "2h" },
        {
          name: "ES6+ Features: Arrow Functions, Destructuring",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Promises, Async/Await, and Error Handling",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Array Methods: map, filter, reduce",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "JavaScript OOP and Prototypes",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: [
        "JavaScript ES6+",
        "Async Programming",
        "Functional Programming",
      ],
      projects: ["Build a Weather App using Fetch API"],
      assessments: ["Daily coding challenges", "ES6+ Quiz (15 questions)"],
    },
    {
      week: 2,
      title: "React Fundamentals",
      phase: "Foundation",
      duration: "30 hours",
      topics: [
        {
          name: "React Basics: Components, JSX, Props",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "State Management with useState",
          type: "lecture",
          duration: "2h",
        },
        { name: "Event Handling and Forms", type: "lecture", duration: "2h" },
        {
          name: "Component Lifecycle and useEffect",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Conditional Rendering and Lists",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: ["React Components", "State Management", "React Hooks"],
      projects: ["Portfolio Website with React"],
      assessments: [
        "React Basics Quiz",
        "3 coding problems",
        "Weekend Project: Personal Portfolio",
      ],
    },
    {
      week: 3,
      title: "Advanced React Patterns",
      phase: "Foundation",
      duration: "30 hours",
      topics: [
        { name: "Custom Hooks Development", type: "lecture", duration: "3h" },
        {
          name: "Context API and Global State",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "useReducer for Complex State",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "React Router and Navigation",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Performance Optimization: useMemo, useCallback",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: ["Advanced Hooks", "Routing", "Performance Optimization"],
      projects: ["Multi-page Blog Application"],
      assessments: [
        "Advanced React Quiz",
        "Custom Hook Challenge",
        "Weekend: Blog App",
      ],
    },
    {
      week: 4,
      title: "Node.js & Express Basics",
      phase: "Backend Development",
      duration: "30 hours",
      topics: [
        {
          name: "Node.js Fundamentals and NPM",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Express.js Setup and Routing",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Middleware and Request Handling",
          type: "lecture",
          duration: "2h",
        },
        { name: "Building RESTful APIs", type: "lecture", duration: "3h" },
        {
          name: "Error Handling and Validation",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: ["Node.js", "Express.js", "REST API Design"],
      projects: ["E-commerce Product API"],
      assessments: [
        "Node.js Quiz",
        "API Building Challenge",
        "Weekend: Product Management API",
      ],
    },
    {
      week: 5,
      title: "MongoDB & Database Design",
      phase: "Backend Development",
      duration: "30 hours",
      topics: [
        {
          name: "MongoDB Basics and CRUD Operations",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Mongoose ODM and Schema Design",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Relationships: References vs Embedding",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Data Validation and Middleware",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Indexing and Query Optimization",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: ["MongoDB", "Mongoose", "Database Design"],
      projects: ["User Management System with MongoDB"],
      assessments: [
        "MongoDB Quiz",
        "Schema Design Challenge",
        "Weekend: User CRUD API",
      ],
    },
    {
      week: 6,
      title: "Authentication & Security",
      phase: "Backend Development",
      duration: "30 hours",
      topics: [
        {
          name: "JWT Authentication Fundamentals",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Password Hashing with bcrypt",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Protected Routes and Authorization",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Session Management and Cookies",
          type: "lecture",
          duration: "2h",
        },
        { name: "Security Best Practices", type: "lecture", duration: "2h" },
      ],
      skills: ["JWT", "Authentication", "Security"],
      projects: ["Secure Blog Platform with Auth"],
      assessments: [
        "Security Quiz",
        "Auth Implementation",
        "Weekend: Weather Dashboard with Login",
      ],
    },
    {
      week: 7,
      title: "Introduction to GenAI & LLMs",
      phase: "AI Integration",
      duration: "30 hours",
      topics: [
        { name: "AI and LLM Fundamentals", type: "lecture", duration: "2h" },
        { name: "OpenAI API Introduction", type: "lecture", duration: "3h" },
        {
          name: "Prompt Engineering Techniques",
          type: "lecture",
          duration: "3h",
        },
        { name: "Building Chat Applications", type: "lecture", duration: "3h" },
        {
          name: "Streaming Responses and Tokens",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: ["OpenAI API", "Prompt Engineering", "AI Integration"],
      projects: ["AI-Powered Chat Assistant"],
      assessments: [
        "GenAI Basics Quiz",
        "Prompt Engineering Challenge",
        "Weekend: ChatGPT Clone",
      ],
    },
    {
      week: 8,
      title: "Advanced MongoDB & Aggregation",
      phase: "AI Integration",
      duration: "30 hours",
      topics: [
        {
          name: "MongoDB Aggregation Pipelines",
          type: "lecture",
          duration: "3h",
        },
        { name: "Advanced Query Operations", type: "lecture", duration: "2h" },
        {
          name: "Data Transformation with $project, $group",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Performance Tuning and Indexes",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Working with Large Datasets",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: ["Aggregation Pipelines", "Query Optimization", "Data Analysis"],
      projects: ["Task Management App with Advanced Features"],
      assessments: [
        "Aggregation Quiz",
        "Complex Query Challenge",
        "Weekend: Task Manager",
      ],
    },
    {
      week: 9,
      title: "Vector Databases & RAG Systems",
      phase: "AI Integration",
      duration: "30 hours",
      topics: [
        {
          name: "Introduction to Vector Databases",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Embeddings and Semantic Search",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Building RAG (Retrieval Augmented Generation)",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Pinecone/ChromaDB Integration",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Document Processing and Chunking",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: ["Vector Databases", "RAG", "Semantic Search"],
      projects: ["AI Document Q&A System"],
      assessments: [
        "Vector DB Quiz",
        "RAG Implementation",
        "Weekend: Smart Search App",
      ],
    },
    {
      week: 10,
      title: "Full-Stack AI Application Development",
      phase: "Advanced Projects",
      duration: "30 hours",
      topics: [
        {
          name: "Integrating Frontend with AI Backend",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "Real-time AI Features with WebSockets",
          type: "lecture",
          duration: "3h",
        },
        { name: "File Upload and Processing", type: "lecture", duration: "2h" },
        {
          name: "API Rate Limiting and Caching",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Cost Optimization for AI APIs",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: ["Full-Stack Integration", "WebSockets", "Optimization"],
      projects: ["AI Content Generator Platform"],
      assessments: [
        "Integration Quiz",
        "Real-time Feature Task",
        "Weekend: Content Generator",
      ],
    },
    {
      week: 11,
      title: "Deployment & Production Best Practices",
      phase: "Advanced Projects",
      duration: "30 hours",
      topics: [
        {
          name: "Environment Variables and Configuration",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Deploying to Vercel/Netlify (Frontend)",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Deploying to Heroku/Railway (Backend)",
          type: "lecture",
          duration: "3h",
        },
        {
          name: "MongoDB Atlas Production Setup",
          type: "lecture",
          duration: "2h",
        },
        { name: "CI/CD and Monitoring", type: "lecture", duration: "2h" },
      ],
      skills: ["Deployment", "DevOps", "Production Setup"],
      projects: ["Deploy Full-Stack AI Application"],
      assessments: [
        "Deployment Quiz",
        "Production Setup Task",
        "Weekend: Live App Deployment",
      ],
    },
    {
      week: 12,
      title: "Capstone Project & Portfolio Building",
      phase: "Advanced Projects",
      duration: "40 hours",
      topics: [
        {
          name: "Project Planning and Architecture",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Building Your Capstone Project",
          type: "project",
          duration: "20h",
        },
        {
          name: "Code Review and Best Practices",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Portfolio Presentation Skills",
          type: "lecture",
          duration: "2h",
        },
        {
          name: "Interview Preparation and Tips",
          type: "lecture",
          duration: "2h",
        },
      ],
      skills: ["Project Management", "Portfolio Building", "Interview Skills"],
      projects: ["Capstone: Custom AI Application"],
      assessments: [
        "Capstone Project Presentation",
        "Portfolio Review",
        "Final Assessment",
      ],
    },
  ];

  const phaseColors: Record<string, string> = {
    Foundation: "bg-blue-100 text-blue-700 border-blue-200",
    "Backend Development": "bg-green-100 text-green-700 border-green-200",
    "AI Integration": "bg-purple-100 text-purple-700 border-purple-200",
    "Advanced Projects": "bg-orange-100 text-orange-700 border-orange-200",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => naviagte("/")}
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl text-gray-900">12-Week Curriculum</h1>
                <p className="text-sm text-gray-600">
                  GenAI with MERN Stack Program
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-gray-900">GenAI Academy</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-linear-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl mb-4">Complete Learning Roadmap</h1>
            <p className="text-xl text-indigo-100 mb-6">
              From JavaScript fundamentals to deploying production-ready AI
              applications in 12 weeks
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Total Duration</span>
                </div>
                <div className="text-2xl">360+ hrs</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Video className="w-5 h-5" />
                  <span className="text-sm">Live Classes</span>
                </div>
                <div className="text-2xl">60 sessions</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5" />
                  <span className="text-sm">Projects</span>
                </div>
                <div className="text-2xl">12 major</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">Certificate</span>
                </div>
                <div className="text-2xl">Yes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Phases */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            {
              phase: "Foundation",
              weeks: "Weeks 1-3",
              color: "from-blue-500 to-blue-600",
            },
            {
              phase: "Backend Development",
              weeks: "Weeks 4-6",
              color: "from-green-500 to-green-600",
            },
            {
              phase: "AI Integration",
              weeks: "Weeks 7-9",
              color: "from-purple-500 to-purple-600",
            },
            {
              phase: "Advanced Projects",
              weeks: "Weeks 10-12",
              color: "from-orange-500 to-orange-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-linear-to-br ${item.color} rounded-lg p-4 text-white`}
            >
              <div className="text-sm opacity-90 mb-1">{item.weeks}</div>
              <div className="text-lg">{item.phase}</div>
            </div>
          ))}
        </div>

        {/* Weekly Curriculum */}
        <div className="space-y-4">
          {curriculumData.map((week) => (
            <div
              key={week.week}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              {/* Week Header */}
              <button
                onClick={() => toggleWeek(week.week)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">{week.week}</span>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg text-gray-900">{week.title}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded border ${
                          phaseColors[week.phase]
                        }`}
                      >
                        {week.phase}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {week.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        {week.topics.length} sessions
                      </span>
                      <span className="flex items-center gap-1">
                        <Code className="w-4 h-4" />
                        {week.projects.length} project
                        {week.projects.length > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {expandedWeeks.includes(week.week) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Week Details */}
              {expandedWeeks.includes(week.week) && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-6 pt-6">
                    {/* Topics */}
                    <div className="col-span-2 space-y-4">
                      <div>
                        <h4 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Daily Topics
                        </h4>
                        <div className="space-y-2">
                          {week.topics.map((topic, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                                  <span className="text-sm text-indigo-600">
                                    {i + 1}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-900">
                                  {topic.name}
                                </span>
                              </div>
                              <span className="text-xs text-gray-600">
                                {topic.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Projects */}
                      <div>
                        <h4 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          Weekend Projects
                        </h4>
                        <div className="space-y-2">
                          {week.projects.map((project, i) => (
                            <div
                              key={i}
                              className="p-3 bg-green-50 rounded-lg border border-green-200"
                            >
                              <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-green-600" />
                                <span className="text-sm text-gray-900">
                                  {project}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Skills & Assessments */}
                    <div className="space-y-4">
                      {/* Skills */}
                      <div>
                        <h4 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Skills You'll Learn
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {week.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Assessments */}
                      <div>
                        <h4 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
                          <Brain className="w-4 h-4" />
                          Assessments
                        </h4>
                        <div className="space-y-2">
                          {week.assessments.map((assessment, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                              <span>{assessment}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-6 text-indigo-100">
            Join thousands of students mastering GenAI and Full-Stack
            Development
          </p>
          <button
            onClick={() => naviagte("landing")}
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
