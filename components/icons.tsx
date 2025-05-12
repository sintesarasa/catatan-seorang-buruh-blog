import {
  ArrowRight,
  FileText,
  Mail,
  Search,
  Users,
  Calendar,
  BookOpen,
  MessageSquare,
  Tag,
  Menu,
  X,
  Moon,
  Sun,
  ChevronRight,
  type LucideProps,
} from "lucide-react";

export const Icons = {
  arrowRight: ArrowRight,
  fileText: FileText,
  mail: Mail,
  search: Search,
  users: Users,
  calendar: Calendar,
  bookOpen: BookOpen,
  messageSquare: MessageSquare,
  tag: Tag,
  menu: Menu,
  close: X,
  moon: Moon,
  sun: Sun,
  chevronRight: ChevronRight,
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
};