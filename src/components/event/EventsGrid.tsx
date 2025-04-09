
import { Event } from "@/types";
import EventCard from "./EventCard";

interface EventsGridProps {
  events: Event[];
  title: string;
}

export default function EventsGrid({ events, title }: EventsGridProps) {
  if (!events.length) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground">No events found.</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
