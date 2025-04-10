
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, Menu } from "lucide-react";
import { useState } from "react";
import { mockUsers } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const user = mockUsers[0]; // Using the first mock user
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-event-primary to-event-secondary flex items-center justify-center">
              <span className="text-white font-bold">CE</span>
            </div>
            <span className="hidden font-bold text-xl md:inline-block">CampusEvents</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center relative max-w-sm w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search events, clubs, workshops..."
            className="w-full pl-8 rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex" asChild>
            <Link to="/premium">For Organizers</Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-event-error" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <Link to="/profile">
            <Avatar className="h-9 w-9 cursor-pointer">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}
