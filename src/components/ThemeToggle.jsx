"use client";

import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dark = localStorage.getItem("theme") === "dark";
      setIsDark(dark);
      document.documentElement.classList.toggle("dark", dark);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">Light</span>
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <span className="text-xs text-muted-foreground">Dark</span>
    </div>
  );
}
