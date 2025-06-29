"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  TrendingUp, 
  MessageCircle, 
  Bookmark, 
  User, 
  Settings, 
  Hash,
  Users,
  Calendar,
  MoreHorizontal
} from "lucide-react";

const navigationItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: TrendingUp, label: "Trending", href: "/trending" },
  { icon: MessageCircle, label: "Messages", href: "/messages" },
  { icon: Bookmark, label: "Bookmarks", href: "/bookmarks" },
  { icon: User, label: "Profile", href: "/profile" },
];

const discoverItems = [
  { icon: Hash, label: "Technology", href: "/topics/technology" },
  { icon: Hash, label: "Programming", href: "/topics/programming" },
  { icon: Hash, label: "AI & ML", href: "/topics/ai-ml" },
  { icon: Hash, label: "Web Dev", href: "/topics/web-dev" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) return null;

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16">
      <div className="flex flex-col flex-1 min-h-0 bg-background border-r border-border">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-6">
            {/* Main Navigation */}
            <nav className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={`w-full justify-start space-x-3 h-12 ${
                        isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>

            <Separator />

            {/* Discover Section */}
            <div>
              <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Discover
              </h3>
              <nav className="space-y-1">
                {discoverItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start space-x-3 h-10 text-muted-foreground hover:text-foreground"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>

            <Separator />

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-sm mb-3">Your Activity</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Followers</span>
                    <span className="font-medium">248</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Following</span>
                    <span className="font-medium">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-sm mb-3">Trending Now</h4>
                <div className="space-y-3">
                  <div className="cursor-pointer hover:bg-accent/50 p-2 rounded-md -m-2">
                    <p className="text-sm font-medium">#NextJS15</p>
                    <p className="text-xs text-muted-foreground">2.1k posts</p>
                  </div>
                  <div className="cursor-pointer hover:bg-accent/50 p-2 rounded-md -m-2">
                    <p className="text-sm font-medium">#ReactServer</p>
                    <p className="text-xs text-muted-foreground">1.8k posts</p>
                  </div>
                  <div className="cursor-pointer hover:bg-accent/50 p-2 rounded-md -m-2">
                    <p className="text-sm font-medium">#TypeScript</p>
                    <p className="text-xs text-muted-foreground">3.2k posts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex-shrink-0 p-3 border-t border-border">
          <Button variant="ghost" className="w-full justify-start space-x-3 h-10">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start space-x-3 h-10 mt-1">
            <MoreHorizontal className="h-4 w-4" />
            <span>More</span>
          </Button>
        </div>
      </div>
    </aside>
  );
}

