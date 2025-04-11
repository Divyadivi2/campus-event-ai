
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check, TrendingUp, Users, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const PremiumSubscription = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubscribe = () => {
    toast({
      title: "Coming Soon",
      description: "Payment integration will be available soon. For now, you've been upgraded to premium!",
      duration: 5000,
    });
    
    // In a real implementation, this would redirect to a payment gateway
    // For demo purposes, we just redirect to the index
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Premium Event Listing</h1>
          <p className="text-muted-foreground mt-2">
            Boost your events' visibility and attract more participants
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Free Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
              <CardDescription>For colleges just getting started</CardDescription>
              <div className="mt-4 text-3xl font-bold">$0 <span className="text-base font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  <span>List up to 2 events</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  <span>Basic event details</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  <span>Standard listing position</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Current Plan</Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="border-2 border-primary relative">
            <Badge className="absolute -top-2 right-4 bg-primary">
              <Star className="h-3 w-3 mr-1" /> Recommended
            </Badge>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
              <CardDescription>Enhanced visibility for your events</CardDescription>
              <div className="mt-4 text-3xl font-bold">$49 <span className="text-base font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  <span>Unlimited event listings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  <span>Featured at the top of search results</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                  <span>Promotional badge on all events</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-green-500" />
                  <span>Advanced attendee analytics</span>
                </li>
                <li className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-green-500" />
                  <span>Email marketing to potential attendees</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleSubscribe}>
                Upgrade to Premium
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 bg-slate-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Premium Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Increased Visibility</h3>
              <p className="text-sm text-muted-foreground">Your events appear at the top of search results and event listings</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">More Registrations</h3>
              <p className="text-sm text-muted-foreground">Premium events attract up to 3x more participants on average</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Premium Branding</h3>
              <p className="text-sm text-muted-foreground">Stand out with premium badges on all your event listings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumSubscription;
