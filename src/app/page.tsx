"use client";
import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Repeat2, 
  Share, 
  Bookmark, 
  MoreHorizontal, 
  Search, 
  Bell, 
  Mail, 
  Home, 
  User, 
  Settings,
  TrendingUp,
  Hash,
  Users,
  Calendar,
  MapPin,
  Link as LinkIcon,
  ImageIcon,
  Smile,
  BarChart3,
  Globe,
  Lock,
  Plus,
  Filter,
  ArrowUp,
  MessageSquare,
  Eye,
  Code,
  Zap,
  Star,
  GitBranch,
  Trophy,
  Target
} from 'lucide-react';

export default function TechTribeHomePage() {
  const [activeTab, setActiveTab] = useState('for-you');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());

  const toggleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  const toggleBookmark = (postId) => {
    const newBookmarked = new Set(bookmarkedPosts);
    if (newBookmarked.has(postId)) {
      newBookmarked.delete(postId);
    } else {
      newBookmarked.add(postId);
    }
    setBookmarkedPosts(newBookmarked);
  };

  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      username: "sarahdev",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      time: "2h",
      verified: true,
      content: "Just shipped a new feature using React Server Components! The performance improvements are incredible. Here's what I learned about streaming and suspense boundaries 🧵",
      image: null,
      likes: 234,
      reposts: 45,
      comments: 89,
      views: 12500,
      tags: ["#ReactJS", "#WebDev", "#Performance"]
    },
    {
      id: 2,
      author: "Tech Daily",
      username: "techdaily",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      time: "4h",
      verified: true,
      content: "🚨 BREAKING: New JavaScript framework 'Quantum' promises 90% faster builds than Vite. Beta launches next week.\n\nKey features:\n• Zero-config setup\n• Built-in TypeScript\n• Native Web Components\n• Edge runtime support\n\nThoughts? 👇",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      likes: 1205,
      reposts: 456,
      comments: 234,
      views: 45600,
      tags: ["#JavaScript", "#WebDev", "#Framework"]
    },
    {
      id: 3,
      author: "Maya Patel",
      username: "mayatech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      time: "6h",
      verified: false,
      content: "Reminder: Your git commit messages are documentation for your future self.\n\n❌ 'fix stuff'\n❌ 'updates'\n❌ 'wip'\n\n✅ 'fix: resolve memory leak in user dashboard'\n✅ 'feat: add dark mode toggle to settings'\n✅ 'refactor: extract payment logic to service'\n\nYour future self will thank you! 🙏",
      image: null,
      likes: 892,
      reposts: 312,
      comments: 156,
      views: 23400,
      tags: ["#Git", "#BestPractices", "#CleanCode"]
    },
    {
      id: 4,
      author: "Alex Rivera",
      username: "alexcodes",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      time: "8h",
      verified: false,
      content: "After 6 months of learning Rust, I finally understand why people say it's hard but worth it. The borrow checker isn't your enemy - it's your debugging buddy that works at compile time instead of 3 AM production incidents 😅",
      image: null,
      likes: 567,
      reposts: 89,
      comments: 78,
      views: 15600,
      tags: ["#Rust", "#Programming", "#Learning"]
    },
    {
      id: 5,
      author: "DevOps Weekly",
      username: "devopsweekly",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      time: "12h",
      verified: true,
      content: "Docker tip of the day: Use multi-stage builds to keep your images lean 🐳\n\nBefore: 1.2GB image\nAfter: 145MB image\n\nHere's the magic:",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=300&fit=crop",
      likes: 445,
      reposts: 178,
      comments: 67,
      views: 18900,
      tags: ["#Docker", "#DevOps", "#Optimization"]
    }
  ];

  const trendingTopics = [
    { topic: "React 19", posts: "45.2K posts" },
    { topic: "TypeScript", posts: "28.1K posts" },
    { topic: "AI Coding", posts: "89.5K posts" },
    { topic: "WebAssembly", posts: "12.3K posts" },
    { topic: "Rust Lang", posts: "34.7K posts" }
  ];

  const suggestedFollows = [
    { name: "Vercel", username: "vercel", avatar: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&crop=face", verified: true },
    { name: "GitHub", username: "github", avatar: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop&crop=face", verified: true },
    { name: "Dan Abramov", username: "dan_abramov", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", verified: true }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Layout */}
      <div className="max-w-7xl mx-auto flex">
        
        {/* Sidebar */}
        <div className="w-64 fixed h-full p-4 border-r border-gray-800">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8 px-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold">Tech Tribe</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { icon: <Home className="w-6 h-6" />, label: "Home", active: true },
              { icon: <Search className="w-6 h-6" />, label: "Explore" },
              { icon: <Bell className="w-6 h-6" />, label: "Notifications" },
              { icon: <Mail className="w-6 h-6" />, label: "Messages" },
              { icon: <Bookmark className="w-6 h-6" />, label: "Bookmarks" },
              { icon: <Users className="w-6 h-6" />, label: "Communities" },
              { icon: <User className="w-6 h-6" />, label: "Profile" },
              { icon: <Settings className="w-6 h-6" />, label: "Settings" }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-4 px-3 py-3 rounded-full hover:bg-gray-900 transition-colors ${
                  item.active ? 'font-bold' : ''
                }`}
              >
                {item.icon}
                <span className="text-xl">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Post Button */}
          <button className="w-full mt-8 bg-white text-black py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
            Post
          </button>

          {/* User Profile */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Your profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="font-bold">You</div>
                <div className="text-gray-500 text-sm">@yourhandle</div>
              </div>
              <MoreHorizontal className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Feed */}
            <div className="lg:col-span-2 border-x border-gray-800 min-h-screen">
              
              {/* Header */}
              <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
                <h1 className="text-xl font-bold mb-4">Home</h1>
                <div className="flex border-b border-gray-800">
                  {[
                    { id: 'for-you', label: 'For You' },
                    { id: 'following', label: 'Following' },
                    { id: 'trending', label: 'Trending' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-4 text-center font-medium transition-colors relative ${
                        activeTab === tab.id 
                          ? 'text-white' 
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Compose Tweet */}
              <div className="border-b border-gray-800 p-4">
                <div className="flex space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Your avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      placeholder="What's happening in tech?"
                      className="w-full bg-transparent text-xl placeholder-gray-500 resize-none border-none outline-none"
                      rows="3"
                    />
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-4 text-blue-400">
                        <ImageIcon className="w-5 h-5 cursor-pointer hover:bg-gray-900 p-1 rounded-full" />
                        <BarChart3 className="w-5 h-5 cursor-pointer hover:bg-gray-900 p-1 rounded-full" />
                        <Smile className="w-5 h-5 cursor-pointer hover:bg-gray-900 p-1 rounded-full" />
                        <Calendar className="w-5 h-5 cursor-pointer hover:bg-gray-900 p-1 rounded-full" />
                        <MapPin className="w-5 h-5 cursor-pointer hover:bg-gray-900 p-1 rounded-full" />
                      </div>
                      <button className="bg-white text-black px-6 py-1.5 rounded-full font-bold hover:bg-gray-200 transition-colors disabled:opacity-50">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts */}
              <div>
                {posts.map((post) => (
                  <article key={post.id} className="border-b border-gray-800 p-4 hover:bg-gray-950/50 cursor-pointer transition-colors">
                    <div className="flex space-x-3">
                      <img
                        src={post.avatar}
                        alt={`${post.author} avatar`}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        {/* Author Info */}
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-bold hover:underline">{post.author}</span>
                          {post.verified && (
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                          <span className="text-gray-500">@{post.username}</span>
                          <span className="text-gray-500">·</span>
                          <span className="text-gray-500">{post.time}</span>
                          <div className="ml-auto">
                            <MoreHorizontal className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="mb-3">
                          <p className="whitespace-pre-line">{post.content}</p>
                          {post.tags && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {post.tags.map((tag, index) => (
                                <span key={index} className="text-blue-400 hover:underline cursor-pointer">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Image */}
                        {post.image && (
                          <div className="mb-3 rounded-2xl overflow-hidden border border-gray-700">
                            <img
                              src={post.image}
                              alt="Post image"
                              className="w-full h-auto"
                            />
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center justify-between max-w-md">
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors group">
                            <div className="p-2 rounded-full group-hover:bg-blue-400/10">
                              <MessageCircle className="w-5 h-5" />
                            </div>
                            <span className="text-sm">{post.comments}</span>
                          </button>

                          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-400 transition-colors group">
                            <div className="p-2 rounded-full group-hover:bg-green-400/10">
                              <Repeat2 className="w-5 h-5" />
                            </div>
                            <span className="text-sm">{post.reposts}</span>
                          </button>

                          <button
                            onClick={() => toggleLike(post.id)}
                            className={`flex items-center space-x-2 transition-colors group ${
                              likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                            }`}
                          >
                            <div className="p-2 rounded-full group-hover:bg-red-500/10">
                              <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                            </div>
                            <span className="text-sm">
                              {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                            </span>
                          </button>

                          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors group">
                            <div className="p-2 rounded-full group-hover:bg-blue-400/10">
                              <BarChart3 className="w-5 h-5" />
                            </div>
                            <span className="text-sm">{post.views}</span>
                          </button>

                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => toggleBookmark(post.id)}
                              className={`p-2 rounded-full transition-colors ${
                                bookmarkedPosts.has(post.id) 
                                  ? 'text-blue-400 hover:bg-blue-400/10' 
                                  : 'text-gray-500 hover:text-blue-400 hover:bg-blue-400/10'
                              }`}
                            >
                              <Bookmark className={`w-5 h-5 ${bookmarkedPosts.has(post.id) ? 'fill-current' : ''}`} />
                            </button>
                            <button className="p-2 rounded-full text-gray-500 hover:text-blue-400 hover:bg-blue-400/10 transition-colors">
                              <Share className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 p-4 space-y-6">
              
              {/* Search */}
              <div className="sticky top-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search Tech Tribe"
                    className="w-full bg-gray-900 border border-gray-700 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>

              {/* Trending */}
              <div className="bg-gray-900 rounded-2xl p-4">
                <h2 className="text-xl font-bold mb-4">What's happening</h2>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="hover:bg-gray-800 p-3 rounded-lg cursor-pointer transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-gray-500 text-sm">Trending in Technology</div>
                          <div className="font-bold">{topic.topic}</div>
                          <div className="text-gray-500 text-sm">{topic.posts}</div>
                        </div>
                        <MoreHorizontal className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="text-blue-400 hover:underline mt-4">Show more</button>
              </div>

              {/* Who to follow */}
              <div className="bg-gray-900 rounded-2xl p-4">
                <h2 className="text-xl font-bold mb-4">Who to follow</h2>
                <div className="space-y-3">
                  {suggestedFollows.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar}
                          alt={`${user.name} avatar`}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="flex items-center space-x-1">
                            <span className="font-bold">{user.name}</span>
                            {user.verified && (
                              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            )}
                          </div>
                          <div className="text-gray-500 text-sm">@{user.username}</div>
                        </div>
                      </div>
                      <button className="bg-white text-black px-4 py-1.5 rounded-full font-bold hover:bg-gray-200 transition-colors">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
                <button className="text-blue-400 hover:underline mt-4">Show more</button>
              </div>

              {/* Footer Links */}
              <div className="text-gray-500 text-sm space-y-2">
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="hover:underline">Terms of Service</a>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                  <a href="#" className="hover:underline">Cookie Policy</a>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="hover:underline">Accessibility</a>
                  <a href="#" className="hover:underline">Ads info</a>
                  <a href="#" className="hover:underline">More</a>
                </div>
                <div>© 2025 Tech Tribe, Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}