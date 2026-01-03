import { useMemo, useState } from "react";
import type { Notification } from "../types/notification";
import { DEFAULT_NOTIFICATIONS } from "../constants/notifications";

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(
    DEFAULT_NOTIFICATIONS
  );

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return { notifications, unreadCount, markAllAsRead } as const;
}
