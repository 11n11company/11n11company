import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'services', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xs transition-all duration-300 ${
        scrolled
          ? 'py-3 sm:py-3.5 border-b border-neutral-200/80 shadow-xs'
          : 'py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* LEFT: LOGO */}
        <a href="#home" className="group flex items-center select-none py-0.5">
          <img
            src={logoImg}
            alt="11 n 11 Company"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* CENTER: DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 font-sans text-xs sm:text-[13px] tracking-wide text-[#0A0A0A] hover:text-neutral-600 transition-colors font-normal"
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-black translate-y-0.5" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: DESKTOP CTA BUTTON */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContactModal}
            className="group inline-flex items-center justify-center bg-[#0A0A0A] text-white px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.06em] hover:bg-neutral-800 transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight size={13} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:text-neutral-600 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN/SLIDE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white border-b border-neutral-200 px-6 py-8 shadow-xl transition-all duration-300">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-editorial text-2xl text-[#0A0A0A] hover:text-neutral-500 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans tracking-widest text-neutral-400">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContactModal) onOpenContactModal();
                }}
                className="w-full inline-flex items-center justify-center bg-[#0A0A0A] text-white py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.14em]"
              >
                <span>Start a Project</span>
                <ArrowRight size={13} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
