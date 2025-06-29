import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Heart, Repeat, Send } from "lucide-react";

// Mock data for posts - replace with actual data fetching later
const posts = [
  {
    id: 1,
    user: {
      name: "Alice Wonderland",
      username: "alicew",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    content: "Just discovered this amazing new tech community! Excited to connect with everyone. What are your favorite Next.js features? #NextJS #WebDev",
    timestamp: "2h ago",
    likes: 152,
    comments: 18,
    reposts: 3,
  },
  {
    id: 2,
    user: {
      name: "Bob The Builder",
      username: "bobuilds",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    content: "Working on a new project using Tailwind CSS and Shadcn UI. The developer experience is fantastic! What are your go-to UI libraries? Let's discuss! #TailwindCSS #ShadcnUI",
    timestamp: "5h ago",
    likes: 289,
    comments: 45,
    reposts: 12,
  },
  {
    id: 3,
    user: {
      name: "Charlie Brown",
      username: "goodgrief",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    content: "Just deployed my first app with Vercel and NeonDB. Smooth sailing so far! Any tips for optimizing serverless functions? #Vercel #Serverless #NeonDB",
    timestamp: "1d ago",
    likes: 98,
    comments: 22,
    reposts: 5,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Potentially a "Create Post" component here */}
      <Card>
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Basic text area for now, can be expanded */}
          <textarea
            placeholder="What's on your mind?"
            className="w-full p-2 border border-border rounded-md bg-muted text-foreground focus:ring-2 focus:ring-primary"
            rows={3}
          ></textarea>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Post</Button>
        </CardFooter>
      </Card>

      {/* Feed of posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-start space-x-4 p-4">
              <Avatar>
                <AvatarImage src={post.user.avatar} alt={post.user.name} />
                <AvatarFallback>{post.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-foreground">{post.user.name}</span>
                  <span className="text-xs text-muted-foreground">@{post.user.username}</span>
                  <span className="text-xs text-muted-foreground">&middot;</span>
                  <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                </div>
                <p className="text-sm text-foreground mt-1 whitespace-pre-wrap">{post.content}</p>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-around p-2 border-t border-border">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <MessageCircle className="h-4 w-4 mr-1" /> {post.comments}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                <Repeat className="h-4 w-4 mr-1" /> {post.reposts}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                <Heart className="h-4 w-4 mr-1" /> {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Send className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
