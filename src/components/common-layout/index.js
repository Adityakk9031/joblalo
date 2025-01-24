import { auth } from "@clerk/nextjs"; // Updated import
import { getUser } from "@clerk/nextjs/server"; // For fetching user details
import Header from "../header";
import { fetchProfileAction } from "@/actions";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

async function CommonLayout({ children, ...props }) {
  const { userId } = auth(); // Retrieve userId from auth
  const user = userId ? await getUser(userId) : null; // Fetch user details if logged in
  const profileInfo = userId ? await fetchProfileAction(user?.id) : null;

  return (
    <NextThemesProvider {...props}>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        {/* Header Component */}
        <Header
          profileInfo={profileInfo}
          user={user ? JSON.parse(JSON.stringify(user)) : null}
        />
        {/* Header Component */}

        {/* Main Content */}
        <main>{children}</main>

        {/* Main Content */}
      </div>
    </NextThemesProvider>
  );
}

export default CommonLayout;
