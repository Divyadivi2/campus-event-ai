
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Premium() {
  const [isMonthly, setIsMonthly] = useState(true);
  
  const features = [
    "List unlimited events",
    "Premium listing placement",
    "Event analytics dashboard",
    "Email marketing tools",
    "Custom branding",
    "Priority support"
  ];
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar toggleSidebar={() => {}} />
      
      <main className="flex-1">
        <div className="container mx-auto p-4 md:p-6 max-w-6xl">
          <div className="text-center mb-12 mt-8">
            <Badge className="bg-event-primary mb-3">For Organizers</Badge>
            <h1 className="text-3xl font-bold md:text-5xl mb-4">
              Get More Event Registrations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of colleges and club organizers who use CampusEvents
              to boost attendance and simplify event management.
            </p>
            
            <div className="mt-8 flex justify-center">
              <div className="bg-muted inline-flex items-center p-1 rounded-full">
                <Button 
                  variant={isMonthly ? "default" : "ghost"} 
                  className={`rounded-full ${isMonthly ? "gradient-bg" : ""}`}
                  onClick={() => setIsMonthly(true)}
                >
                  Monthly
                </Button>
                <Button 
                  variant={!isMonthly ? "default" : "ghost"} 
                  className={`rounded-full ${!isMonthly ? "gradient-bg" : ""}`}
                  onClick={() => setIsMonthly(false)}
                >
                  Yearly
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Free Plan */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>For students and attendees</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Discover and join events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Create student profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Register for events</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Standard Plan */}
            <Card className="border-primary">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Standard</CardTitle>
                  <Badge className="bg-event-accent">Popular</Badge>
                </div>
                <CardDescription>For clubs and organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">${isMonthly ? "39" : "29"}</span>
                  <span className="text-muted-foreground">/month</span>
                  {!isMonthly && <span className="ml-2 text-sm text-green-500">Save 25%</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Create and list up to 10 events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Email notifications</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gradient-bg hover:opacity-90">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
            
            {/* Premium Plan */}
            <Card className="bg-muted/40 border-muted-foreground">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    Premium <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </CardTitle>
                </div>
                <CardDescription>For colleges and institutions</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">${isMonthly ? "99" : "79"}</span>
                  <span className="text-muted-foreground">/month</span>
                  {!isMonthly && <span className="ml-2 text-sm text-green-500">Save 20%</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Everything in Standard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Unlimited event listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Featured placement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">All Premium Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-muted/30">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-event-primary/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-event-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-8 text-center mb-16">
            <h2 className="text-2xl font-bold mb-3">Ready to boost event engagement?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6">
              Join thousands of event organizers who use CampusEvents to create, promote, and manage amazing events.
            </p>
            <Button size="lg" className="gradient-bg hover:opacity-90">
              Sign Up as Organizer
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
