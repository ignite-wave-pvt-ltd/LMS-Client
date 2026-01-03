import { Icon } from "lucide-react";

export type NotificationType =
  | "class"
  | "assignment"
  | "achievement"
  | "quiz"
  | "announcement";

export interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: typeof Icon | any;
  color: string;
}
