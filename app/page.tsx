import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TechTribe!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your new community for connecting with fellow tech enthusiasts, sharing knowledge, and growing together.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/learn-more">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <p className="text-gray-600">Join discussions, find mentors, and collaborate on projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Share</h3>
            <p className="text-gray-600">Share your insights, tutorials, and experiences with the community.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Grow</h3>
            <p className="text-gray-600">Expand your skills, learn new technologies, and advance your career.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
