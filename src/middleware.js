import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Define your public routes here
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/", "/api/(.*)"],
};
