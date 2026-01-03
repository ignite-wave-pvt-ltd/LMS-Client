import {
  Home,
  BookOpen,
  Play,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function RightSidebar({}) {
  // const [activeTab, setActiveTab] = useState<
  //   "dashboard" | "classes" | "progress" | "profile" | "live-class"
  // >("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuItems = [
    {
      id: "dashboard",
      label: "Home",
      path: "/home",
      icon: Home,
    },
    {
      id: "classes",
      label: "Classes",
      path: "/classes",
      icon: BookOpen,
    },
    {
      id: "live-class",
      label: "Live",
      path: "/live",
      icon: Play,
    },
    {
      id: "code-playground",
      label: "Playground",
      path: "/code-playground",
      icon: Play,
    },
    {
      id: "progress",
      label: "Progress",
      path: "/progress",
      icon: TrendingUp,
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const onToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Toggle Hump/Handle - Always Visible */}
      <button
        onClick={onToggle}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
          isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative">
          {/* The Hump Shape */}
          <div className="bg-linear-to-l from-indigo-600 to-purple-600 rounded-l-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
            <div className="flex flex-col items-center gap-3 py-6 px-3">
              {/* Icon Indicators */}
              <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      location?.pathname === item.path
                        ? "bg-white w-2 h-2"
                        : "bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Chevron Icon */}
              <div className="mt-2">
                <ChevronLeft className="w-5 h-5 text-white group-hover:animate-pulse" />
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-linear-to-l from-indigo-400 to-purple-400 rounded-l-2xl blur-xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity"></div>
        </div>
      </button>

      {/* Sidebar Content - Slides in from right */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${
          isSidebarOpen
            ? "translate-x-0 opacity-80"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onToggle}
            className="absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-16 bg-linear-to-l from-indigo-600 to-purple-600 rounded-l-xl flex items-center justify-center hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg group"
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:animate-pulse" />
          </button>

          {/* Sidebar Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-l-3xl shadow-2xl border-l border-t border-b border-gray-200 mr-0 overflow-hidden">
            {/* Header */}
            {/* <div className="bg-linear-to-br from-indigo-600 to-purple-600 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm text-white">Quick Nav</h3>
                  <p className="text-[10px] text-indigo-100">Jump to section</p>
                </div>
              </div>
            </div> */}

            {/* Menu Items */}
            <div className="p-3">
              <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={`flex flex-col items-center py-3 px-4 rounded-xl transition-all group ${
                      location?.pathname === item.path
                        ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                        location?.pathname === item.path
                          ? "bg-white/20"
                          : "bg-gray-100 group-hover:bg-gray-200"
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${
                          location?.pathname === item.path
                            ? "stroke-[2.5] text-white"
                            : "stroke-2"
                        }`}
                      />
                    </div>
                    <span className="p-0 text-[12px]">{item.label}</span>
                    {/* <div className="text-left">
                      <div
                        className={`text-sm ${
                          location?.pathname === item.path ? "font-medium" : ""
                        }`}
                      >
                        {item.label}
                      </div>
                      {location?.pathname === item.path && (
                        <div className="text-[10px] opacity-75">Active</div>
                      )}
                    </div> */}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            {/* <div className="px-4 pb-4">
              <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-3 border border-amber-200">
                <div className="text-[10px] text-gray-600 text-center">
                  <div className="text-xs text-gray-900 mb-1">💡 Quick Tip</div>
                  Use these shortcuts to navigate faster
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Backdrop for mobile - optional */}
      {isSidebarOpen && (
        <div
          onClick={onToggle}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
        ></div>
      )}
    </>
  );
}
