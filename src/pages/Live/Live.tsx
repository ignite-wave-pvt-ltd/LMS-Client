import { useState } from "react";
import {
  ArrowLeft,
  Video,
  Mic,
  MicOff,
  VideoOff,
  Monitor,
  MessageSquare,
  Download,
  BookOpen,
  Users,
  Send,
  ThumbsUp,
  Brain,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LiveClass() {
  const [activeTab, setActiveTab] = useState<"chat" | "notes" | "resources">(
    "chat"
  );
  const [message, setMessage] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(true);
  const navigate = useNavigate();

  const chatMessages = [
    {
      user: "Instructor",
      message:
        "Welcome everyone! Today we're diving into MongoDB aggregation pipelines",
      time: "2:05 PM",
      type: "instructor",
    },
    {
      user: "Rahul K.",
      message: "Excited for this topic!",
      time: "2:06 PM",
      type: "student",
    },
    {
      user: "Priya S.",
      message: "Can we cover indexing strategies too?",
      time: "2:07 PM",
      type: "student",
    },
    {
      user: "Instructor",
      message:
        "Great question Priya! Yes, we'll cover indexing in the second half",
      time: "2:08 PM",
      type: "instructor",
    },
    {
      user: "Amit P.",
      message: "Could you share the GitHub repo link?",
      time: "2:10 PM",
      type: "student",
    },
    {
      user: "TA - Sarah",
      message: "Link shared in resources tab 👍",
      time: "2:11 PM",
      type: "ta",
    },
  ];

  const notes = [
    {
      title: "MongoDB Aggregation Basics",
      content: "Pipeline stages: $match, $group, $sort, $project",
    },
    {
      title: "Performance Optimization",
      content: "Use $match early in pipeline, create appropriate indexes",
    },
    {
      title: "Common Patterns",
      content:
        "Grouping by date, calculating averages, filtering nested arrays",
    },
  ];

  const resources = [
    {
      name: "MongoDB Aggregation Cheat Sheet.pdf",
      size: "2.4 MB",
      type: "PDF",
    },
    { name: "Class Code Repository", size: "GitHub", type: "Link" },
    { name: "Practice Dataset - users.json", size: "856 KB", type: "JSON" },
    { name: "Aggregation Pipeline Examples", size: "1.2 MB", type: "PDF" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/home")}
              className="w-9 h-9 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600"
            >
              <ArrowLeft className="w-5 h-5 text-gray-300" />
            </button>
            <div>
              <h1 className="text-white">MongoDB & Mongoose Deep Dive</h1>
              <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Live
                </span>
                <span>•</span>
                <span>Week 8, Day 2</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  250 participants
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Record
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Leave Class
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Container */}
          <div className="flex-1 bg-gray-950 relative flex items-center justify-center">
            {/* Simulated Video Feed */}
            <div className="w-full h-full bg-linear-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-white">RK</span>
                </div>
                <h3 className="text-2xl text-white mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-gray-400">Instructor</p>
              </div>
            </div>

            {/* Screen Share Indicator */}
            <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-lg flex items-center gap-2 text-sm">
              <Monitor className="w-4 h-4" />
              Screen Sharing
            </div>

            {/* Timer */}
            <div className="absolute top-4 right-4 bg-gray-800/90 text-white px-4 py-2 rounded-lg text-sm">
              1:23:45
            </div>

            {/* Live Reactions */}
            <div className="absolute bottom-20 right-4 space-y-2">
              {["👍", "🔥", "💡"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-gray-800/90 rounded-full flex items-center justify-center text-xl animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Controls Bar */}
          <div className="bg-gray-800 border-t border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isMuted
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {isMuted ? (
                    <MicOff className="w-5 h-5 text-white" />
                  ) : (
                    <Mic className="w-5 h-5 text-white" />
                  )}
                </button>
                <button
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isVideoOff
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {isVideoOff ? (
                    <VideoOff className="w-5 h-5 text-white" />
                  ) : (
                    <Video className="w-5 h-5 text-white" />
                  )}
                </button>
                <button className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600">
                  <Monitor className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4" />
                  React
                </button>
                <button
                  //   onClick={() => onNavigate("mcq-test")}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                >
                  <Brain className="w-4 h-4" />
                  Take Quiz
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-96 bg-gray-800 border-l border-gray-700 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            {[
              { id: "chat", label: "Chat", icon: MessageSquare },
              { id: "notes", label: "Notes", icon: BookOpen },
              { id: "resources", label: "Resources", icon: Download },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-gray-700 text-white border-b-2 border-indigo-500"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === "chat" && (
              <div className="p-4 space-y-4">
                {chatMessages.map((msg, i) => (
                  <div key={i} className="flex gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        msg.type === "instructor"
                          ? "bg-indigo-600"
                          : msg.type === "ta"
                          ? "bg-purple-600"
                          : "bg-gray-600"
                      }`}
                    >
                      <span className="text-xs text-white">
                        {msg.user.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span
                          className={`text-sm ${
                            msg.type === "instructor"
                              ? "text-indigo-400"
                              : msg.type === "ta"
                              ? "text-purple-400"
                              : "text-gray-300"
                          }`}
                        >
                          {msg.user}
                        </span>
                        <span className="text-xs text-gray-500">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "notes" && (
              <div className="p-4 space-y-4">
                {notes.map((note, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-4">
                    <h4 className="text-white mb-2">{note.title}</h4>
                    <p className="text-sm text-gray-300">{note.content}</p>
                  </div>
                ))}
                <button className="w-full px-4 py-3 border-2 border-dashed border-gray-600 text-gray-400 rounded-lg hover:border-gray-500 hover:text-gray-300">
                  + Add Your Note
                </button>
              </div>
            )}

            {activeTab === "resources" && (
              <div className="p-4 space-y-3">
                {resources.map((resource, i) => (
                  <div
                    key={i}
                    className="bg-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-650"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <Download className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white">
                          {resource.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {resource.size}
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chat Input */}
          {activeTab === "chat" && (
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-500"
                />
                <button className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
