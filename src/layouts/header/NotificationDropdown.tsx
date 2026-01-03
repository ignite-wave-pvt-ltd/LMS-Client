import { Bell } from "lucide-react";
import { useNotifications } from "../../hooks/useNotifications";
import type { NotificationDropdownProps } from "../../types/ui";

export function NotificationDropdown({ onClose }: NotificationDropdownProps) {
  const { notifications, unreadCount, markAllAsRead } = useNotifications();

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose}></div>

      {/* Dropdown Menu */}
      <div className="absolute right-0 top-14 bg-white rounded-xl shadow-2xl border border-gray-200 w-96 z-50 overflow-hidden max-h-150 flex flex-col">
        {/* Header */}
        <div className="bg-linear-to-br from-indigo-600 to-purple-600 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
              <Bell className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm">Notifications</h3>
              <p className="text-xs text-indigo-100">
                {unreadCount} unread messages
              </p>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                !notification.read ? "bg-indigo-50/50" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 ${notification.color} rounded-lg flex items-center justify-center shrink-0`}
                >
                  <notification.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm text-gray-900 line-clamp-1">
                      {notification.title}
                    </h4>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-indigo-600 rounded-full shrink-0 mt-1.5"></span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-400">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-3">
          <button
            onClick={markAllAsRead}
            className="w-full py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            Mark all as read
          </button>
        </div>
      </div>
    </>
  );
}
