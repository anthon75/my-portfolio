"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-4 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient">Portfolio</div>

        {/* Desktop Nav */}
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

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Hamburger button (mobile only) */}
          <Button
            onClick={toggleMenu}
            className="md:hidden h-10 w-10 flex items-center justify-center"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu with Overlay */}
      {isOpen && (
        <>
          {/* Black background overlay */}
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          {/* Side drawer */}
          <div className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={closeMenu}>
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 p-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="text-lg hover:text-primary transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
