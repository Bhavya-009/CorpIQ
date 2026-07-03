import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Workflow",
    href: "#workflow",
  },
  {
    name: "Use Cases",
    href: "#use-cases",
  },
  {
    name: "About",
    href: "#about",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#top"
          className="text-2xl font-bold tracking-tight cursor-pointer"
        >
          <span className="text-foreground">Corp</span>
          <span className="text-primary">IQ</span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}

        <div className="hidden items-center gap-3 md:flex">

          <ThemeToggle />

          <Button variant="ghost">
            Log In
          </Button>

          <Button>
            Sign Up
          </Button>

        </div>

        {/* Mobile Menu */}

        <div className="flex items-center gap-2 md:hidden">

          <ThemeToggle />

          <Sheet>

            <SheetTrigger asChild>

              <Button
                variant="ghost"
                size="icon"
              >
                <Menu className="h-5 w-5" />
              </Button>

            </SheetTrigger>

            <SheetContent side="right">

              <div className="mt-10 flex flex-col gap-6">

                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium"
                  >
                    {item.name}
                  </a>
                ))}

                <Button variant="ghost">
                  Log In
                </Button>

                <Button>
                  Sign Up
                </Button>

              </div>

            </SheetContent>

          </Sheet>

        </div>

      </div>
    </header>
  );
}