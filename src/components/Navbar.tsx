"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("color-theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
      return next;
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-card-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="MDK Auto Spa Logo"
              width={48}
              height={48}
              className="h-12 w-auto mr-3"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tight text-secondary dark:text-primary leading-none">
                MDK AUTO SPA
              </span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">
                PREMIUM DETAILING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Loyalty Program", "Contact"].map(
              (item) => {
                let href = "/";
                if (item === "Services") href = "/services";
                if (item === "Loyalty Program") href = "/loyalty";
                if (item === "Contact") href = "/#contact";
                
                // Determine if active based on path. This is a bit simplistic, given hash links vs paths.
                const isActive = item === "Loyalty Program" ? pathname === "/loyalty" : item === "Services" ? pathname === "/services" : (pathname === "/" && item === "Home");

                return (
                  <Link
                    key={item}
                    href={href}
                    className={`font-medium transition-colors ${
                      isActive 
                        ? "text-primary dark:text-primary" 
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    }`}
                  >
                    {item}
                  </Link>
                );
              }
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <span className="material-icons">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <Link
              href="#"
              className="px-5 py-2.5 rounded-full bg-secondary hover:bg-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              Admin Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <span className="material-icons">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              <span className="material-icons text-3xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700 animate-[fadeIn_0.2s_ease-in]">
            <div className="flex flex-col space-y-3 pt-4">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Loyalty Program", href: "/loyalty" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => {
                const isActive = item.label === "Loyalty Program" ? pathname === "/loyalty" : item.label === "Services" ? pathname === "/services" : (pathname === "/" && item.label === "Home");
                
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-primary dark:text-primary bg-primary/10 dark:bg-primary/10"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="#"
                className="mx-4 text-center px-5 py-2.5 rounded-full bg-secondary hover:bg-blue-800 text-white font-semibold shadow-lg transition-all text-sm"
              >
                Admin Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
