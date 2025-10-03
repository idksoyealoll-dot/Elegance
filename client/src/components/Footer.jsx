import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="font-serif text-xl mb-4 tracking-wide">ATELIER</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Timeless, minimal fashion for the modern individual.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-medium">
              SHOP
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/shop" data-testid="link-footer-new-arrivals">
                  <span className="hover:text-foreground transition-colors">
                    New Arrivals
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/shop" data-testid="link-footer-dresses">
                  <span className="hover:text-foreground transition-colors">
                    Dresses
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/shop" data-testid="link-footer-outerwear">
                  <span className="hover:text-foreground transition-colors">
                    Outerwear
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-medium">
              ABOUT
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" data-testid="link-footer-our-story">
                  <span className="hover:text-foreground transition-colors">
                    Our Story
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="hover:text-foreground transition-colors">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-medium">
              NEWSLETTER
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for updates and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 h-10 px-3 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                data-testid="input-newsletter-email"
              />
              <button
                className="h-10 px-4 text-sm bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2"
                data-testid="button-subscribe"
                onClick={() => console.log("Subscribe clicked")}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ATELIER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
