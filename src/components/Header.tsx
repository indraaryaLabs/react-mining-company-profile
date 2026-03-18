import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="material-symbols-outlined text-primary text-3xl mr-2">precision_manufacturing</span>
            <span className="font-display font-bold text-2xl text-gray-900 tracking-tight">NickelEquip</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/catalog" className="text-gray-600 hover:text-primary font-medium transition-colors">Equipment</Link>
            <Link to="/services" className="text-gray-600 hover:text-primary font-medium transition-colors">Services</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-primary font-medium transition-colors">Gallery</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary font-medium transition-colors">About</Link>
            <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
