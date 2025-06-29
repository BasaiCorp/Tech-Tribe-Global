import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/profile(.*)', // Protects the profile page and any sub-routes
  // Add any other routes you want to protect here
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|static|favicon.ico|api|trpc|.*\\..*).*)',
    // Match all routes including the root
    '/',
  ],
};
