import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background-dark text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Industrial Maintenance" className="w-full h-full object-cover opacity-20 mix-blend-overlay" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 to-background-dark"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6 backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm mr-2">engineering</span>
            <span className="text-sm font-semibold tracking-wide uppercase">Comprehensive Support</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Industrial <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Beyond manufacturing, EquipMine provides end-to-end lifecycle management, predictive maintenance, and site optimization to ensure your fleet operates at peak efficiency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary relative z-10">
                <span className="material-symbols-outlined text-4xl">build_circle</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 relative z-10">Preventative Maintenance</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                Scheduled servicing programs designed to identify and resolve potential issues before they cause catastrophic failure. Our certified technicians use advanced diagnostics to extend equipment lifespan.
              </p>
              
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  Comprehensive fluid analysis and replacement
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  Undercarriage inspection and track tensioning
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  Hydraulic system pressure testing and calibration
                </li>
              </ul>
              
              <Link to="/contact" className="inline-flex items-center text-primary font-bold hover:text-orange-700 transition-colors relative z-10">
                Schedule Service <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary relative z-10">
                <span className="material-symbols-outlined text-4xl">query_stats</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 relative z-10">Predictive Analytics (IoT)</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                EquipMine's proprietary telemetry system monitors machine health in real-time. We analyze data streams to predict component wear, allowing for just-in-time parts replacement.
              </p>
              
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  24/7 remote condition monitoring
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  Automated alert generation for critical faults
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  Fleet-wide efficiency reporting and benchmarking
                </li>
              </ul>
              
              <Link to="/contact" className="inline-flex items-center text-primary font-bold hover:text-orange-700 transition-colors relative z-10">
                Explore Telemetry <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary relative z-10">
                <span className="material-symbols-outlined text-4xl">school</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 relative z-10">Operator Training</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                Maximize productivity and safety with our comprehensive training programs. We offer on-site instruction and advanced simulator training for all EquipMine machinery.
              </p>
              
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  Immersive VR simulator training modules
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  Best practices for fuel efficiency and reduced wear
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  Emergency response and safety protocol certification
                </li>
              </ul>
              
              <Link to="/contact" className="inline-flex items-center text-primary font-bold hover:text-orange-700 transition-colors relative z-10">
                View Courses <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary relative z-10">
                <span className="material-symbols-outlined text-4xl">inventory_2</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 relative z-10">Global Parts Network</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                Minimize downtime with our expedited global parts distribution network. We maintain extensive inventories of critical components strategically located near major mining hubs.
              </p>
              
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  24-hour dispatch for critical AOG (Aircraft on Ground) equivalent situations
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  OEM certified remanufactured components
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                  Custom fabrication for legacy equipment support
                </li>
              </ul>
              
              <Link to="/contact" className="inline-flex items-center text-primary font-bold hover:text-orange-700 transition-colors relative z-10">
                Order Parts <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Service SLA Banner */}
      <section className="bg-gray-900 py-16 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-display font-bold text-white mb-2">Need immediate assistance?</h2>
              <p className="text-gray-400 text-lg">Our rapid response teams are available 24/7/365 globally.</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-white">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 border border-gray-700">
                  <span className="material-symbols-outlined text-primary">support_agent</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Emergency Hotline</p>
                  <p className="text-2xl font-bold font-mono tracking-tight">+1 (800) 555-MINE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
