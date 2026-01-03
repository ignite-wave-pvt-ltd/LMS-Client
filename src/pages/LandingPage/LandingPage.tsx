import {
  Play,
  Users,
  Code,
  Brain,
  Trophy,
  CheckCircle,
  Clock,
  BookOpen,
  Target,
  Award,
  Video,
  MessageSquare,
  Briefcase,
  TrendingUp,
  Zap,
  Sparkles,
  GraduationCap,
  Rocket,
  BarChart,
  Shield,
  ArrowRight,
  Star,
  Users2,
  Laptop,
  Database,
  Blocks,
  HeadphonesIcon,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();
  const handleStudentLogin = () => {
    navigate("/login");
  };

  const handleInstructorLogin = () => {};

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl text-gray-900">GenAI Academy</span>
              <p className="text-xs text-gray-500">
                Industry-Ready Learning Platform
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-gray-700 hover:text-gray-900">
              Courses
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              Curriculum
            </button>
            <button
              onClick={handleInstructorLogin}
              className="text-gray-700 hover:text-gray-900"
            >
              For Instructors
            </button>
            <button
              onClick={handleStudentLogin}
              className="px-6 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-200 flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-indigo-100 to-purple-100 border border-indigo-200 text-indigo-700 rounded-full mb-8 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">
                Transform Your Career with Industry-Grade Skills
              </span>
            </div>
            <h1 className="text-6xl text-gray-900 mb-6 leading-tight">
              Master{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                MERN Stack & GenAI
              </span>
              <br />
              Build Production-Ready Apps
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Learn from industry experts through live interactive classes,
              hands-on projects, and real-world applications. Get job-ready with
              comprehensive curriculum, career guidance, and interview
              preparation.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleStudentLogin}
                className="px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 flex items-center gap-2 shadow-xl shadow-indigo-200 text-lg group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Learning Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/curriculum")}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-indigo-600 hover:text-indigo-600 flex items-center gap-2 text-lg group"
              >
                Explore Curriculum
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-400 to-purple-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-pink-400 to-red-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-emerald-400 border-2 border-white"></div>
                </div>
                <span>2,500+ Active Learners</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-2">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>Industry Certified</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              {
                label: "Live Learning Hours",
                value: "500+",
                icon: Clock,
                color: "from-blue-500 to-cyan-500",
              },
              {
                label: "Real-World Projects",
                value: "50+",
                icon: Code,
                color: "from-purple-500 to-pink-500",
              },
              {
                label: "Students Placed",
                value: "85%",
                icon: Briefcase,
                color: "from-green-500 to-emerald-500",
              },
              {
                label: "Average Salary Hike",
                value: "150%",
                icon: TrendingUp,
                color: "from-orange-500 to-red-500",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-gray-200 text-center hover:shadow-xl transition-all hover:scale-105 group"
              >
                <div
                  className={`w-12 h-12 bg-linear-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Course Offerings */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm">Exclusive Course Offerings</span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            Industry-Oriented Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive courses designed with industry
            standards, real-world projects, and career-focused learning
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {[
            {
              title: "MERN Stack + GenAI",
              tag: "Most Popular",
              tagColor: "bg-linear-to-r from-indigo-600 to-purple-600",
              icon: Sparkles,
              duration: "16 Weeks",
              level: "Beginner to Advanced",
              description:
                "Complete full-stack development with cutting-edge AI integration. Build intelligent applications using MERN stack and Large Language Models.",
              features: [
                "MongoDB, Express, React, Node.js",
                "OpenAI API & LangChain Integration",
                "Vector Databases & RAG Systems",
                "Real-time AI Chat Applications",
                "Production Deployment & Scaling",
              ],
              projects: "8+ Production Projects",
              color: "from-indigo-50 to-purple-50",
              border: "border-indigo-200",
            },
            {
              title: "Full-Stack MERN",
              tag: "Career Focused",
              tagColor: "bg-linear-to-r from-blue-600 to-cyan-600",
              icon: Code,
              duration: "12 Weeks",
              level: "Beginner to Advanced",
              description:
                "Master the complete MERN stack ecosystem from fundamentals to advanced patterns. Build scalable, production-ready web applications.",
              features: [
                "Advanced React Patterns & Hooks",
                "RESTful API Design & GraphQL",
                "Authentication & Authorization",
                "Database Design & Optimization",
                "DevOps & Cloud Deployment",
              ],
              projects: "6+ Industry Projects",
              color: "from-blue-50 to-cyan-50",
              border: "border-blue-200",
            },
            {
              title: "Python for AI/ML",
              tag: "High Demand",
              tagColor: "bg-linear-to-r from-green-600 to-emerald-600",
              icon: Brain,
              duration: "14 Weeks",
              level: "Beginner to Advanced",
              description:
                "Deep dive into Python programming with AI/ML applications. From basics to building intelligent systems with modern frameworks.",
              features: [
                "Python Fundamentals & OOP",
                "Data Science Libraries (NumPy, Pandas)",
                "Machine Learning with Scikit-learn",
                "Deep Learning with TensorFlow",
                "NLP & Computer Vision Projects",
              ],
              projects: "7+ AI/ML Projects",
              color: "from-green-50 to-emerald-50",
              border: "border-green-200",
            },
          ].map((course, index) => (
            <div
              key={course.title}
              className={`relative bg-linear-to-br ${course.color} rounded-2xl p-8 border-2 ${course.border} hover:shadow-2xl transition-all group`}
            >
              {/* Popular Tag */}
              {index === 0 && (
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-linear-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm shadow-lg flex items-center gap-1 rotate-12">
                  <Star className="w-4 h-4 fill-white" />
                  Bestseller
                </div>
              )}

              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 ${course.tagColor} text-white rounded-full text-sm mb-4 shadow-md`}
              >
                <course.icon className="w-4 h-4" />
                {course.tag}
              </div>

              <h3 className="text-2xl text-gray-900 mb-3">{course.title}</h3>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <BarChart className="w-4 h-4" />
                  {course.level}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="space-y-3 mb-6">
                {course.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Projects</span>
                  <span className="text-sm text-gray-900">
                    {course.projects}
                  </span>
                </div>
              </div>

              <button
                onClick={handleStudentLogin}
                className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group-hover:scale-105"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Learning Features */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
              <Blocks className="w-4 h-4" />
              <span className="text-sm">Complete Learning Experience</span>
            </div>
            <h2 className="text-5xl text-gray-900 mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools, resources, and
              support to transform you into a job-ready developer.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Industry-Oriented Curriculum",
                description:
                  "Structured learning path from fundamentals to advanced concepts, designed by industry experts with 15+ years of experience.",
                color: "bg-blue-100 text-blue-600",
                features: [
                  "Latest Tech Stack",
                  "Real-world Scenarios",
                  "Progressive Learning",
                ],
              },
              {
                icon: Video,
                title: "Live Interactive Classes",
                description:
                  "Daily 6-hour live sessions with expert instructors. Ask questions in real-time and get instant clarification.",
                color: "bg-green-100 text-green-600",
                features: [
                  "Live Coding Sessions",
                  "Q&A Sessions",
                  "Recorded for Review",
                ],
              },
              {
                icon: Code,
                title: "Hands-On Practice",
                description:
                  "Daily coding exercises, weekly assignments, and capstone projects to build your portfolio and practical skills.",
                color: "bg-purple-100 text-purple-600",
                features: [
                  "200+ Coding Tasks",
                  "Weekly Projects",
                  "Code Reviews",
                ],
              },
              {
                icon: Rocket,
                title: "Real Industry Projects",
                description:
                  "Build production-grade applications like e-commerce platforms, AI chatbots, and social media apps.",
                color: "bg-pink-100 text-pink-600",
                features: [
                  "8+ Full Projects",
                  "GitHub Portfolio",
                  "Live Deployment",
                ],
              },
              {
                icon: MessageSquare,
                title: "Live Doubt Resolution",
                description:
                  "24/7 support through dedicated doubt resolution sessions. Never get stuck on problems alone.",
                color: "bg-indigo-100 text-indigo-600",
                features: ["Instant Help", "Peer Learning", "Mentor Support"],
              },
              {
                icon: BarChart,
                title: "Progress Tracking",
                description:
                  "Advanced analytics dashboard to track attendance, assignments, quiz scores, and skill development.",
                color: "bg-orange-100 text-orange-600",
                features: [
                  "Performance Metrics",
                  "Skill Assessment",
                  "Weekly Reports",
                ],
              },
              {
                icon: Award,
                title: "Industry Certification",
                description:
                  "Earn recognized certificates upon completion. Showcase your skills to potential employers with credibility.",
                color: "bg-yellow-100 text-yellow-600",
                features: [
                  "Verified Certificate",
                  "LinkedIn Badge",
                  "Skill Validation",
                ],
              },
              {
                icon: Briefcase,
                title: "Career Guidance",
                description:
                  "Resume building, LinkedIn optimization, and portfolio development to stand out in the job market.",
                color: "bg-teal-100 text-teal-600",
                features: [
                  "Resume Reviews",
                  "Mock Interviews",
                  "Job Referrals",
                ],
              },
              {
                icon: Users2,
                title: "Interview Preparation",
                description:
                  "Comprehensive interview prep with DSA practice, system design, and behavioral interview training.",
                color: "bg-rose-100 text-rose-600",
                features: ["DSA Practice", "Mock Interviews", "HR Preparation"],
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all group"
              >
                <div
                  className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Roadmap */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm">Learning Roadmap</span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            From Fundamentals to Production
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progressive curriculum designed to take you from basics to building
            production-ready applications step by step.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-indigo-600 via-purple-600 to-pink-600 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-12">
            {[
              {
                phase: "Phase 1",
                weeks: "Weeks 1-4",
                title: "Frontend Fundamentals",
                description:
                  "Master the building blocks of modern web development",
                topics: [
                  "JavaScript ES6+ & Modern Syntax",
                  "React.js Fundamentals & Hooks",
                  "Component Architecture & Design Patterns",
                  "State Management (Context, Redux)",
                  "Tailwind CSS & Responsive Design",
                ],
                color: "from-blue-500 to-cyan-500",
                icon: Code,
              },
              {
                phase: "Phase 2",
                weeks: "Weeks 5-8",
                title: "Backend & Database",
                description:
                  "Build robust server-side applications and databases",
                topics: [
                  "Node.js & Express.js Architecture",
                  "RESTful API Design & Best Practices",
                  "MongoDB Schema Design & Optimization",
                  "Authentication & Authorization (JWT, OAuth)",
                  "Security Best Practices & Validation",
                ],
                color: "from-green-500 to-emerald-500",
                icon: Database,
              },
              {
                phase: "Phase 3",
                weeks: "Weeks 9-12",
                title: "Full-Stack Integration",
                description: "Connect frontend and backend seamlessly",
                topics: [
                  "Full-Stack MERN Application Development",
                  "Real-time Features with WebSockets",
                  "File Upload & Media Management",
                  "Payment Gateway Integration",
                  "Testing & Debugging Strategies",
                ],
                color: "from-purple-500 to-pink-500",
                icon: Blocks,
              },
              {
                phase: "Phase 4",
                weeks: "Weeks 13-16",
                title: "GenAI & Advanced Concepts",
                description:
                  "Integrate AI capabilities and deploy to production",
                topics: [
                  "OpenAI API & LangChain Integration",
                  "Prompt Engineering & Fine-tuning",
                  "Vector Databases & RAG Systems",
                  "Cloud Deployment (AWS, Vercel, Heroku)",
                  "CI/CD Pipelines & DevOps Basics",
                ],
                color: "from-orange-500 to-red-500",
                icon: Sparkles,
              },
            ].map((phase, index) => (
              <div
                key={phase.phase}
                className="relative grid grid-cols-2 gap-8 items-center"
              >
                {/* Phase Number Circle */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                  <div
                    className={`w-16 h-16 bg-linear-to-br ${phase.color} rounded-full flex items-center justify-center shadow-xl`}
                  >
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content (alternating sides) */}
                <div
                  className={`${
                    index % 2 === 0 ? "text-right pr-12" : "col-start-2 pl-12"
                  } lg:block hidden`}
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-2xl transition-all">
                    <div
                      className={`inline-block px-4 py-2 bg-linear-to-r ${phase.color} text-white rounded-full text-sm mb-4 shadow-md`}
                    >
                      {phase.weeks}
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{phase.description}</p>
                    <div
                      className={`space-y-3 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      {phase.topics.map((topic) => (
                        <div
                          key={topic}
                          className={`flex items-start gap-3 text-sm text-gray-700 ${
                            index % 2 === 0 ? "flex-row-reverse" : ""
                          }`}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden col-span-2">
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-linear-to-br ${phase.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          {phase.weeks}
                        </div>
                        <h3 className="text-xl text-gray-900">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{phase.description}</p>
                    <div className="space-y-3">
                      {phase.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="bg-linear-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-4">
              <Laptop className="w-4 h-4" />
              <span className="text-sm">Modern Tech Stack</span>
            </div>
            <h2 className="text-5xl mb-6">Technologies You'll Master</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn industry-standard tools and frameworks used by top companies
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-6">
            {[
              { name: "React.js", category: "Frontend" },
              { name: "Node.js", category: "Backend" },
              { name: "MongoDB", category: "Database" },
              { name: "Express.js", category: "Framework" },
              { name: "TypeScript", category: "Language" },
              { name: "Tailwind CSS", category: "Styling" },
              { name: "OpenAI API", category: "AI/ML" },
              { name: "LangChain", category: "AI Framework" },
              { name: "Git & GitHub", category: "Version Control" },
              { name: "AWS / Vercel", category: "Deployment" },
              { name: "Docker", category: "DevOps" },
              { name: "PostgreSQL", category: "SQL Database" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm">Who Should Join</span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            Perfect For Every Aspiring Developer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're starting fresh or leveling up, our courses are
            designed for learners at every stage of their journey.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "College Students",
              description:
                "Build industry-ready skills while in college. Get ahead of your peers with real-world project experience.",
              benefits: [
                "Portfolio Building",
                "Internship Ready",
                "Competitive Edge",
              ],
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Rocket,
              title: "Career Switchers",
              description:
                "Transition into tech with comprehensive training. No prior coding experience required to start.",
              benefits: [
                "Structured Learning",
                "Career Support",
                "Job-Ready Skills",
              ],
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: TrendingUp,
              title: "Working Professionals",
              description:
                "Upskill and advance your career. Flexible learning schedule designed for working professionals.",
              benefits: [
                "Advanced Concepts",
                "Salary Growth",
                "Career Advancement",
              ],
              color: "from-green-500 to-emerald-500",
            },
          ].map((audience) => (
            <div
              key={audience.title}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-2xl transition-all group"
            >
              <div
                className={`w-16 h-16 bg-linear-to-br ${audience.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}
              >
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">{audience.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {audience.description}
              </p>
              <div className="space-y-3">
                {audience.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Trophy className="w-5 h-5" />
              <span className="text-sm">Limited Seats Available</span>
            </div>
            <h2 className="text-5xl mb-6">Ready to Transform Your Career?</h2>
            <p className="text-2xl mb-10 text-indigo-100 max-w-2xl mx-auto">
              Join 2,500+ students who are already building their dream careers
              with industry-ready skills.
            </p>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={handleStudentLogin}
                className="px-10 py-5 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 text-lg shadow-2xl flex items-center gap-3 group"
              >
                <Rocket className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Start Learning Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/curriculum")}
                className="px-10 py-5 border-2 border-white text-white rounded-xl hover:bg-white/10 text-lg flex items-center gap-3"
              >
                View Full Curriculum
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-indigo-100">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Industry Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg text-gray-900">GenAI Academy</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Industry-ready learning platform for MERN Stack and GenAI
                development.
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-900 mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>MERN Stack + GenAI</li>
                <li>Full-Stack MERN</li>
                <li>Python for AI/ML</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>About Us</li>
                <li>Instructors</li>
                <li>Success Stories</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              © 2025 GenAI Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
