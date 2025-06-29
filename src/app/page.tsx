"use client";

import { useUser } from "@clerk/nextjs";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import CreatePost from "@/components/home/CreatePost";
import PostCard from "@/components/home/PostCard";
import TrendingTopics from "@/components/home/TrendingTopics";
import SuggestedUsers from "@/components/home/SuggestedUsers";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

// Mock data for posts
const mockPosts = [
  {
    id: "1",
    author: {
      name: "John Doe",
      username: "johndoe",
      avatar: "/api/placeholder/40/40"
    },
    content: "Just shipped a new feature using Next.js 15! The performance improvements are incredible. Server components are game-changing for React development. What's everyone's experience with the new version?",
    timestamp: "2h",
    likes: 42,
    comments: 8,
    shares: 3,
    tags: ["NextJS", "React", "WebDev"],
    isLiked: false,
    isBookmarked: false
  },
  {
    id: "2",
    author: {
      name: "Jane Smith",
      username: "janesmith",
      avatar: "/api/placeholder/40/40"
    },
    content: "Working on a new AI project that analyzes code patterns. The intersection of machine learning and software development is fascinating. Anyone else exploring AI-assisted development tools?",
    timestamp: "4h",
    likes: 67,
    comments: 15,
    shares: 7,
    tags: ["AI", "MachineLearning", "CodeAnalysis"],
    isLiked: true,
    isBookmarked: true
  },
  {
    id: "3",
    author: {
      name: "Mike Johnson",
      username: "mikej",
      avatar: "/api/placeholder/40/40"
    },
    content: "TypeScript 5.3 brings some amazing new features! The type inference improvements make the developer experience so much smoother. Time to update all my projects 🚀",
    timestamp: "6h",
    likes: 89,
    comments: 23,
    shares: 12,
    tags: ["TypeScript", "JavaScript", "DeveloperExperience"],
    isLiked: false,
    isBookmarked: false
  },
  {
    id: "4",
    author: {
      name: "Sarah Wilson",
      username: "sarahw",
      avatar: "/api/placeholder/40/40"
    },
    content: "Just finished reading about the latest trends in web accessibility. It's amazing how small changes can make such a big difference for users with disabilities. Every developer should prioritize a11y!",
    timestamp: "8h",
    likes: 156,
    comments: 34,
    shares: 28,
    tags: ["Accessibility", "WebDev", "UX"],
    isLiked: true,
    isBookmarked: false
  }
];

export default function Home() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Welcome to <span className="text-primary">TechTribe</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with tech enthusiasts, share knowledge, and stay updated with the latest in technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/sign-up">Join TechTribe</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">💬</span>
                  </div>
                  <h3 className="font-semibold mb-2">Connect</h3>
                  <p className="text-sm text-muted-foreground">
                    Join conversations with developers, designers, and tech enthusiasts worldwide.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2">Share</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your projects, insights, and discoveries with the community.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">📚</span>
                  </div>
                  <h3 className="font-semibold mb-2">Learn</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay updated with the latest trends, tools, and best practices in tech.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Feed */}
              <div className="lg:col-span-2 space-y-6">
                <Tabs defaultValue="for-you" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="for-you">For You</TabsTrigger>
                    <TabsTrigger value="following">Following</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="for-you" className="space-y-6 mt-6">
                    <CreatePost />
                    
                    <div className="space-y-4">
                      {mockPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="following" className="space-y-6 mt-6">
                    <CreatePost />
                    
                    <div className="space-y-4">
                      {mockPosts.slice(0, 2).map((post) => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Right Sidebar */}
              <div className="space-y-6">
                <TrendingTopics />
                <SuggestedUsers />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
