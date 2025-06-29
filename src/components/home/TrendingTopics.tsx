"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Hash } from "lucide-react";

const trendingTopics = [
  {
    tag: "NextJS15",
    posts: "2.1k",
    trend: "+15%",
    description: "Latest features and improvements"
  },
  {
    tag: "ReactServer",
    posts: "1.8k",
    trend: "+8%",
    description: "Server components discussion"
  },
  {
    tag: "TypeScript",
    posts: "3.2k",
    trend: "+22%",
    description: "Type safety best practices"
  },
  {
    tag: "WebDev",
    posts: "4.5k",
    trend: "+12%",
    description: "General web development"
  },
  {
    tag: "AI",
    posts: "6.1k",
    trend: "+35%",
    description: "Artificial Intelligence trends"
  }
];

export default function TrendingTopics() {
  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span>Trending Topics</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {trendingTopics.map((topic, index) => (
          <div
            key={topic.tag}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <Hash className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm">{topic.tag}</span>
                <Badge variant="secondary" className="text-xs">
                  {topic.trend}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-1">
                {topic.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {topic.posts} posts
              </p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">
                #{index + 1}
              </div>
            </div>
          </div>
        ))}
        
        <Button variant="ghost" className="w-full mt-4 text-primary hover:bg-primary/10">
          Show more trends
        </Button>
      </CardContent>
    </Card>
  );
}

