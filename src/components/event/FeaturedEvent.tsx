
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Event } from "@/types";
import { formatDate, formatCurrency } from "@/lib/formatters";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedEventProps {
  event: Event;
}

export default function FeaturedEvent({ event }: FeaturedEventProps) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden border bg-card">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-48 md:h-full relative overflow-hidden bg-gray-100">
          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-event-primary to-event-secondary opacity-80 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">{event.title[0]}</span>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <Badge className="capitalize px-3 py-1 text-sm bg-event-accent">Featured</Badge>
          </div>
        </div>
        
        <div className="p-6 flex flex-col">
          <div className="mb-2">
            <Badge className="capitalize">{event.category}</Badge>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-event-accent" />
              <span className="text-sm">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-event-accent" />
              <span className="text-sm truncate">{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-event-accent" />
              <span className="text-sm">{event.registered}/{event.capacity}</span>
            </div>
            <div className="text-sm font-semibold">
              {event.price === 0 ? "Free" : formatCurrency(event.price)}
            </div>
          </div>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-muted-foreground">By {event.organizer}</div>
            </div>
            
            <Button asChild className="w-full gradient-bg hover:opacity-90">
              <Link to={`/event/${event.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
