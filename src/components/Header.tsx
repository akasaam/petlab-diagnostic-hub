import { Phone, MapPin, Clock, Heart, Star } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200 shadow-soft relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
      
      {/* Top Info Bar */}
      <div className="header-gradient text-white py-3 relative">
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
              <Heart className="w-4 h-4 text-pink-200 animate-pulse" />
              <span>Same Day Report Delivery • Home Collection Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-6 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">P</span>
                </div>
                <Star className="absolute -top-1 -right-1 w-4 h-4 text-secondary animate-pulse" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  PETLAB
                </h1>
                <p className="text-sm text-neutral-600 font-medium">Find Your Best Pet Care Center</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-neutral-600 hover:text-primary font-semibold transition-all duration-300 hover:scale-105">
              Home
            </a>
            <a href="#services" className="text-neutral-600 hover:text-primary font-semibold transition-all duration-300 hover:scale-105">
              Services
            </a>
            <a href="#about" className="text-neutral-600 hover:text-primary font-semibold transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="#contact" className="text-neutral-600 hover:text-primary font-semibold transition-all duration-300 hover:scale-105">
              Contact
            </a>
            <button className="btn-primary flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Online Appointment</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;