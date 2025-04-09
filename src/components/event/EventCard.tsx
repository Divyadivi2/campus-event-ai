
import { Event } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Bookmark, Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/formatters";

interface EventCardProps {
  event: Event;
  isFeatured?: boolean;
}

export default function EventCard({ event, isFeatured }: EventCardProps) {
  const { title, description, date, time, location, tags, price, capacity, registered, organizer, image } = event;
  
  return (
    <Card className={`event-card overflow-hidden ${isFeatured ? 'border-event-primary' : ''}`}>
      <div className="relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-r from-event-primary to-event-secondary flex items-center justify-center">
            <span className="text-white text-xl font-bold">{title.substring(0, 1)}</span>
          </div>
        )}
        
        {price === 0 ? (
          <Badge className="absolute top-2 right-2 bg-event-success">Free</Badge>
        ) : (
          <Badge className="absolute top-2 right-2">${price}</Badge>
        )}
        
        {isFeatured && (
          <Badge className="absolute top-2 left-2 bg-event-accent">Featured</Badge>
        )}
      </div>
      
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{organizer}</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Save event</span>
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <p className="text-sm line-clamp-2 mb-3">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{registered}/{capacity} registered</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gradient-bg hover:opacity-90">Register Now</Button>
      </CardFooter>
    </Card>
  );
}
