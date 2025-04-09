
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import FeaturedEvent from "@/components/event/FeaturedEvent";
import EventsGrid from "@/components/event/EventsGrid";
import { mockEvents } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  // Filter events based on selected category
  const filteredEvents = selectedCategory
    ? mockEvents.filter(event => event.category === selectedCategory)
    : mockEvents;
  
  // Get featured events
  const featuredEvents = mockEvents.filter(event => event.isFeatured);
  
  // Get upcoming events (non-featured)
  const upcomingEvents = filteredEvents.filter(event => !event.isFeatured);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar 
          isOpen={isOpen} 
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        
        <main className="flex-1 md:ml-64 lg:ml-72">
          <div className="container mx-auto p-4 md:p-6">
            {!selectedCategory && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Featured Events</h2>
                  <Button variant="outline" className="gap-2">
                    <Sparkles className="h-4 w-4 text-event-accent" />
                    <span>AI Recommendations</span>
                  </Button>
                </div>
                
                {featuredEvents.length > 0 ? (
                  <FeaturedEvent event={featuredEvents[0]} />
                ) : (
                  <p className="text-muted-foreground">No featured events.</p>
                )}
              </div>
            )}
            
            <EventsGrid 
              events={upcomingEvents} 
              title={selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Events` : "Upcoming Events"} 
            />
          </div>
        </main>
      </div>
    </div>
  );
}
