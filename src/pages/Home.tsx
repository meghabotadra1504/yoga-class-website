import { Link } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';
import { ArrowRight, CheckCircle, Brain, Wind, Heart, Focus, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center -mt-24 pt-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/images/bg_2.jpg')" }}
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-base)]/80 to-[var(--color-base)]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 tracking-tight drop-shadow-2xl">
            Inspiration For <br />
            <span className="gradient-text">Joyful Living</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
            Effective Therapy Against Stress. <br className="hidden md:block"/> Flexibility is A Second Power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/classes" className="btn-primary w-full sm:w-auto">
              15 Day Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/about" className="btn-outline w-full sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="/images/intro.jpg" 
                alt="Yoga Studio" 
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <SectionHeading align="left" subheading="Welcome to Yogalax" heading="Why You Should Go To Yoga" />
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Yoga boosts brain power',
                  'Yoga helps you to breathe better',
                  'Yoga improves your strength',
                  'Yoga helps you to focus',
                  'Yoga helps give meaning to your day'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-200">
                    <CheckCircle className="text-accent w-6 h-6 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[var(--color-surface-bg)] relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Healthy Lifestyle', color: 'text-secondary' },
              { icon: Brain, title: 'Body & Mind Balance', color: 'text-primary' },
              { icon: Focus, title: 'Meditation Practice', color: 'text-accent' },
              { icon: Wind, title: 'Edeology', color: 'text-warning' }
            ].map((service, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 text-center">
                <div className={`w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES PREVIEW */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeading subheading="Yoga Classes" heading="Choose Your Level & Focus" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: 'program-1.jpg', title: 'Group Lessons' },
              { img: 'program-2.jpg', title: 'Yoga For Beginners' },
              { img: 'program-3.jpg', title: 'Yoga For Pregnant' },
              { img: 'program-4.jpg', title: 'Yoga For Couples' },
              { img: 'program-5.jpg', title: 'Bikram Yoga' },
              { img: 'program-6.jpg', title: 'Yoga Barre' },
            ].map((prog, idx) => (
              <Link to="/classes" key={idx} className="group relative h-80 rounded-2xl overflow-hidden block">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('/images/${prog.img}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)] via-[var(--color-base)]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{prog.title}</h3>
                  <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-[var(--color-surface-bg)] relative z-10 border-y border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeading subheading="Pricing Tables" heading="Membership Cards" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Weekly Card', price: '85', period: 'For 1 Week' },
              { title: 'Monthly Card', price: '200', period: 'For 1 Month', active: true },
              { title: 'Year Card', price: '449', period: 'For 1 Year' },
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`glass border transition-all duration-300 rounded-3xl p-10 text-center ${
                  plan.active 
                    ? 'border-primary shadow-[0_0_30px_rgba(168,85,247,0.2)] md:-translate-y-4' 
                    : 'border-white/5 hover:border-white/20'
                }`}
              >
                <h3 className="text-2xl font-medium mb-6">{plan.title}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold mr-1">$</span>
                  <span className="text-6xl font-heading font-bold gradient-text">{plan.price}</span>
                </div>
                <p className="text-secondary font-medium tracking-wide mb-8">{plan.period}</p>
                
                <h4 className="text-lg font-semibold mb-6">Enjoy All The Features</h4>
                <ul className="space-y-4 mb-10 text-slate-300">
                  <li>Group Classes</li>
                  <li>Discuss Fitness Goals</li>
                  <li>Group Trainer</li>
                  <li>Fitness Orientation</li>
                </ul>
                
                <button className={`w-full ${plan.active ? 'btn-primary' : 'btn-outline'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeading subheading="Testimony" heading="Successful Stories" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Gabby Smith', img: 'person_1.jpg' },
              { name: 'Floyd Weather', img: 'person_2.jpg' },
              { name: 'James Dee', img: 'person_3.jpg' }
            ].map((user, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-8 relative">
                <Star className="text-warning/20 w-16 h-16 absolute top-4 right-4" />
                <p className="text-slate-300 italic mb-8 relative z-10">
                  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                </p>
                <div className="flex items-center gap-4">
                  <img src={`/images/${user.img}`} alt={user.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="text-lg font-bold">{user.name}</h4>
                    <span className="text-secondary text-sm">Customer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
