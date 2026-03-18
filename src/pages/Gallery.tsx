export default function Gallery() {
  return (
    <>
      {/* Header/Hero for Gallery */}
      <section className="bg-background-dark text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Project Gallery</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Witness our equipment in action across some of the most challenging mining environments worldwide.</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Gallery Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-primary text-white font-medium shadow-sm transition-colors">All Projects</button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary font-medium transition-colors">Open Pit</button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary font-medium transition-colors">Underground</button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary font-medium transition-colors">Processing</button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary font-medium transition-colors">Reclamation</button>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Gallery Item 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img src="https://images.unsplash.com/photo-1578593172274-00a454523315?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Open Pit Excavation" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Open Pit</span>
                <h3 className="text-white text-xl font-bold mb-2">Pilbara Iron Ore Operation</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Deployment of 5 EX-850 excavators increasing daily yield by 15%.</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer lg:row-span-2">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Heavy Haulage" className="w-full h-80 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Haulage</span>
                <h3 className="text-white text-2xl font-bold mb-2">Autonomous Fleet Integration</h3>
                <p className="text-gray-300 text-sm">Full implementation of HT-400 autonomous trucks in a high-altitude copper mine.</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Processing Plant" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Processing</span>
                <h3 className="text-white text-xl font-bold mb-2">Nickel Laterite Refinery</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Custom crushing and screening circuit designed for highly abrasive materials.</p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Underground Mining" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Underground</span>
                <h3 className="text-white text-xl font-bold mb-2">Deep Shaft Gold Extraction</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Electric LHD loaders operating at 2,000m depth with zero emissions.</p>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Maintenance" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Service</span>
                <h3 className="text-white text-xl font-bold mb-2">Field Overhaul</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Complete engine rebuild performed on-site by our rapid response team.</p>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Reclamation" className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Reclamation</span>
                <h3 className="text-white text-xl font-bold mb-2">Site Restoration</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Grading and contouring using GPS-guided dozers for environmental compliance.</p>
              </div>
            </div>

          </div>

          {/* Load More */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors group">
              Load More Projects
              <span className="material-symbols-outlined ml-2 group-hover:animate-bounce">expand_more</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
