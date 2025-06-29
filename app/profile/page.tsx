import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <p className="mb-4">Manage your TechTribe profile details here.</p>
      <div className="flex justify-center">
        <UserProfile path="/profile" routing="path" />
      </div>
    </div>
  );
}
