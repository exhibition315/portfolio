import type { Metadata } from "next";
import AppThemeProvider from "@components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shu-Han (Alvin) Wang | Resume",
  description:
    "Shu-Han (Alvin) Wang | Senior Front-End Engineer - Specializing in React, Next.js, FinTech, and cross-functional team leadership.",
  keywords: [
    "Shu-Han Wang",
    "Alvin Wang",
    "Resume",
    "Front-End Engineer",
    "Next.js",
    "React",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 bg-white text-gray-900 dark:bg-[#18181b] dark:text-white">
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
