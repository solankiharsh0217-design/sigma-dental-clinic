"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "General Dentistry", href: "/services#general" },
      { name: "Cosmetic Dentistry", href: "/services#cosmetic" },
      { name: "Restorative Dentistry", href: "/services#restorative" },
      { name: "Emergency Dental", href: "/services#emergency" },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="relative h-20 lg:h-24 w-full flex items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo - Far left */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo/logo-sigma.webp"
            alt="Sigma Dental Clinic"
            width={280}
            height={80}
            className="h-10 sm:h-12 lg:h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation - Dead center */}
        <nav className="hidden lg:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-white/90 hover:text-gold font-medium transition-colors px-4 py-2 text-sm uppercase tracking-wider"
              >
                {item.name}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-3 hidden group-hover:block z-50">
                  <div className="bg-navy border border-white/10 rounded-xl shadow-xl py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-white/70 hover:text-gold hover:bg-white/5 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Phone + Hamburger - Far right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+17735062033"
              className="flex items-center gap-2 text-white/90 hover:text-gold font-medium transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              (773) 506-2033
            </a>
            <Link
              href="/contact"
              className="btn-gold flex items-center gap-2 text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </Link>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/contact"
              className="btn-gold flex items-center gap-1.5 text-xs px-3 py-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white/90 hover:text-gold font-medium py-3 text-lg uppercase tracking-wider border-b border-white/5"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 mt-1 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-white/50 hover:text-gold py-2"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 space-y-3">
                <a
                  href="tel:+17735062033"
                  className="flex items-center gap-2 text-gold font-semibold text-lg"
                >
                  <Phone className="w-5 h-5" />
                  (773) 506-2033
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block btn-gold text-center text-lg"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
