"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus } from "lucide-react";

const suggestedUsers = [
  {
    id: "1",
    name: "Sarah Chen",
    username: "sarahdev",
    avatar: "/api/placeholder/40/40",
    bio: "Full-stack developer passionate about React and Node.js",
    followers: "1.2k",
    isVerified: true,
    tags: ["React", "Node.js"]
  },
  {
    id: "2",
    name: "Alex Rodriguez",
    username: "alexcode",
    avatar: "/api/placeholder/40/40",
    bio: "AI/ML engineer building the future",
    followers: "856",
    isVerified: false,
    tags: ["AI", "Python"]
  },
  {
    id: "3",
    name: "Maya Patel",
    username: "mayaui",
    avatar: "/api/placeholder/40/40",
    bio: "UI/UX designer with a love for clean interfaces",
    followers: "2.1k",
    isVerified: true,
    tags: ["Design", "UI/UX"]
  },
  {
    id: "4",
    name: "David Kim",
    username: "davidtech",
    avatar: "/api/placeholder/40/40",
    bio: "DevOps engineer and cloud architecture enthusiast",
    followers: "743",
    isVerified: false,
    tags: ["DevOps", "AWS"]
  }
];

export default function SuggestedUsers() {
  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center space-x-2">
          <Users className="h-5 w-5 text-primary" />
          <span>Who to Follow</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-sm truncate">{user.name}</h4>
                {user.isVerified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-2">@{user.username}</p>
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{user.bio}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {user.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-1 py-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{user.followers} followers</span>
              </div>
            </div>
            
            <Button size="sm" variant="outline" className="shrink-0">
              <UserPlus className="h-3 w-3 mr-1" />
              Follow
            </Button>
          </div>
        ))}
        
        <Button variant="ghost" className="w-full mt-4 text-primary hover:bg-primary/10">
          Show more suggestions
        </Button>
      </CardContent>
    </Card>
  );
}

