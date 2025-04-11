
import React from "react";
import { Link } from "react-router-dom";
import { Award, Trophy, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Badge from "@/components/Badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-violet-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Discover Hackathons & Earn Badges</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join exciting hackathons, showcase your skills, and collect badges and certificates to build your portfolio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/hackathons" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Hackathons
            </Link>
            <Link 
              to="/user-badges" 
              className="bg-purple-800 hover:bg-purple-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              View Your Badges
            </Link>
          </div>
        </div>
      </div>

      {/* Badge Showcase Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Collect Badges & Certificates</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase your achievements and build your tech portfolio with our badge and certification system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="border-t-4 border-t-blue-500">
            <CardHeader className="flex flex-row items-center gap-2">
              <Shield className="h-6 w-6 text-blue-500" />
              <CardTitle>Participation Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm mb-4">
                Earn badges every time you participate in a hackathon. Build your collection!
              </CardDescription>
              <div className="mt-4">
                <Badge
                  type="participant"
                  eventName="Sample Hackathon"
                  date="2023"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-yellow-500">
            <CardHeader className="flex flex-row items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <CardTitle>Winner Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm mb-4">
                Special badges awarded to hackathon winners in various categories.
              </CardDescription>
              <div className="mt-4">
                <Badge
                  type="winner"
                  eventName="Sample Hackathon"
                  date="2023"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-orange-500">
            <CardHeader className="flex flex-row items-center gap-2">
              <Award className="h-6 w-6 text-orange-500" />
              <CardTitle>Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm mb-4">
                Downloadable certificates to verify your participation and achievements.
              </CardDescription>
              <div className="mt-4">
                <Badge
                  type="certificate"
                  eventName="Sample Certificate"
                  date="2023"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link 
            to="/hackathons" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Join a Hackathon
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
