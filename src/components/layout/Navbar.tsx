import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Flower2, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Classes', path: '/classes' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-heading font-bold text-white group"
        >
          <Flower2 className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
          <span>Yogalax</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `font-medium transition-colors duration-300 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  `flex items-center gap-2 font-medium px-4 py-2 rounded-xl border border-white/10 transition-all ${
                    isActive ? 'bg-primary border-primary text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`
                }
              >
                <User className="w-4 h-4" />
                <span>{user?.name?.split(' ')[0]}</span>
              </NavLink>
            ) : (
              <>
                <Link to="/login" className="text-slate-300 hover:text-primary font-medium transition-colors">
                  Login
                </Link>
                <Link to="/register" className="btn-primary py-2 px-5 text-sm">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full glass-card transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] border-t border-white/10' : 'max-h-0 border-transparent border-t-0'
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block text-lg font-medium transition-colors duration-300 hover:text-primary ${
                  isActive ? 'text-primary' : 'text-slate-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
            {isAuthenticated ? (
              <NavLink 
                to="/dashboard" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-lg font-medium text-primary"
              >
                <User className="w-5 h-5" /> Dashboard
              </NavLink>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300">
                  Login
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

