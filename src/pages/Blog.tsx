import SectionHeading from '../components/shared/SectionHeading';
import { Calendar, User, MessageCircle } from 'lucide-react';

export default function Blog() {
  const posts = [
    { title: 'Young Women Doing Yoga', date: 'Dec 31, 2018', author: 'Admin', img: 'image_1.jpg' },
    { title: 'Effective Therapy Against Stress', date: 'Dec 27, 2018', author: 'Admin', img: 'image_2.jpg' },
    { title: 'Flexibility is A Second Power', date: 'Dec 25, 2018', author: 'Admin', img: 'image_3.jpg' },
    { title: 'Yoga Boosts Brain Power', date: 'Nov 12, 2018', author: 'Admin', img: 'image_4.jpg' },
    { title: 'Yoga Helps You Breathe Better', date: 'Nov 10, 2018', author: 'Admin', img: 'image_5.jpg' },
    { title: 'Meaning to Your Day', date: 'Nov 05, 2018', author: 'Admin', img: 'image_6.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <SectionHeading subheading="Our Blog" heading="Recent Articles" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {posts.map((post, idx) => (
          <div key={idx} className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={`/images/${post.img}`} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="p-8">
              <div className="flex gap-4 mb-4 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1 hover:text-primary transition-colors"><Calendar className="w-3 h-3"/> {post.date}</span>
                <span className="flex items-center gap-1 hover:text-primary transition-colors"><User className="w-3 h-3"/> {post.author}</span>
                <span className="flex items-center gap-1 hover:text-primary transition-colors"><MessageCircle className="w-3 h-3"/> 3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-400 line-clamp-3">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Placeholder */}
      <div className="flex justify-center mt-16 gap-2">
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary font-bold hover:bg-primary hover:text-white transition-colors">1</button>
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-primary transition-colors">2</button>
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-primary transition-colors">3</button>
      </div>
    </div>
  );
}
