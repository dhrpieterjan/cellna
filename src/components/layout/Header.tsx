'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#wzw', label: 'Wie zijn we' },
    { href: '/#wiiv', label: 'Waarom investeren in vastgoed' },
    { href: '/#fotos', label: 'Fotogalerij' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <header className="flex justify-between items-center py-4">
          {/* Logo - Left aligned */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="Logo Cellna"
              width={120}
              height={48}
              className="h-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation - Right aligned */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="relative px-3 py-2 font-medium text-gray-700 rounded-md transition-all duration-300 hover:text-primary-600 hover:scale-105 hover:bg-gray-50 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-1 text-gray-700 transition-colors hover:text-primary-600"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 py-4 bg-white border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="py-2 font-medium text-gray-700 transition-colors hover:text-primary-600"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;