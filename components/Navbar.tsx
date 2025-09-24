// components/Navbar.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

// You can use a library like react-icons for a hamburger menu icon
// import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-white/30 backdrop-blur-lg border-b border-gray-200 dark:bg-gray-900/30 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          MyLogo
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200">
            About
          </Link>
          <Link href="/services" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200">
            Services
          </Link>
          <Link href="/contact" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200">
            Contact
          </Link>
          <UserButton />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {/* {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />} */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white/30 backdrop-blur-lg border-t border-gray-200 dark:bg-gray-900/30 dark:border-gray-700`}
      >
        <div className="flex flex-col space-y-2 p-4">
          <Link href="/about" className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/contact" className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;