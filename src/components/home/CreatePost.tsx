"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Image, 
  Video, 
  Calendar, 
  MapPin, 
  Smile,
  Hash
} from "lucide-react";

export default function CreatePost() {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = () => {
    if (content.trim()) {
      // Handle post submission
      console.log("Posting:", content);
      setContent("");
      setIsExpanded(false);
    }
  };

  if (!user) return null;

  return (
    <Card className="border-border">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.imageUrl} alt={user.fullName || ""} />
            <AvatarFallback>{user.firstName?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            <Textarea
              placeholder="What's happening in tech?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              className="min-h-[60px] resize-none border-0 p-0 text-lg placeholder:text-muted-foreground focus-visible:ring-0"
            />
            
            {isExpanded && (
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    <Image className="h-4 w-4 mr-2" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    <Video className="h-4 w-4 mr-2" />
                    Video
                  </Button>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    <Hash className="h-4 w-4 mr-2" />
                    Tag
                  </Button>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    <Smile className="h-4 w-4 mr-2" />
                    Emoji
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm text-muted-foreground">
                      {280 - content.length} characters remaining
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setContent("");
                        setIsExpanded(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button 
                      size="sm"
                      onClick={handleSubmit}
                      disabled={!content.trim() || content.length > 280}
                    >
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

