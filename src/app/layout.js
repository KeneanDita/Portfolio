import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kenean Dita Meleta",
  description: "",
};

export default function RootLayout({ children }) {
  // Set dark mode as default on first load
  // This will ensure SSR and first paint is dark
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full flex justify-between items-center py-6 px-4 sm:px-12 bg-background/80 sticky top-0 z-30 border-b">
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="text-sm text-muted-foreground"
            >
              <a
                href="https://t.me/Keneandita"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Chat
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="text-sm text-muted-foreground"
            >
              <a
                href="mailto:keneansufa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
