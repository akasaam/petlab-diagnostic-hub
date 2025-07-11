import { Phone, MapPin, Mail, Clock, Heart, Star, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-20 w-6 h-6">
        <Star className="w-full h-full text-primary/20 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-16 w-5 h-5">
        <Heart className="w-full h-full text-secondary/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <Star className="absolute -top-1 -right-1 w-4 h-4 text-secondary animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  PETLAB
                </h3>
                <p className="text-sm text-neutral-400 font-medium">Find Your Best Pet Care Center</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              North Bengal's first government registered veterinary diagnostic centre, 
              providing comprehensive pet care services for 13+ animal species with 
              same-day reporting and expert care.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 cursor-pointer">
                <Facebook className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center hover:bg-secondary/30 transition-colors duration-300 cursor-pointer">
                <Instagram className="w-5 h-5 text-secondary" />
              </div>
              <div className="w-10 h-10 bg-accent-blue/20 rounded-xl flex items-center justify-center hover:bg-accent-blue/30 transition-colors duration-300 cursor-pointer">
                <Twitter className="w-5 h-5 text-accent-blue" />
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <Heart className="w-5 h-5 text-primary mr-2" />
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Dog Pet Visit</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Cat Pet Visit</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Pet Bath & Grooming</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Laboratory Tests</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">X-Ray Imaging</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Emergency Care</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Wellness Programs</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <Star className="w-5 h-5 text-secondary mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li><a href="#home" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Online Appointment</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Browse Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Test Reports</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <Phone className="w-5 h-5 text-accent-green mr-2" />
              Contact Info
            </h4>
            <div className="space-y-4 text-sm text-neutral-300">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p>081589 33766</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" />
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p>Nabin Sen Rd, Janta Nagar,<br />Siliguri, West Bengal 734001</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-accent-green" />
                <div>
                  <p className="font-medium text-white">Hours</p>
                  <p>Mon-Sat: 9AM-7PM<br />Sun: 10AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <p className="text-sm text-neutral-400 text-center lg:text-left">
              © 2024 PETLAB Veterinary Diagnostic Centre. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <div className="flex items-center space-x-2 text-sm text-neutral-400">
                <Heart className="w-4 h-4 text-primary" />
                <span>Government Registered • License: VET/2024/001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;