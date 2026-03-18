import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1578593172274-00a454523315?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Mining Operation" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-8 backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm mr-2">bolt</span>
              <span className="text-sm font-semibold tracking-wide uppercase">Next-Gen Nickel Extraction</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-bold leading-tight mb-8 tracking-tight">
              Powering the <span className="text-primary">EV Revolution</span> from the Ground Up.
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Industry-leading heavy machinery engineered specifically for high-efficiency, low-impact nickel laterite and sulfide mining operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center group">
                Explore Equipment
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm flex items-center justify-center">
                Consult an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="p-4">
              <p className="text-4xl font-bold text-gray-900 mb-2">45+</p>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Countries Served</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-gray-900 mb-2">12k</p>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Active Machines</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-gray-900 mb-2">30%</p>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Efficiency Gain</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-gray-900 mb-2">24/7</p>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Global Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">Specialized Nickel Mining Solutions</h3>
            <p className="text-lg text-gray-600">We design and manufacture robust equipment tailored to the unique challenges of extracting and processing nickel ores in harsh environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Excavation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-2xl">agriculture</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Surface Excavation</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">High-capacity hydraulic excavators and loaders optimized for laterite overburden removal and ore extraction.</p>
                <Link to="/catalog" className="inline-flex items-center text-primary font-semibold hover:text-orange-700 transition-colors">
                  View Machinery <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Haulage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-2xl">local_shipping</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Heavy Haulage</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">Autonomous-ready rigid dump trucks designed for maximum payload and fuel efficiency on steep gradients.</p>
                <Link to="/catalog" className="inline-flex items-center text-primary font-semibold hover:text-orange-700 transition-colors">
                  View Fleet <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-2xl">factory</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Ore Processing</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">Advanced crushing and screening plants built to handle abrasive nickel ores with minimal downtime.</p>
                <Link to="/catalog" className="inline-flex items-center text-primary font-semibold hover:text-orange-700 transition-colors">
                  View Systems <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to upgrade your fleet?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Connect with our engineering team to discuss custom equipment configurations for your specific site requirements.</p>
          <Link to="/contact" className="inline-flex items-center bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-primary/40">
            Contact Sales
            <span className="material-symbols-outlined ml-2">send</span>
          </Link>
        </div>
      </section>
    </>
  );
}
