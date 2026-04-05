import { Twitter, Facebook, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-surface-bg)] -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Yogalax</h2>
            <p className="text-slate-400">
              Inspiration For Joyful Living. Effective Therapy Against Stress. Flexibility is A Second Power.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-heading font-medium text-white mb-6">Studio Location</h3>
            <p className="text-slate-400">
              203 Fake St. Mountain View,<br />
              San Francisco, California, USA
            </p>
            <p className="text-primary mt-2">hello@yogalax.com</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-heading font-medium text-white mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            Copyright &copy; {currentYear} All rights reserved | Made with <Heart className="inline w-4 h-4 text-secondary" /> by You
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
