import { Link } from 'react-router-dom';

export default function Catalog() {
  return (
    <>
      {/* Header/Hero for Catalog */}
      <section className="bg-background-dark text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Industrial Mining Machinery Catalog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Explore our comprehensive range of heavy-duty equipment designed for maximum extraction efficiency and durability.</p>
        </div>
      </section>

      {/* Catalog Layout */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="font-bold text-lg text-gray-900 mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2 text-primary">filter_list</span>
                Filters
              </h2>
              
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Equipment Type</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" defaultChecked />
                    <span className="text-gray-700 group-hover:text-primary transition-colors">Excavators (12)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="text-gray-700 group-hover:text-primary transition-colors">Haul Trucks (8)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="text-gray-700 group-hover:text-primary transition-colors">Drill Rigs (5)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="text-gray-700 group-hover:text-primary transition-colors">Loaders (10)</span>
                  </label>
                </div>
              </div>

              {/* Power Source Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Power Source</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="text-gray-700 group-hover:text-primary transition-colors">Diesel Engine</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="text-gray-700 group-hover:text-primary transition-colors">Electric Drive</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="text-gray-700 group-hover:text-primary transition-colors">Hybrid System</span>
                  </label>
                </div>
              </div>
              
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 font-medium">Showing <span className="text-gray-900 font-bold">1-6</span> of 35 machines</p>
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 text-sm">Sort by:</span>
                <select className="bg-gray-50 border border-gray-200 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Recommended</option>
                  <option>Operating Weight (High to Low)</option>
                  <option>Power Output (High to Low)</option>
                  <option>Newest Additions</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Product Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
                <div className="h-64 overflow-hidden relative bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="EX-850 Hydraulic Excavator" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    New Model
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 font-display">EX-850</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">Excavator</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">Heavy-duty hydraulic excavator optimized for massive earthmoving and hard rock extraction in open-pit environments.</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Operating Weight</p>
                      <p className="font-bold text-gray-900">85,000 kg</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Engine Power</p>
                      <p className="font-bold text-gray-900">400 kW (536 HP)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Bucket Capacity</p>
                      <p className="font-bold text-gray-900">4.5 - 5.2 m³</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Digging Depth</p>
                      <p className="font-bold text-gray-900">8.4 m</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                      View Specs
                    </button>
                    <button className="p-3 border border-gray-200 rounded-xl text-gray-600 hover:text-primary hover:border-primary transition-colors flex items-center justify-center" title="Request Quote">
                      <span className="material-symbols-outlined">request_quote</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
                <div className="h-64 overflow-hidden relative bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="HT-400 Rigid Haul Truck" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 font-display">HT-400</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">Haul Truck</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">High-capacity rigid dump truck featuring an advanced electric drive system for superior efficiency on steep grades.</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Payload Capacity</p>
                      <p className="font-bold text-gray-900">400 Metric Tons</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Gross Power</p>
                      <p className="font-bold text-gray-900">2,983 kW (4,000 HP)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Top Speed (Loaded)</p>
                      <p className="font-bold text-gray-900">64 km/h</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Drive System</p>
                      <p className="font-bold text-gray-900">AC Electric</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                      View Specs
                    </button>
                    <button className="p-3 border border-gray-200 rounded-xl text-gray-600 hover:text-primary hover:border-primary transition-colors flex items-center justify-center" title="Request Quote">
                      <span className="material-symbols-outlined">request_quote</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold">1</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium">2</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium">3</button>
                <span className="text-gray-500">...</span>
                <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium">6</button>
                <button className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </nav>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
