import { Bell, Brain, User } from "lucide-react";
import { useState } from "react";
import { NotificationDropdown } from "./NotificationDropdown";
import { UserAccountMenu } from "./UserAccountMenu";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const navigate = useNavigate();

  const { logout, user } = useAuth();

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className=" w-full ">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-900">GenAI Academy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Notification Dropdown */}
                {showNotifications && (
                  <NotificationDropdown
                    onClose={() => setShowNotifications(false)}
                  />
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowAccountMenu(!showAccountMenu)}
                  className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center hover:bg-indigo-200"
                >
                  <User className="w-5 h-5 text-indigo-600" />
                </button>

                {/* User Account Menu */}
                {showAccountMenu && (
                  <UserAccountMenu
                    userName={user?.name ?? "User"}
                    userEmail={user?.email ?? ""}
                    onViewProfile={() => {
                      navigate("/profile");
                      setShowAccountMenu(false);
                    }}
                    onNotifications={() => {
                      setShowNotifications(true);
                      setShowAccountMenu(false);
                    }}
                    onLogout={onLogout}
                    onClose={() => setShowAccountMenu(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
