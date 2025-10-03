import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/shop", label: "SHOP" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link href="/" data-testid="link-home">
            <h1 className="font-serif text-xl md:text-2xl font-light tracking-wide">
              ATELIER
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase()}`}>
                <span
                  className={`text-sm tracking-wider transition-colors hover-elevate px-2 py-1 rounded-sm ${
                    location === link.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              size="icon"
              variant="ghost"
              data-testid="button-search"
              onClick={() => console.log("Search clicked")}
            >
              <Search className="h-4 w-4" />
            </Button>
            <Link href="/signin">
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-account"
              >
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="icon"
              variant="ghost"
              data-testid="button-cart"
              onClick={() => console.log("Cart clicked")}
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`py-3 text-sm tracking-wider ${
                    location === link.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
