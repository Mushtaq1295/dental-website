'use client';
import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-glass shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-white font-bold text-lg">
            🦷
          </div>
          <span
            className={`font-playfair text-xl font-bold ${
              scrolled ? 'text-[var(--navy)]' : 'text-white'
            }`}
          >
            SmileCare
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors hover:text-[var(--gold)] ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 text-sm font-medium ${
              scrolled ? 'text-gray-600' : 'text-white/90'
            }`}
          >
            <Phone size={15} />
            +91 98765 43210
          </a>
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-gold text-sm !py-2.5 !px-6"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-gray-700 font-medium py-2 border-b border-gray-50"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-gold w-full text-center text-sm !py-3"
          >
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
}