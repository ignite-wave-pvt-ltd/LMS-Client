export interface UserAccountMenuProps {
  userName: string;
  userEmail: string;
  onViewProfile: () => void;
  onNotifications: () => void;
  onLogout: () => void;
  onClose: () => void;
}

export interface NotificationDropdownProps {
  onClose: () => void;
}
