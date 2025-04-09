
import { Event } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { formatDate } from "@/lib/formatters";

interface FeaturedEventProps {
  event: Event;
}

export default function FeaturedEvent({ event }: FeaturedEventProps) {
  const { title, description, date, time, location, tags, price, capacity, registered, organizer, image } = event;
  
  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-event-primary to-event-secondary opacity-90 z-0"></div>
      
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-event-primary to-event-secondary opacity-50"></div>
      )}
      
      <div className="relative z-10 p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <Badge className="bg-white text-event-primary mb-2">Featured Event</Badge>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            <p className="text-white/80">{organizer}</p>
          </div>
          
          <Button className="bg-white text-event-primary hover:bg-white/90 px-6">
            Register Now
          </Button>
        </div>
        
        <p className="max-w-2xl mb-4">{description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            <span>{registered}/{capacity} registered</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge key={tag} className="bg-white/20 hover:bg-white/30">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
