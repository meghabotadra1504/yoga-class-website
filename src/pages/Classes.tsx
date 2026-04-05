import SectionHeading from '../components/shared/SectionHeading';

export default function Classes() {
  return (
    <div className="container mx-auto px-4 py-24">
      <SectionHeading subheading="Yoga Classes" heading="Choose Your Level & Focus" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { img: 'program-1.jpg', title: 'Group Lessons' },
          { img: 'program-2.jpg', title: 'Yoga For Beginners' },
          { img: 'program-3.jpg', title: 'Yoga For Pregnant' },
          { img: 'program-4.jpg', title: 'Yoga For Couples' },
          { img: 'program-5.jpg', title: 'Bikram Yoga' },
          { img: 'program-6.jpg', title: 'Yoga Barre' },
          { img: 'program-1.jpg', title: 'Private Lessons' },
          { img: 'program-2.jpg', title: 'Advanced Asanas' },
          { img: 'program-3.jpg', title: 'Meditation' },
        ].map((prog, idx) => (
          <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden block cursor-pointer">
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
          </div>
        ))}
      </div>
    </div>
  );
}
