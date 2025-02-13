import React, { ReactNode } from "react";
import { public_sans } from "@/styles/fonts";
import { ThemeProvider, UserProvider, ProtectedRoute } from "@/providers";
import { Layout } from "@/enteties";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={public_sans.variable}>
        <main>
          <ThemeProvider>
            <Layout>
              <UserProvider>
                <ProtectedRoute>{children}</ProtectedRoute>
              </UserProvider>
            </Layout>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
