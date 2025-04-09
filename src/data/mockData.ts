
import { Event, User } from "@/types";

export const mockUsers: User[] = [
  {
    id: "u1",
    name: "Alex Johnson",
    email: "alex@university.edu",
    avatar: "/placeholder.svg",
    university: "State University",
    interests: ["tech", "startups", "design"],
    skills: ["JavaScript", "React", "UI/UX"]
  },
  {
    id: "u2",
    name: "Jamie Smith",
    email: "jamie@college.edu",
    avatar: "/placeholder.svg",
    university: "Tech Institute",
    interests: ["data science", "AI", "research"],
    skills: ["Python", "Machine Learning", "Data Analysis"]
  }
];

export const mockEvents: Event[] = [
  {
    id: "e1",
    title: "Annual Hackathon 2025",
    description: "Join the biggest hackathon on campus! 48 hours of coding, workshops, and networking with tech companies. Great prizes for winners!",
    category: "tech",
    subCategory: "hackathon",
    date: "2025-05-15",
    time: "10:00 AM",
    location: "Main Campus, Building A",
    organizerId: "o1",
    organizer: "Computer Science Club",
    organizerLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    tags: ["coding", "hackathon", "tech", "prizes"],
    price: 0,
    capacity: 200,
    registered: 145,
    isFeatured: true
  },
  {
    id: "e2",
    title: "AI and Machine Learning Workshop",
    description: "Learn the fundamentals of AI and Machine Learning in this hands-on workshop with industry experts. Perfect for beginners!",
    category: "tech",
    subCategory: "workshop",
    date: "2025-04-22",
    time: "2:00 PM",
    location: "Engineering Building, Room 203",
    organizerId: "o2",
    organizer: "AI Research Lab",
    organizerLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    tags: ["AI", "machine learning", "workshop", "beginners"],
    price: 10,
    capacity: 50,
    registered: 32
  },
  {
    id: "e3",
    title: "Career Fair Spring 2025",
    description: "Meet recruiters from over 50 companies across tech, finance, healthcare, and more. Bring your resume and dress professionally!",
    category: "career",
    date: "2025-04-30",
    time: "11:00 AM",
    location: "University Center",
    organizerId: "o3",
    organizer: "Career Services",
    organizerLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    tags: ["career", "networking", "recruitment", "jobs"],
    price: 0,
    capacity: 500,
    registered: 320
  },
  {
    id: "e4",
    title: "Design Thinking Workshop",
    description: "A hands-on workshop on applying design thinking to solve real-world problems. Great for all disciplines!",
    category: "academic",
    subCategory: "workshop",
    date: "2025-05-05",
    time: "3:00 PM",
    location: "Design Studio, Arts Building",
    organizerId: "o4",
    organizer: "Design Department",
    organizerLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    tags: ["design", "innovation", "workshop", "creative"],
    price: 5,
    capacity: 40,
    registered: 25
  },
  {
    id: "e5",
    title: "Campus Music Festival",
    description: "Three days of live music featuring student bands and professional artists. Food, drinks, and great vibes!",
    category: "arts",
    subCategory: "festival",
    date: "2025-06-10",
    time: "5:00 PM",
    location: "University Amphitheater",
    organizerId: "o5",
    organizer: "Student Activities",
    organizerLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    tags: ["music", "festival", "arts", "entertainment"],
    price: 15,
    capacity: 1000,
    registered: 750,
    isFeatured: true
  },
  {
    id: "e6",
    title: "Entrepreneurship Panel",
    description: "Hear from successful alumni entrepreneurs about their journey from campus to startup success.",
    category: "career",
    subCategory: "panel",
    date: "2025-05-20",
    time: "4:00 PM",
    location: "Business School Auditorium",
    organizerId: "o6",
    organizer: "Entrepreneurship Center",
    organizerLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    tags: ["entrepreneurship", "startups", "business", "networking"],
    price: 0,
    capacity: 150,
    registered: 110
  },
  {
    id: "e7",
    title: "Intramural Sports Tournament",
    description: "Join the largest intramural sports event of the year! Basketball, soccer, volleyball, and more.",
    category: "sports",
    subCategory: "tournament",
    date: "2025-05-25",
    time: "9:00 AM",
    location: "University Athletic Complex",
    organizerId: "o7",
    organizer: "Campus Recreation",
    organizerLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    tags: ["sports", "tournament", "recreation", "competition"],
    price: 5,
    capacity: 300,
    registered: 215
  },
  {
    id: "e8",
    title: "Research Symposium",
    description: "Undergraduate and graduate students showcase their research projects with poster presentations and talks.",
    category: "academic",
    subCategory: "symposium",
    date: "2025-05-12",
    time: "10:00 AM",
    location: "Science Center",
    organizerId: "o8",
    organizer: "Office of Research",
    organizerLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    tags: ["research", "academic", "science", "presentation"],
    price: 0,
    capacity: 200,
    registered: 130
  }
];

export const mockCategories = [
  { id: "tech", name: "Technology", icon: "Laptop" },
  { id: "career", name: "Career", icon: "Briefcase" },
  { id: "arts", name: "Arts & Culture", icon: "Palette" },
  { id: "sports", name: "Sports", icon: "Trophy" },
  { id: "academic", name: "Academic", icon: "GraduationCap" },
  { id: "social", name: "Social", icon: "Users" },
  { id: "other", name: "Other", icon: "Star" }
];

export const mockRecommendations = [
  {
    id: "r1",
    eventId: "e1",
    reason: "Based on your interest in tech and coding skills"
  },
  {
    id: "r2",
    eventId: "e6",
    reason: "Matches your interest in startups"
  },
  {
    id: "r3",
    eventId: "e2",
    reason: "Recommended for your skill development in tech"
  }
];
