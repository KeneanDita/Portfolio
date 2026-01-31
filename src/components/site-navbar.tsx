"use client";

import * as React from "react";
import { Menu, Home, User, Sparkles, FolderGit2, Mail } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/portfolio";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: Mail },
] as const;

export function SiteNavbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <aside className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 md:block">
        <div className="w-16 rounded-3xl border bg-background p-2 shadow-xl transition-transform duration-200 will-change-transform hover:scale-[1.03]">
          <TooltipProvider>
            <nav className="grid gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-2xl text-muted-foreground transition-transform duration-150 ease-out will-change-transform hover:scale-110 hover:bg-muted/60 hover:text-foreground active:scale-95"
                      >
                        <a href={item.href} aria-label={item.label}>
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="font-medium">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </nav>
          </TooltipProvider>

          <div className="mt-2 grid gap-2 border-t pt-2">
            <div className="flex justify-center">
              <ModeToggle />
            </div>
          </div>
        </div>
      </aside>

      <div className="fixed left-4 top-4 z-50 flex items-center gap-2 md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-2xl bg-background"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <SheetHeader className="border-b">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <a href="#home" className="font-semibold tracking-tight" onClick={() => setOpen(false)}>
                  {siteConfig.name}
                </a>
                <ModeToggle />
              </div>

              <div className="grid gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-colors hover:bg-muted"
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </a>
                    </SheetClose>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
