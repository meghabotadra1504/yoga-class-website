export default function SectionHeading({ 
  subheading, 
  heading, 
  align = 'center' 
}: { 
  subheading: string; 
  heading: string; 
  align?: 'center' | 'left';
}) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="text-secondary font-medium tracking-wider uppercase text-sm block mb-3 inline-block px-4 py-1 rounded-full bg-secondary/10">
        {subheading}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold">{heading}</h2>
    </div>
  );
}
