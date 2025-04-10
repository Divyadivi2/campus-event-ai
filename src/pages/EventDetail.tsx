
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { mockEvents } from "@/data/mockData";
import { Event } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowLeft, Bookmark, Share } from "lucide-react";
import { formatDate, formatCurrency } from "@/lib/formatters";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // In a real app, this would be an API call
    const foundEvent = mockEvents.find(e => e.id === id);
    
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setEvent(foundEvent || null);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);

  const handleRegister = () => {
    toast({
      title: "Success!",
      description: "You've registered for this event.",
      duration: 3000,
    });
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Removed from saved" : "Saved to your list",
      description: isSaved ? "Event removed from your saved events" : "Event added to your saved events",
      duration: 3000,
    });
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Event link copied to clipboard",
      duration: 3000,
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          <Sidebar isOpen={isOpen} setSelectedCategory={() => {}} selectedCategory={null} />
          <main className="flex-1 md:ml-64 lg:ml-72">
            <div className="container mx-auto p-4 md:p-6">
              <div className="animate-pulse space-y-4">
                <div className="h-8 w-2/3 bg-gray-200 rounded"></div>
                <div className="h-48 bg-gray-200 rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          <Sidebar isOpen={isOpen} setSelectedCategory={() => {}} selectedCategory={null} />
          <main className="flex-1 md:ml-64 lg:ml-72">
            <div className="container mx-auto p-4 md:p-6">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
                <p className="text-muted-foreground mb-6">
                  The event you're looking for doesn't exist or has been removed.
                </p>
                <Button asChild>
                  <Link to="/">Return to Events</Link>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar 
          isOpen={isOpen} 
          setSelectedCategory={() => {}} 
          selectedCategory={null} 
        />
        
        <main className="flex-1 md:ml-64 lg:ml-72">
          <div className="container mx-auto p-4 md:p-6">
            {/* Back button */}
            <div className="mb-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/" className="flex items-center gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Events</span>
                </Link>
              </Button>
            </div>
            
            {/* Event header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <h1 className="text-3xl font-bold">{event.title}</h1>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleSave}
                    className={isSaved ? "text-event-accent" : ""}
                  >
                    <Bookmark className={`h-4 w-4 ${isSaved ? "fill-event-accent" : ""}`} />
                    <span>{isSaved ? "Saved" : "Save"}</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className="capitalize bg-event-primary">{event.category}</Badge>
                {event.subCategory && (
                  <Badge variant="outline" className="capitalize">
                    {event.subCategory}
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground">
                Organized by {event.organizer}
              </p>
            </div>
            
            {/* Event image */}
            {event.image && (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-64 object-cover" 
                />
              </div>
            )}
            
            {/* Event details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2">
                <div className="p-6 bg-card rounded-lg shadow-sm border mb-6">
                  <h2 className="text-xl font-semibold mb-4">About This Event</h2>
                  <p className="whitespace-pre-line">{event.description}</p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="capitalize">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-card rounded-lg shadow-sm border">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-event-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-muted-foreground">{formatDate(event.date)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-event-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p className="text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-event-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-event-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Capacity</p>
                        <p className="text-muted-foreground">
                          {event.registered} / {event.capacity} registered
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium">Price</span>
                      <span className="text-xl font-bold">
                        {event.price === 0 ? "Free" : formatCurrency(event.price)}
                      </span>
                    </div>
                    
                    <Button 
                      className="w-full gradient-bg hover:opacity-90" 
                      onClick={handleRegister}
                      disabled={event.registered >= event.capacity}
                    >
                      {event.registered >= event.capacity ? "Sold Out" : "Register Now"}
                    </Button>
                  </div>
                </div>
                
                {event.organizerLogo && (
                  <div className="p-6 bg-card rounded-lg shadow-sm border">
                    <h3 className="text-lg font-medium mb-4">Organizer</h3>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img 
                          src={event.organizerLogo} 
                          alt={event.organizer} 
                          className="h-full w-full object-cover" 
                        />
                      </div>
                      <div>
                        <p className="font-medium">{event.organizer}</p>
                        <p className="text-sm text-muted-foreground">Event Organizer</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
