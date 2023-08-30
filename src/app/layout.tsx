import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MJ - Portfolio",
  description:
    "Explore my personal website showcasing short introduction about me and a collection of my notable projects.",
  keywords: ["Mikko Jokipuu", "Next.js", "React"],
  authors: [
    {
      name: "Mikko Jokipuu",
      url: "https://github.com/mikkoaukusti",
    },
  ],
  creator: "Mikko Jokipuu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
