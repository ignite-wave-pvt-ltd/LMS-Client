import {
  User,
  Mail,
  Calendar,
  BookOpen,
  Code,
  Trophy,
  TrendingUp,
  Clock,
  MapPin,
  Phone,
  Edit2,
  Save,
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Student User",
    email: "student@genai.academy",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    bio: "Aspiring full-stack developer passionate about MERN stack and AI technologies. Currently learning GenAI and modern web development.",
    enrollmentDate: "December 1, 2025",
    batch: "MERN-GenAI-Batch-07",
    studentId: "GA2025-1247",
  });

  const stats = [
    {
      label: "Total Classes",
      value: "48",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Attendance",
      value: "92%",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Avg Quiz Score",
      value: "87%",
      icon: Trophy,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Coding Tasks",
      value: "45/52",
      icon: Code,
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  const achievements = [
    {
      title: "7 Day Streak",
      icon: "🔥",
      color: "bg-orange-100 text-orange-600",
      date: "Current",
    },
    {
      title: "Perfect Attendance",
      icon: "🎯",
      color: "bg-green-100 text-green-600",
      date: "Week 2",
    },
    {
      title: "Top Performer",
      icon: "⭐",
      color: "bg-yellow-100 text-yellow-600",
      date: "Week 3",
    },
    {
      title: "Code Master",
      icon: "💻",
      color: "bg-blue-100 text-blue-600",
      date: "Week 4",
    },
  ];

  const recentActivity = [
    {
      action: "Completed MongoDB Aggregation Quiz",
      score: "90%",
      time: "2 hours ago",
      type: "quiz",
    },
    {
      action: "Submitted Weekly Assignment",
      score: "Pending",
      time: "5 hours ago",
      type: "assignment",
    },
    {
      action: "Attended Advanced React Patterns",
      score: "Present",
      time: "1 day ago",
      type: "class",
    },
    {
      action: "Completed Custom Hook Challenge",
      score: "95%",
      time: "2 days ago",
      type: "code",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 78 },
    { name: "Node.js", level: 72 },
    { name: "MongoDB", level: 68 },
    { name: "Express.js", level: 70 },
    { name: "TypeScript", level: 65 },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend/database
  };

  return (
    <div>
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl text-gray-900">My Profile</h1>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Card & Stats */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-linear-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    className="w-full text-xl text-gray-900 text-center border border-gray-300 rounded-lg px-3 py-2 mb-2"
                  />
                ) : (
                  <h2 className="text-xl text-gray-900 mb-1">
                    {profileData.name}
                  </h2>
                )}
                <p className="text-sm text-gray-600 mb-1">{"Student"}</p>
                <p className="text-xs text-gray-500 mb-4">
                  {profileData.studentId}
                </p>

                <div className="w-full space-y-3 mt-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    ) : (
                      <span className="text-gray-700">{profileData.email}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone: e.target.value,
                          })
                        }
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    ) : (
                      <span className="text-gray-700">{profileData.phone}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            location: e.target.value,
                          })
                        }
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    ) : (
                      <span className="text-gray-700">
                        {profileData.location}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">
                      Joined {profileData.enrollmentDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm text-gray-900 mb-2">About</h3>
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    className="w-full text-sm text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                    rows={4}
                  />
                ) : (
                  <p className="text-sm text-gray-600">{profileData.bio}</p>
                )}
              </div>

              {/* Batch Info */}
              <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                <div className="text-xs text-indigo-600 mb-1">
                  Current Batch
                </div>
                <div className="text-sm text-indigo-900">
                  {profileData.batch}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">Performance Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-xl text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`${achievement.color} rounded-lg p-3 flex items-center gap-3`}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm">{achievement.title}</div>
                      <div className="text-xs opacity-70">
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activity & Skills */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg text-gray-900">Recent Activity</h3>
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                  >
                    <div
                      className={`w-10 h-10 ${
                        activity.type === "quiz"
                          ? "bg-blue-100"
                          : activity.type === "code"
                          ? "bg-purple-100"
                          : activity.type === "assignment"
                          ? "bg-orange-100"
                          : "bg-green-100"
                      } rounded-lg flex items-center justify-center shrink-0`}
                    >
                      {activity.type === "quiz" && (
                        <Trophy className="w-5 h-5 text-blue-600" />
                      )}
                      {activity.type === "code" && (
                        <Code className="w-5 h-5 text-purple-600" />
                      )}
                      {activity.type === "assignment" && (
                        <BookOpen className="w-5 h-5 text-orange-600" />
                      )}
                      {activity.type === "class" && (
                        <Calendar className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900 mb-1">
                        {activity.action}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span>{activity.time}</span>
                        {activity.score && (
                          <>
                            <span>•</span>
                            <span
                              className={
                                activity.score === "Pending"
                                  ? "text-orange-600"
                                  : "text-green-600"
                              }
                            >
                              {activity.score}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Progress */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg text-gray-900">Skills Progress</h3>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-full h-2.5 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg mb-4">Course Progress</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-indigo-100">
                    MERN Stack with GenAI
                  </span>
                  <span className="text-sm">68%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-white rounded-full h-3 transition-all"
                    style={{ width: "68%" }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl mb-1">32</div>
                  <div className="text-xs text-indigo-100">Days Active</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">156</div>
                  <div className="text-xs text-indigo-100">Hours Learned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">12</div>
                  <div className="text-xs text-indigo-100">Day Streak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
