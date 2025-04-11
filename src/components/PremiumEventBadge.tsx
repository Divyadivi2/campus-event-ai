
import React from "react";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PremiumEventBadgeProps {
  className?: string;
}

const PremiumEventBadge = ({ className }: PremiumEventBadgeProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge 
            className={`bg-gradient-to-r from-amber-200 to-yellow-400 hover:from-amber-300 hover:to-yellow-500 text-amber-900 cursor-help ${className}`}
          >
            <Star className="h-3 w-3 mr-1" />
            Premium Event
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">This event is listed by a premium organization</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PremiumEventBadge;
