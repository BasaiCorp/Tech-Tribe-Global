"use client";

import { useState } from "react";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Bell, 
  MessageCircle, 
  Home, 
  TrendingUp, 
  Menu,
  X
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { isSignedIn, user } = useUser();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent">
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                  <Link href="/trending" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent">
                    <TrendingUp className="h-5 w-5" />
                    <span>Trending</span>
                  </Link>
                  <Link href="/messages" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent">
                    <MessageCircle className="h-5 w-5" />
                    <span>Messages</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl hidden sm:block">TechTribe</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className={`relative transition-all duration-200 ${isSearchFocused ? 'scale-105' : ''}`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search TechTribe..."
                className="pl-10 pr-4 bg-muted/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Navigation and User Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            {isSignedIn ? (
              <>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </nav>
                
                {/* User Button */}
                <div className="ml-2">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                        userButtonPopoverCard: "bg-card border border-border",
                        userButtonPopoverActionButton: "text-foreground hover:bg-accent",
                      }
                    }}
                  />
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

