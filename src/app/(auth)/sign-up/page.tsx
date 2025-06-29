import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground">Join TechTribe</h1>
        <p className="text-muted-foreground mt-2">Create your account to get started</p>
      </div>
      <SignUp 
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
            card: "bg-card border border-border shadow-lg",
            headerTitle: "text-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton: "border border-border bg-background hover:bg-accent",
            socialButtonsBlockButtonText: "text-foreground",
            formFieldInput: "bg-background border border-border text-foreground",
            formFieldLabel: "text-foreground",
            footerActionLink: "text-primary hover:text-primary/90",
          }
        }}
      />
    </div>
  );
}


