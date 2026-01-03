import { User, Settings, Bell, LogOut, UserCircle } from "lucide-react";
import type { UserAccountMenuProps } from "../../types/ui";

export function UserAccountMenu({
  userName,
  userEmail,
  onViewProfile,
  onNotifications,
  onLogout,
  onClose,
}: UserAccountMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose}></div>

      {/* Dropdown Menu */}
      <div className="absolute right-0 top-14 bg-white rounded-xl shadow-2xl border border-gray-200 w-72 z-50 overflow-hidden">
        {/* User Info Header */}
        <div className="bg-linear-to-br from-indigo-600 to-purple-600 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
              <User className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm truncate">{userName}</h3>
              <p className="text-xs text-indigo-100 truncate">{userEmail}</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          <button
            onClick={onViewProfile}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
          >
            <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center">
              <UserCircle className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="text-sm text-gray-900">View Profile</div>
              <div className="text-xs text-gray-600">Manage your account</div>
            </div>
          </button>

          <button
            onClick={onNotifications}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
          >
            <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center relative">
              <Bell className="w-5 h-5 text-blue-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <div>
              <div className="text-sm text-gray-900">Notifications</div>
              <div className="text-xs text-gray-600">3 unread messages</div>
            </div>
          </button>

          <button
            onClick={() => {
              onClose();
              // Settings functionality can be added later
            }}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
          >
            <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-900">Settings</div>
              <div className="text-xs text-gray-600">Preferences & privacy</div>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Logout */}
        <div className="py-2">
          <button
            onClick={onLogout}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 transition-colors text-left"
          >
            <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center">
              <LogOut className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <div className="text-sm text-red-600">Logout</div>
              <div className="text-xs text-red-400">
                Sign out of your account
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
