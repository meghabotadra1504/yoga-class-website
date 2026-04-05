import SectionHeading from '../components/shared/SectionHeading';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <SectionHeading subheading="About Us" heading="Welcome to Yogalax" />
      <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/images/intro.jpg" 
            alt="About Studio" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-white">We are a vibrant community rooted in wellness.</h2>
          <p className="text-slate-300 text-lg mb-6 leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <button className="btn-primary">Meet Our Trainers</button>
        </div>
      </div>
    </div>
  );
}
