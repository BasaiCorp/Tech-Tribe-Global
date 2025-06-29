import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl">TechTribe</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connect with tech enthusiasts, share knowledge, and stay updated with the latest in technology.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Product</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/api" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                API
              </Link>
              <Link href="/mobile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Mobile App
              </Link>
            </nav>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Community</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/guidelines" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Guidelines
              </Link>
              <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Events
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 TechTribe. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/status" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Status
            </Link>
            <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

