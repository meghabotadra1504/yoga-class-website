import SectionHeading from '../components/shared/SectionHeading';

export default function Schedule() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const times = ['08:00 AM - 10:00 AM', '10:00 AM - 12:00 PM', '02:00 PM - 04:00 PM', '06:00 PM - 08:00 PM'];

  return (
    <div className="container mx-auto px-4 py-24">
      <SectionHeading subheading="Time & Table" heading="Weekly Schedule" />
      
      <div className="mt-16 overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header Row */}
          <div className="grid grid-cols-7 gap-4 mb-4">
            <div className="font-bold text-slate-400 uppercase text-sm p-4 text-center">Time</div>
            {days.map(day => (
              <div key={day} className="glass font-bold text-primary uppercase text-sm p-4 rounded-xl text-center">
                {day}
              </div>
            ))}
          </div>

          {/* Schedule Body */}
          {times.map((time, idx) => (
            <div key={idx} className="grid grid-cols-7 gap-4 mb-4">
              <div className="glass font-medium text-slate-300 text-sm p-4 rounded-xl flex items-center justify-center text-center">
                {time}
              </div>
              {days.map((_, dIdx) => (
                <div key={`${idx}-${dIdx}`} className={`glass-card p-4 rounded-xl text-center transition-all duration-300 hover:scale-[1.02] cursor-pointer ${Math.random() > 0.6 ? 'opacity-50 pointer-events-none' : 'hover:border-accent'}`}>
                  {Math.random() > 0.6 ? (
                    <span className="text-slate-600 block mt-2 text-sm">No Class</span>
                  ) : (
                    <>
                      <h4 className="font-bold text-white mb-1">Hatha Yoga</h4>
                      <p className="text-xs text-secondary mb-2">Lisa Smith</p>
                      <button className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors">Book</button>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
