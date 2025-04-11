
import React, { useState } from "react";
import Badge, { BadgeType } from "@/components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Certificate } from "lucide-react";

interface UserBadgeItem {
  id: string;
  type: BadgeType;
  eventName: string;
  date: string;
}

// Mock data for demonstration purposes
const mockBadges: UserBadgeItem[] = [
  {
    id: "1",
    type: "participant",
    eventName: "Web Development Hackathon 2023",
    date: "June 15, 2023"
  },
  {
    id: "2",
    type: "winner",
    eventName: "AI Innovation Challenge",
    date: "August 20, 2023"
  },
  {
    id: "3",
    type: "mentor",
    eventName: "CodeFest 2023",
    date: "September 10, 2023"
  },
  {
    id: "4",
    type: "participant",
    eventName: "Mobile App Hackathon",
    date: "October 5, 2023"
  }
];

const mockCertificates: UserBadgeItem[] = [
  {
    id: "5",
    type: "certificate",
    eventName: "Web Development Hackathon 2023 - Completion",
    date: "June 17, 2023"
  },
  {
    id: "6",
    type: "certificate",
    eventName: "AI Innovation Challenge - 1st Place",
    date: "August 22, 2023"
  }
];

const UserBadges = () => {
  const [activeTab, setActiveTab] = useState("badges");

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Achievements</h1>
        
        <Tabs defaultValue="badges" className="w-full mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="badges" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Badges
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center gap-2">
              <Certificate className="h-4 w-4" />
              Certificates
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="badges">
            <Card>
              <CardHeader>
                <CardTitle>Your Badges</CardTitle>
                <CardDescription>
                  Badges you've earned by participating in hackathons and events
                </CardDescription>
              </CardHeader>
              <CardContent>
                {mockBadges.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {mockBadges.map((badge) => (
                      <Badge
                        key={badge.id}
                        type={badge.type}
                        eventName={badge.eventName}
                        date={badge.date}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      You haven't earned any badges yet. Join hackathons to earn your first badge!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle>Your Certificates</CardTitle>
                <CardDescription>
                  Certificates awarded for your achievements and participation
                </CardDescription>
              </CardHeader>
              <CardContent>
                {mockCertificates.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {mockCertificates.map((certificate) => (
                      <Badge
                        key={certificate.id}
                        type={certificate.type}
                        eventName={certificate.eventName}
                        date={certificate.date}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      You haven't received any certificates yet. Complete hackathons to earn certificates!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="bg-blue-50 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-2">How to earn more badges and certificates?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Participate in hackathons and coding events</li>
            <li>Win competitions and challenges</li>
            <li>Volunteer as a mentor for other participants</li>
            <li>Complete all hackathon requirements</li>
            <li>Submit your projects before deadlines</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserBadges;
