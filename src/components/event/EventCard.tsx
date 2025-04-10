
import { Event } from "@/types";
import { formatDate, formatCurrency } from "@/lib/formatters";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link to={`/event/${event.id}`}>
      <div className="event-card rounded-lg shadow hover:shadow-md transition-all border bg-card text-card-foreground overflow-hidden h-full flex flex-col">
        {event.image ? (
          <div className="h-36 overflow-hidden bg-gray-100">
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="h-36 bg-gradient-to-r from-event-primary to-event-secondary opacity-80 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{event.title[0]}</span>
          </div>
        )}
        
        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-2">
            <Badge className="capitalize bg-event-primary">{event.category}</Badge>
          </div>
          
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{event.title}</h3>
          
          <div className="text-sm text-muted-foreground mb-2 line-clamp-2">{event.description}</div>
          
          <div className="mt-auto space-y-2 pt-2">
            <div className="flex items-center gap-2 text-sm">
              <CalendarDays className="h-4 w-4 text-event-accent" />
              <span>{formatDate(event.date)}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-event-accent" />
              <span className="truncate">{event.location}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-event-accent" />
              <span>{event.registered}/{event.capacity} registered</span>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-3 border-t bg-background/50 flex justify-between items-center">
          <div className="text-sm font-medium">
            {event.price === 0 ? "Free" : formatCurrency(event.price)}
          </div>
          <div className="text-xs text-muted-foreground">
            By {event.organizer}
          </div>
        </div>
      </div>
    </Link>
  );
}
