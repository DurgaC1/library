import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();
  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setSolutionsOpen(false);
    setResourcesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const solutionsLinks = [
    { name: "Boundless", path: "/boundless" },
    { name: "Digital Content", path: "/digital-content" },
    { name: "TS 360", path: "/title-source-360" },
  ];

  const resourcesLinks = [
    { name: "PressReader", path: "/press-reader" },
    { name: "Press Release", path: "/press-releases" },
    { name: "Career Jobs", path: "/careers" },
    { name: "Webinar", path: "/webinar" },
    { name: "Rotating Reads", path: "/rotating-reads" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsActive = solutionsLinks.some((link) => isActive(link.path));
  const isResourcesActive = resourcesLinks.some((link) => isActive(link.path));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <BookOpen className="w-5 h-5 text-card" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-foreground leading-tight">
                LibraryOne
              </span>
              <span className="text-xs text-muted-foreground font-body -mt-0.5">
                Digital Inc
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium font-body transition-colors ${
                  isActive(link.path)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSolutionsOpen(!solutionsOpen);
                  setResourcesOpen(false);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium font-body transition-colors flex items-center gap-1 ${
                  isSolutionsActive
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setSolutionsOpen(false)}
                      className={`block px-4 py-2 text-sm font-body transition-colors ${
                        isActive(link.path)
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setResourcesOpen(!resourcesOpen);
                  setSolutionsOpen(false);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium font-body transition-colors flex items-center gap-1 ${
                  isResourcesActive
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setResourcesOpen(false)}
                      className={`block px-4 py-2 text-sm font-body transition-colors ${
                        isActive(link.path)
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="default" size="sm">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium font-body transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Solutions */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">Solutions</div>
                <div className="flex flex-col gap-1 ml-4">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 rounded-md text-sm font-body transition-colors ${
                        isActive(link.path)
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Resources */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">Resources</div>
                <div className="flex flex-col gap-1 ml-4">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 rounded-md text-sm font-body transition-colors ${
                        isActive(link.path)
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="default" className="w-full">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
