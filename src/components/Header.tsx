import { Phone, MapPin, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-border shadow-lg relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-y-8 translate-x-8"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-primary/5 rounded-full translate-y-6 -translate-x-6"></div>
      
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
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-secondary font-bold text-2xl">P</span>
                </div>
                <Star className="absolute -top-1 -right-1 w-4 h-4 text-primary animate-pulse" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary">
                  PETLAB
                </h1>
                <p className="text-sm text-muted-foreground font-medium">Find Your Best Pet Care Center</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/" className="px-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 font-semibold transition-all duration-300 rounded-lg">
              Home
            </Link>
            <Link to="/services" className="px-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 font-semibold transition-all duration-300 rounded-lg">
              Services
            </Link>
            <Link to="/about" className="px-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 font-semibold transition-all duration-300 rounded-lg">
              About
            </Link>
            <Link to="/contact" className="px-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 font-semibold transition-all duration-300 rounded-lg">
              Contact
            </Link>
            <Link to="/appointment" className="btn-primary ml-4">
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;