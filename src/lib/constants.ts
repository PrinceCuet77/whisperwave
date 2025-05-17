import {
  AtSign,
  CalendarHeart,
  Edit,
  FileQuestion,
  Link,
  ListRestart,
  Mail,
  MessageSquareHeart,
  MessageSquareQuote,
} from 'lucide-react';

export type SideBarItem = {
  id: number;
  name: string;
  icon: React.ElementType;
};

export const sideBarItems: SideBarItem[] = [
  {
    id: 1,
    name: 'Link',
    icon: Link,
  },
  {
    id: 1,
    name: 'Messages',
    icon: Mail,
  },
  {
    id: 1,
    name: 'User Messages',
    icon: AtSign,
  },
  {
    id: 1,
    name: 'Guest Messages',
    icon: FileQuestion,
  },
  {
    id: 2,
    name: 'Favorites',
    icon: MessageSquareHeart,
  },
  {
    id: 1,
    name: 'Replied',
    icon: MessageSquareQuote,
  },
  {
    id: 1,
    name: 'Not Replied',
    icon: ListRestart,
  },
  {
    id: 3,
    name: 'Change Password',
    icon: Edit,
  },
];
