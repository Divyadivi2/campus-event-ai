
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PremiumBannerProps {
  className?: string;
  variant?: "full" | "compact";
}

const PremiumBanner = ({ className, variant = "full" }: PremiumBannerProps) => {
  const navigate = useNavigate();

  if (variant === "compact") {
    return (
      <div className={`bg-slate-50 border rounded-md p-4 flex justify-between items-center ${className}`}>
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-500 mr-2" />
          <p className="font-medium text-sm">Want more event registrations?</p>
        </div>
        <Button size="sm" onClick={() => navigate('/premium')}>
          Go Premium
        </Button>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-violet-50 to-indigo-50 border rounded-md p-6 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <h3 className="font-bold text-lg">Premium Event Listing</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            List your events prominently and attract more participants with premium features
          </p>
        </div>
        <Button className="shrink-0" onClick={() => navigate('/premium')}>
          <Star className="h-4 w-4 mr-2" /> Upgrade to Premium
        </Button>
      </div>
    </div>
  );
};

export default PremiumBanner;
