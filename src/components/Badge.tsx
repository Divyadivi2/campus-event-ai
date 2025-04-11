
import React from "react";
import { 
  Award, 
  Trophy, 
  Sparkles, 
  Scroll,
  BadgeCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge as UIBadge } from "@/components/ui/badge";

export type BadgeType = 
  | "participant" 
  | "winner" 
  | "mentor" 
  | "organizer" 
  | "speaker"
  | "certificate";

interface BadgeProps {
  type: BadgeType;
  eventName: string;
  date: string;
  className?: string;
}

const getBadgeDetails = (type: BadgeType) => {
  switch (type) {
    case "participant":
      return {
        icon: <BadgeCheck className="h-5 w-5 mr-1" />,
        label: "Participant",
        color: "bg-blue-100 text-blue-800 hover:bg-blue-200"
      };
    case "winner":
      return {
        icon: <Trophy className="h-5 w-5 mr-1" />,
        label: "Winner",
        color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      };
    case "mentor":
      return {
        icon: <Sparkles className="h-5 w-5 mr-1" />,
        label: "Mentor",
        color: "bg-purple-100 text-purple-800 hover:bg-purple-200"
      };
    case "organizer":
      return {
        icon: <Award className="h-5 w-5 mr-1" />,
        label: "Organizer",
        color: "bg-green-100 text-green-800 hover:bg-green-200"
      };
    case "speaker":
      return {
        icon: <Award className="h-5 w-5 mr-1" />,
        label: "Speaker",
        color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
      };
    case "certificate":
      return {
        icon: <Scroll className="h-5 w-5 mr-1" />,
        label: "Certificate",
        color: "bg-orange-100 text-orange-800 hover:bg-orange-200"
      };
    default:
      return {
        icon: <BadgeCheck className="h-5 w-5 mr-1" />,
        label: "Badge",
        color: "bg-gray-100 text-gray-800 hover:bg-gray-200"
      };
  }
};

export const Badge = ({ type, eventName, date, className }: BadgeProps) => {
  const { icon, label, color } = getBadgeDetails(type);
  
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-sm border bg-white">
      <div className="mb-2">
        {icon}
      </div>
      <UIBadge className={cn("mb-2", color)}>
        {label}
      </UIBadge>
      <h3 className="font-medium text-sm text-center">{eventName}</h3>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
};

export default Badge;
