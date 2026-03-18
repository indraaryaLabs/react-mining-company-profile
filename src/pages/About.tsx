import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background-dark text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1578593172274-00a454523315?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Mining Operation" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 to-background-dark"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Forging the Future of <span className="text-primary">Extraction</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Since 1985, EquipMine has been at the forefront of heavy industrial machinery, engineering solutions that power the world's most demanding mining operations.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Legacy</h2>
              <h3 className="text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">Built on a Foundation of Iron and Innovation</h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  What began as a small fabrication shop in the heart of the industrial belt has grown into a global leader in mining equipment manufacturing. EquipMine was founded on a simple principle: machinery should work as hard as the people operating it.
                </p>
                <p>
                  Over the decades, we've evolved from producing basic excavation tools to developing autonomous, AI-driven haulage systems and high-efficiency processing plants. Our commitment to durability, safety, and performance remains unchanged.
                </p>
                <p>
                  Today, our equipment operates in over 40 countries, extracting the critical minerals needed for modern infrastructure and the transition to renewable energy.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-4xl font-bold text-gray-900 mb-1">38<span className="text-primary">+</span></p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Years Experience</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-4xl font-bold text-gray-900 mb-1">500<span className="text-primary">k</span></p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Tons Extracted Daily</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Historical Mining Equipment" className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full" referrerPolicy="no-referrer" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-[-2rem] bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                <div className="flex items-center mb-3">
                  <span className="material-symbols-outlined text-primary text-3xl mr-3">verified</span>
                  <h4 className="font-bold text-gray-900">ISO 9001 Certified</h4>
                </div>
                <p className="text-sm text-gray-600">Committed to the highest standards of quality management in manufacturing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Core Principles</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">What Drives Us Forward</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">shield</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Uncompromising Safety</h4>
              <p className="text-gray-600 leading-relaxed">We engineer every machine with operator safety as the primary directive. Our zero-harm philosophy extends from our factory floors to your mine sites.</p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Rugged Reliability</h4>
              <p className="text-gray-600 leading-relaxed">Mining environments are unforgiving. We build equipment designed to withstand extreme conditions, minimizing downtime and maximizing productivity.</p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Extraction</h4>
              <p className="text-gray-600 leading-relaxed">We are pioneering electric and hybrid machinery to reduce the carbon footprint of mining operations while improving overall efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background-dark text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Partner with EquipMine</h2>
          <p className="text-xl text-gray-400 mb-10">Discover how our engineering expertise can optimize your extraction processes.</p>
          <Link to="/contact" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg">
            Contact Our Team
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
