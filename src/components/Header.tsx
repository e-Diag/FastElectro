import { Zap, Phone, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+79523761369";

  const navLinks = [
    { href: "#about", label: "О нас" },
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#visit", label: "Посетить объект" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-md rounded-full group-hover:bg-[#D4AF37]/30 transition-colors" />
            <Zap
              className="relative w-6 h-6 text-[#D4AF37]"
              fill="#D4AF37"
            />
          </div>
          <span className="text-[#D4AF37] group-hover:text-[#FFD700] transition-colors">
            Fast Electro
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-[#D4AF37] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop Phone Button */}
          <Button
            asChild
            className="hidden md:flex bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 gap-2"
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">
                Позвонить
              </span>
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#1A1A1A] border-[#D4AF37]/20"
            >
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 gap-2 mt-4"
                >
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="w-4 h-4" />
                    +7 952 376-13-69
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}