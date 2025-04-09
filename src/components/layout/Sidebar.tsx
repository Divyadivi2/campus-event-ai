
import { Button } from "@/components/ui/button";
import { Laptop, Briefcase, Palette, Trophy, GraduationCap, Users, Star, Calendar, Clock, Bookmark, Settings, Search } from "lucide-react";
import { mockCategories } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  isOpen: boolean;
  setSelectedCategory: (category: string | null) => void;
  selectedCategory: string | null;
}

export default function Sidebar({ isOpen, setSelectedCategory, selectedCategory }: SidebarProps) {
  const isMobile = useIsMobile();
  
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Laptop: <Laptop className="h-5 w-5" />,
      Briefcase: <Briefcase className="h-5 w-5" />,
      Palette: <Palette className="h-5 w-5" />,
      Trophy: <Trophy className="h-5 w-5" />,
      GraduationCap: <GraduationCap className="h-5 w-5" />,
      Users: <Users className="h-5 w-5" />,
      Star: <Star className="h-5 w-5" />
    };
    
    return icons[iconName] || <Star className="h-5 w-5" />;
  };
  
  if (isMobile && !isOpen) {
    return null;
  }
  
  return (
    <aside 
      className={cn(
        "fixed left-0 top-16 z-30 flex h-[calc(100vh-4rem)] w-full flex-col border-r bg-background md:w-64 lg:w-72",
        isMobile && isOpen ? "block" : "",
        isMobile && !isOpen ? "hidden" : "",
        !isMobile ? "block" : ""
      )}
    >
      <div className="flex flex-col gap-2 p-4 md:gap-1">
        <div className="md:hidden relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search events..."
            className="w-full pl-8 pr-4 py-2 rounded-full border border-input"
          />
        </div>
        
        <div className="mb-4">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Discover</h2>
          <div className="space-y-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start"
              onClick={() => setSelectedCategory(null)}
            >
              <Calendar className="mr-2 h-4 w-4" />
              All Events
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              Upcoming
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Bookmark className="mr-2 h-4 w-4" />
              Saved
            </Button>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Categories</h2>
          <div className="space-y-1">
            {mockCategories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setSelectedCategory(category.id)}
              >
                {getIcon(category.icon)}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-auto p-4">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </aside>
  );
}
