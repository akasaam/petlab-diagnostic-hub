import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PETLAB</h3>
                <p className="text-sm text-neutral-400">Veterinary Diagnostic Centre</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              North Bengal's first government registered veterinary diagnostic centre, 
              providing comprehensive testing for 13+ animal species.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Hematology & Coagulation</li>
              <li>Biochemistry Analysis</li>
              <li>Urine & Clinical Pathology</li>
              <li>X-Ray Imaging</li>
              <li>Ultrasonography</li>
              <li>Microbiology Testing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Test Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>081589 33766</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Nabin Sen Rd, Janta Nagar, Siliguri, West Bengal 734001</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Mon-Sat: 9AM-7PM<br />Sun: 10AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-neutral-400">
              © 2024 PETLAB Veterinary Diagnostic Centre. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <div className="text-sm text-neutral-400">
                Government Registered • License: VET/2024/001
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;