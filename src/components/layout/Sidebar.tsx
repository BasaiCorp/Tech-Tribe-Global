import Link from 'next/link';
import { Home, Settings, Users } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="bg-background border-r border-border w-64 p-4 space-y-2 hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)]">
      <nav className="flex flex-col space-y-1">
        <Link
          href="/"
          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
        <Link
          href="/members"
          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <Users className="h-4 w-4" />
          <span>Members</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
