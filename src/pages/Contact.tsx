export default function Contact() {
  return (
    <>
      {/* Header/Hero for Contact */}
      <section className="bg-background-dark text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Get in touch with our global sales and support teams. We're ready to assist with your industrial mining needs.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Global Headquarters</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-6 text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Corporate Office</h3>
                    <p className="text-gray-600 leading-relaxed">
                      1200 Mining Way<br />
                      Industrial District<br />
                      Perth, WA 6000<br />
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-6 text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">Main: +61 8 9876 5432</p>
                    <p className="text-gray-600 mb-1">Sales: +61 8 9876 5433</p>
                    <p className="text-gray-600">Support (24/7): +1 (800) 555-MINE</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-6 text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">General Inquiries: info@nickelequip.com</p>
                    <p className="text-gray-600 mb-1">Sales: sales@nickelequip.com</p>
                    <p className="text-gray-600">Support: support@nickelequip.com</p>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Regional Offices</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">North America</h4>
                  <p className="text-sm text-gray-600 mb-2">Denver, Colorado, USA</p>
                  <p className="text-sm text-primary font-medium">+1 (303) 555-0198</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">South America</h4>
                  <p className="text-sm text-gray-600 mb-2">Santiago, Chile</p>
                  <p className="text-sm text-primary font-medium">+56 2 2555 0123</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Africa</h4>
                  <p className="text-sm text-gray-600 mb-2">Johannesburg, South Africa</p>
                  <p className="text-sm text-primary font-medium">+27 11 555 0145</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Europe</h4>
                  <p className="text-sm text-gray-600 mb-2">Stockholm, Sweden</p>
                  <p className="text-sm text-primary font-medium">+46 8 555 0176</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Send a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" required />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                  <select id="inquiryType" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white" required>
                    <option value="">Select an option...</option>
                    <option value="sales">Equipment Sales</option>
                    <option value="parts">Parts & Spares</option>
                    <option value="service">Service & Maintenance</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none" required></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg flex items-center justify-center">
                  Submit Inquiry
                  <span className="material-symbols-outlined ml-2">send</span>
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">By submitting this form, you agree to our Privacy Policy and Terms of Service.</p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
