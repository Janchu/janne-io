import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
        <main className="container mx-auto px-4 min-h-screen flex flex-col justify-between gap-8 dark:bg-gray-900">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
