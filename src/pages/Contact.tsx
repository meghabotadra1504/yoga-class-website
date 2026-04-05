import SectionHeading from '../components/shared/SectionHeading';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-24">
      <SectionHeading subheading="Get In Touch" heading="Contact Us" />
      
      <div className="flex flex-col lg:flex-row gap-16 mt-16">
        <div className="w-full lg:w-1/3 space-y-8">
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-slate-400">203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-primary hover:text-secondary cursor-pointer transition-colors">info@yogalax.com</p>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Phone</h3>
            <p className="text-slate-400">+1 234 4567 890</p>
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <form className="glass p-8 md:p-12 rounded-3xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                <input type="text" className="w-full bg-[var(--color-surface-bg)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                <input type="email" className="w-full bg-[var(--color-surface-bg)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
              <input type="text" className="w-full bg-[var(--color-surface-bg)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Class Inquiry" />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-[var(--color-surface-bg)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full md:w-auto">
              Send Message <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
