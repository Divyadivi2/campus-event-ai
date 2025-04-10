import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { mockUsers, mockEvents } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Upload, // Changed from FileUpload to Upload
  User, 
  Briefcase, 
  Sparkles, 
  GraduationCap 
} from "lucide-react";
import RecommendedEvents from "@/components/profile/RecommendedEvents";

export default function UserProfile() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState<string[]>(mockUsers[0].skills || []);
  const [newSkill, setNewSkill] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const user = mockUsers[0]; // Using the first mock user
  
  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };
  
  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };
  
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf" || 
          file.type === "application/msword" || 
          file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setResumeFile(file);
        toast({
          title: "Resume uploaded",
          description: "Click 'Extract Skills' to analyze your resume",
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive"
        });
      }
    }
  };
  
  const handleAnalyzeResume = () => {
    if (!resumeFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate resume analysis - in a real app, this would send the file to a backend service
    setTimeout(() => {
      const extractedSkills = ["JavaScript", "React", "Machine Learning", "Public Speaking", "Project Management"];
      
      // Add new skills that aren't already in the list
      const newSkills = extractedSkills.filter(skill => !skills.includes(skill));
      setSkills([...skills, ...newSkills]);
      
      toast({
        title: "Resume Analyzed",
        description: `Found ${newSkills.length} new skills from your resume`,
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar 
          isOpen={isOpen} 
          setSelectedCategory={null}
          selectedCategory={null}
        />
        
        <main className="flex-1 md:ml-64 lg:ml-72">
          <div className="container mx-auto p-4 md:p-6">
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <Card>
                    <CardHeader className="text-center">
                      <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="text-3xl">{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <CardTitle>{user.name}</CardTitle>
                      <CardDescription>{user.university || "University Not Set"}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{user.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Computer Science Student</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">4 Events Attended</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-full md:w-2/3">
                  <Tabs defaultValue="skills">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="skills">Skills & Interests</TabsTrigger>
                      <TabsTrigger value="resume">Resume Upload</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="skills" className="space-y-4 mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Your Skills</CardTitle>
                          <CardDescription>
                            Add or remove skills to get more relevant event recommendations
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                              <Badge key={skill} variant="outline" className="pl-2 pr-1 py-1 flex items-center gap-1">
                                {skill}
                                <button 
                                  onClick={() => handleRemoveSkill(skill)}
                                  className="ml-1 rounded-full hover:bg-muted w-5 h-5 inline-flex items-center justify-center"
                                >
                                  ×
                                </button>
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex gap-2">
                            <Input 
                              placeholder="Add a new skill" 
                              value={newSkill}
                              onChange={(e) => setNewSkill(e.target.value)}
                              onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                            />
                            <Button onClick={handleAddSkill}>Add</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="resume" className="space-y-4 mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Resume Upload</CardTitle>
                          <CardDescription>
                            Upload your resume to automatically extract your skills
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="border-2 border-dashed rounded-lg p-6 text-center">
                            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="mb-2 text-sm">Drag and drop your resume or click to browse</p>
                            <p className="text-xs text-muted-foreground mb-4">PDF or Word (docx, doc) files only</p>
                            
                            <div className="relative">
                              <Input
                                id="resume-upload"
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={handleResumeUpload}
                              />
                              <Button variant="outline" className="mx-auto">Browse Files</Button>
                            </div>
                          </div>
                          
                          {resumeFile && (
                            <div className="mt-4">
                              <div className="flex items-center justify-between p-2 border rounded">
                                <div className="flex items-center gap-2">
                                  <Upload className="h-4 w-4" />
                                  <span className="text-sm truncate max-w-[200px]">{resumeFile.name}</span>
                                </div>
                                <Button 
                                  onClick={handleAnalyzeResume} 
                                  size="sm" 
                                  disabled={isAnalyzing}
                                >
                                  {isAnalyzing ? "Analyzing..." : "Extract Skills"}
                                </Button>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
            
            <RecommendedEvents userSkills={skills} />
          </div>
        </main>
      </div>
    </div>
  );
}
