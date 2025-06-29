import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/', // Protect the home page
  '/profile(.*)', // Protect profile pages
  // Add any other routes you want to protect here
]);

export default clerkMiddleware((auth, req) => {
  // clerkMiddleware will automatically protect routes if isProtectedRoute(req) is true
  // and the route is not public.
  // The `auth().protect()` call is not needed here when using createRouteMatcher
  // as the primary mechanism for defining protected routes.
  // If isProtectedRoute(req) is true, and it's not in publicRoutes (which is empty by default),
  // Clerk will handle the redirect to sign-in.
  if (isProtectedRoute(req)) {
    // Intentionally leaving this block empty or you can call auth() to get session details if needed for other logic
    // For example: const { userId } = auth();
    // But for protection, clerkMiddleware handles it based on the matcher.
    auth(); // This call initializes auth state, useful if you need to access it, but not for protection itself here.
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
