import { Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200 shadow-soft">
      {/* Top Info Bar */}
      <div className="bg-primary header-gradient text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>081589 33766</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Nabin Sen Rd, Siliguri, West Bengal</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Same Day Report Delivery • Home Collection Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">PETLAB</h1>
                <p className="text-sm text-neutral-600">Veterinary Diagnostic Centre</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-neutral-600 hover:text-primary font-medium transition-colors">
              Home
            </a>
            <a href="#services" className="text-neutral-600 hover:text-primary font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-neutral-600 hover:text-primary font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-neutral-600 hover:text-primary font-medium transition-colors">
              Contact
            </a>
            <button className="btn-primary">
              Book Appointment
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;