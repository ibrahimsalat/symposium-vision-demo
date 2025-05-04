
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-teal flex items-center justify-center">
            <span className="text-white font-serif font-bold">S</span>
          </div>
          <span className="font-serif text-lg font-medium">Symposium</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/feed" className="text-navy/80 hover:text-teal transition-colors">
            Feed
          </Link>
          <Link to="/papers" className="text-navy/80 hover:text-teal transition-colors">
            Papers
          </Link>
          <Link to="/events" className="text-navy/80 hover:text-teal transition-colors">
            Events
          </Link>
          <Button asChild className="bg-teal hover:bg-teal-light">
            <Link to="/#early-access">Sign Up for Early Access</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-md transition-all duration-300 ease-in-out",
          isOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden py-0"
        )}
      >
        <div className="container-custom flex flex-col space-y-4">
          <Link to="/feed" className="px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
            Feed
          </Link>
          <Link to="/papers" className="px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
            Papers
          </Link>
          <Link to="/events" className="px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
            Events
          </Link>
          <Button asChild className="bg-teal hover:bg-teal-light">
            <Link to="/#early-access" onClick={() => setIsOpen(false)}>Sign Up for Early Access</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
