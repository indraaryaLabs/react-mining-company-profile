import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl mr-2">precision_manufacturing</span>
              <span className="font-display font-bold text-2xl tracking-tight">NickelEquip</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Pioneering the future of nickel mining with advanced, sustainable, and high-performance equipment solutions for global operations.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-200">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/catalog" className="text-gray-400 hover:text-primary transition-colors">Equipment Catalog</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Industrial Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-primary transition-colors">Project Gallery</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-200">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-2 text-primary text-xl">location_on</span>
                <span>1200 Mining Way, Industrial District, Perth, WA 6000</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-primary text-xl">mail</span>
                <span>contact@nickelequip.com</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-primary text-xl">call</span>
                <span>+61 8 9876 5432</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 NickelEquip Corporation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
