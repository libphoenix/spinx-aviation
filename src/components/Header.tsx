import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center md:justify-between rounded-md">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Spinx Aviation Logo"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#fleet"
              className="text-foreground hover:text-primary transition-colors"
            >
              Fleet
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
