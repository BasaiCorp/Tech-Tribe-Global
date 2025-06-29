import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-foreground">
          TechTribe
        </Link>
        <nav className="flex items-center gap-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild variant="outline">
              <Link href="/sign-in">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};

export default Header;
