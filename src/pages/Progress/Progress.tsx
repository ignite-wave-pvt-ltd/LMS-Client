import {
  TrendingUp,
  Calendar,
  Brain,
  Code,
  Award,
  Target,
  Clock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

export function ProgressAnalytics() {
  const weeklyAttendance = [
    { week: "Week 1", attendance: 95 },
    { week: "Week 2", attendance: 100 },
    { week: "Week 3", attendance: 90 },
    { week: "Week 4", attendance: 100 },
    { week: "Week 5", attendance: 85 },
    { week: "Week 6", attendance: 95 },
    { week: "Week 7", attendance: 100 },
    { week: "Week 8", attendance: 92 },
  ];

  const quizScores = [
    { week: "Week 1", score: 75 },
    { week: "Week 2", score: 82 },
    { week: "Week 3", score: 78 },
    { week: "Week 4", score: 88 },
    { week: "Week 5", score: 85 },
    { week: "Week 6", score: 90 },
    { week: "Week 7", score: 92 },
    { week: "Week 8", score: 87 },
  ];

  const codingProgress = [
    { category: "Completed", value: 45, color: "#10b981" },
    { category: "In Progress", value: 3, color: "#f59e0b" },
    { category: "Not Started", value: 4, color: "#e5e7eb" },
  ];

  const skillsData = [
    { subject: "React", score: 88 },
    { subject: "Node.js", score: 82 },
    { subject: "MongoDB", score: 75 },
    { subject: "Express", score: 80 },
    { subject: "JavaScript", score: 90 },
    { subject: "GenAI", score: 70 },
  ];

  const weeklyAssignments = [
    { week: "Week 2", title: "Portfolio Website", score: 96, submitted: true },
    {
      week: "Week 4",
      title: "E-commerce Product Page",
      score: 85,
      submitted: true,
    },
    {
      week: "Week 6",
      title: "Weather Dashboard App",
      score: 90,
      submitted: true,
    },
    {
      week: "Week 8",
      title: "Task Management App",
      score: null,
      submitted: false,
    },
  ];

  const recentActivity = [
    {
      date: "Today",
      activity: "Completed MongoDB quiz",
      score: "87%",
      icon: Brain,
      color: "bg-blue-100 text-blue-600",
    },
    {
      date: "Today",
      activity: "Solved coding problem",
      points: "+100 pts",
      icon: Code,
      color: "bg-purple-100 text-purple-600",
    },
    {
      date: "Yesterday",
      activity: "Attended live class",
      duration: "6 hours",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
    },
    {
      date: "Yesterday",
      activity: "Updated weekly assignment",
      progress: "35%",
      icon: Target,
      color: "bg-orange-100 text-orange-600",
    },
    {
      date: "2 days ago",
      activity: "Completed React quiz",
      score: "92%",
      icon: Brain,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <Header /> */}
      <div className="bg-white border-b border-gray-200 mb-3 rounded-b-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-xl text-gray-900">Progress & Analytics</h1>
                <p className="text-sm text-gray-600">
                  Track your learning journey and achievements
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-indigo-500">
                <option>Last 8 Weeks</option>
                <option>Last 4 Weeks</option>
                <option>All Time</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Overall Progress",
              value: "67%",
              change: "+8% from last month",
              icon: TrendingUp,
              color: "bg-indigo-100 text-indigo-600",
            },
            {
              label: "Attendance Rate",
              value: "92%",
              change: "46/50 classes",
              icon: Calendar,
              color: "bg-green-100 text-green-600",
            },
            {
              label: "Avg Quiz Score",
              value: "87%",
              change: "Top 15%",
              icon: Brain,
              color: "bg-blue-100 text-blue-600",
            },
            {
              label: "Coding Tasks",
              value: "45/52",
              change: "86% completion",
              icon: Code,
              color: "bg-purple-100 text-purple-600",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-xs text-green-600">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="col-span-2 space-y-6">
            {/* Attendance Chart */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg text-gray-900">Weekly Attendance</h3>
                  <p className="text-sm text-gray-600">
                    Class participation over time
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-indigo-600 rounded"></div>
                  <span className="text-gray-600">Attendance %</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyAttendance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="week" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar
                    dataKey="attendance"
                    fill="#4f46e5"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Quiz Performance Chart */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg text-gray-900">
                    Quiz Performance Trend
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your quiz scores over time
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Score %</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={quizScores}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="week" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ fill: "#2563eb", r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Skills Radar Chart */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg text-gray-900">Skills Assessment</h3>
                  <p className="text-sm text-gray-600">
                    Your proficiency across different technologies
                  </p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={skillsData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis
                    dataKey="subject"
                    stroke="#6b7280"
                    fontSize={12}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    stroke="#6b7280"
                    fontSize={10}
                  />
                  <Radar
                    name="Skills"
                    dataKey="score"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.6}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Weekly Assignments */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">Weekly Assignments</h3>
              <div className="space-y-3">
                {weeklyAssignments.map((assignment, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          assignment.submitted
                            ? "bg-green-100"
                            : "bg-orange-100"
                        }`}
                      >
                        {assignment.submitted ? (
                          <Award
                            className={`w-6 h-6 ${
                              assignment.submitted
                                ? "text-green-600"
                                : "text-orange-600"
                            }`}
                          />
                        ) : (
                          <Clock className="w-6 h-6 text-orange-600" />
                        )}
                      </div>
                      <div>
                        <div className="text-gray-900">{assignment.title}</div>
                        <div className="text-sm text-gray-600">
                          {assignment.week}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {assignment.submitted ? (
                        <>
                          <div className="text-lg text-gray-900">
                            {assignment.score}%
                          </div>
                          <div className="text-xs text-gray-600">Submitted</div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm text-orange-600">
                            In Progress
                          </div>
                          <div className="text-xs text-gray-600">
                            Due Saturday
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Coding Tasks Breakdown */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">Coding Tasks</h3>
              <div className="mb-6">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={codingProgress}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {codingProgress.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {codingProgress.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-700">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard Position */}
            <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-yellow-600" />
                <h3 className="text-lg text-gray-900">Your Rank</h3>
              </div>
              <div className="text-center py-4">
                <div className="text-5xl text-gray-900 mb-2">#24</div>
                <div className="text-sm text-gray-600 mb-4">
                  out of 2,547 students
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-green-600">
                    ↑ 8 positions this week
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-yellow-200">
                <div className="text-xs text-gray-600 mb-2">
                  Top 3 in your batch:
                </div>
                <div className="space-y-2">
                  {["Arjun M.", "Sneha R.", "Vikram S."].map((name, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            i === 0
                              ? "bg-yellow-400"
                              : i === 1
                              ? "bg-gray-300"
                              : "bg-orange-400"
                          } text-white text-xs`}
                        >
                          {i + 1}
                        </div>
                        <span className="text-gray-700">{name}</span>
                      </div>
                      <span className="text-gray-600">{95 - i * 2}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex gap-3">
                    <div
                      className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center shrink-0`}
                    >
                      <activity.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">
                        {activity.activity}
                      </div>
                      <div className="text-xs text-gray-600">
                        {activity.date}
                      </div>
                    </div>
                    <div className="text-xs text-gray-900">
                      {activity.score ||
                        activity.points ||
                        activity.duration ||
                        activity.progress}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Streak */}
            <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">Study Streak</h3>
                <span className="text-2xl">🔥</span>
              </div>
              <div className="text-center">
                <div className="text-4xl text-gray-900 mb-1">12 Days</div>
                <div className="text-sm text-gray-600 mb-4">Keep it up!</div>
                <div className="flex gap-1 justify-center">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded flex items-center justify-center text-xs ${
                        i < 5
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
