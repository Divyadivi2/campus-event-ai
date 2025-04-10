
import { useState, useEffect } from "react";
import { Event } from "@/types";
import { mockEvents } from "@/data/mockData";
import EventCard from "@/components/event/EventCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, LightbulbIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecommendedEventsProps {
  userSkills: string[];
}

export default function RecommendedEvents({ userSkills }: RecommendedEventsProps) {
  const [recommendedEvents, setRecommendedEvents] = useState<Event[]>([]);
  const [matchReasons, setMatchReasons] = useState<Record<string, string[]>>({});
  
  useEffect(() => {
    if (userSkills.length === 0) {
      setRecommendedEvents([]);
      setMatchReasons({});
      return;
    }
    
    // Convert skills to lowercase for case-insensitive matching
    const lowerCaseSkills = userSkills.map(skill => skill.toLowerCase());
    
    // Simple recommendation algorithm - find events with matching tags or categories
    const matchedEvents = mockEvents.filter(event => {
      // Check if any event tag matches user skills
      const tagMatches = event.tags.some(tag => 
        lowerCaseSkills.some(skill => tag.toLowerCase().includes(skill.toLowerCase()) || 
                                     skill.toLowerCase().includes(tag.toLowerCase()))
      );
      
      // Check if event category or subcategory matches user skills
      const categoryMatches = lowerCaseSkills.some(skill => 
        event.category.toLowerCase().includes(skill.toLowerCase()) || 
        (event.subCategory && event.subCategory.toLowerCase().includes(skill.toLowerCase()))
      );
      
      // Check if event title contains any skill keywords
      const titleMatches = lowerCaseSkills.some(skill => 
        event.title.toLowerCase().includes(skill.toLowerCase())
      );
      
      return tagMatches || categoryMatches || titleMatches;
    });
    
    // Build match reasons for each event
    const reasons: Record<string, string[]> = {};
    matchedEvents.forEach(event => {
      const eventReasons: string[] = [];
      
      // Check for tag matches
      event.tags.forEach(tag => {
        const matchingSkills = userSkills.filter(skill => 
          tag.toLowerCase().includes(skill.toLowerCase()) || 
          skill.toLowerCase().includes(tag.toLowerCase())
        );
        
        if (matchingSkills.length > 0) {
          eventReasons.push(`Matches your ${matchingSkills.join(', ')} skill(s)`);
        }
      });
      
      // Check for category matches
      const categoryMatchingSkills = userSkills.filter(skill => 
        event.category.toLowerCase().includes(skill.toLowerCase())
      );
      
      if (categoryMatchingSkills.length > 0) {
        eventReasons.push(`Related to ${event.category} category`);
      }
      
      // Check for title matches
      const titleMatchingSkills = userSkills.filter(skill => 
        event.title.toLowerCase().includes(skill.toLowerCase())
      );
      
      if (titleMatchingSkills.length > 0) {
        eventReasons.push(`Event title matches your interests`);
      }
      
      reasons[event.id] = eventReasons;
    });
    
    // Sort the matched events by number of matching skills (descending)
    const sortedEvents = matchedEvents.sort((a, b) => {
      const aMatches = countMatches(a, lowerCaseSkills);
      const bMatches = countMatches(b, lowerCaseSkills);
      return bMatches - aMatches;
    });
    
    setRecommendedEvents(sortedEvents.slice(0, 4)); // Limit to top 4 matches
    setMatchReasons(reasons);
  }, [userSkills]);
  
  // Helper function to count how many skills match an event
  const countMatches = (event: Event, skills: string[]): number => {
    let count = 0;
    
    // Count tag matches
    event.tags.forEach(tag => {
      if (skills.some(skill => tag.toLowerCase().includes(skill.toLowerCase()) || 
                              skill.toLowerCase().includes(tag.toLowerCase()))) {
        count++;
      }
    });
    
    // Count category matches
    if (skills.some(skill => event.category.toLowerCase().includes(skill.toLowerCase()))) {
      count++;
    }
    
    // Count subcategory matches
    if (event.subCategory && 
        skills.some(skill => event.subCategory!.toLowerCase().includes(skill.toLowerCase()))) {
      count++;
    }
    
    // Count title matches
    if (skills.some(skill => event.title.toLowerCase().includes(skill.toLowerCase()))) {
      count++;
    }
    
    return count;
  };
  
  if (userSkills.length === 0) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-event-accent" />
            <CardTitle>AI Recommendations</CardTitle>
          </div>
          <CardDescription>
            Add skills to your profile or upload your resume to get personalized event recommendations
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  if (recommendedEvents.length === 0) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-event-accent" />
            <CardTitle>AI Recommendations</CardTitle>
          </div>
          <CardDescription>
            No matching events found for your skills. Try adding more skills or different interests.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  return (
    <div className="mb-8">
      <Card className="mb-4">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-event-accent" />
            <CardTitle>AI Recommended Events</CardTitle>
          </div>
          <CardDescription className="flex flex-wrap gap-2 mt-2">
            <span>Based on your skills:</span>
            {userSkills.map(skill => (
              <Badge key={skill} variant="secondary" className="bg-event-accent/10">
                {skill}
              </Badge>
            ))}
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {recommendedEvents.map(event => (
          <div key={event.id} className="flex flex-col">
            <EventCard event={event} />
            {matchReasons[event.id] && matchReasons[event.id].length > 0 && (
              <div className="mt-2 p-2 bg-muted rounded-md text-xs text-muted-foreground">
                <div className="flex items-center gap-1 mb-1">
                  <LightbulbIcon className="h-3 w-3 text-event-accent" />
                  <span className="font-medium">Why we recommended this:</span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5">
                  {matchReasons[event.id].slice(0, 2).map((reason, idx) => (
                    <li key={idx}>{reason}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
