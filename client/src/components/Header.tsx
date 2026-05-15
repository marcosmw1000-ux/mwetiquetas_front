import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/catalogo', label: 'Produtos' },
    { href: '/simulador', label: 'Simulador' },
    { href: '/como-funciona', label: 'Como Funciona' },
    { href: '/contato', label: 'Contato' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm relative z-[60]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                (75) 3226-9299
              </span>
              <span className="hidden sm:inline">📧 mwetiquetas@uol.com.br</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Badge variant="outline" className="bg-accent text-accent-foreground border-accent">
                Orçamento em 30min
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo_marca.png"
                alt="MW Etiquetas"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border py-4 animate-in fade-in">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      className={`block font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-2"
                >
                  Login
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
