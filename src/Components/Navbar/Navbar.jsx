"use client";
import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gradient">Portfolio</div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button className="md:hidden h-10 w-10">
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
