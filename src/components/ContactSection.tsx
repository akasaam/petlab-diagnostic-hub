import { Phone, Mail, MapPin, Clock, Calendar, Heart, Star, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-primary-light to-secondary-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-20 w-6 h-6">
        <Star className="w-full h-full text-primary/30 animate-pulse" />
      </div>
      <div className="absolute bottom-16 left-10 w-5 h-5">
        <Heart className="w-full h-full text-secondary/30 animate-pulse" style={{ animationDelay: '0.7s' }} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-primary rounded-full text-sm font-semibold mb-8 border border-primary/20">
            <Phone className="w-5 h-5 mr-2" />
            Get in Touch
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
            Contact
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> PETLAB</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to schedule a diagnostic test for your pet? Contact us today for professional 
            veterinary diagnostic services with same-day reporting and expert care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-primary/10 relative">
            <div className="absolute top-6 right-6">
              <Heart className="w-6 h-6 text-secondary animate-pulse" />
            </div>
            
            <h3 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
              <Calendar className="w-8 h-8 text-primary mr-3" />
              Book an Appointment
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Pet Owner Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border-2 border-primary/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-6 py-4 border-2 border-primary/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Pet Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border-2 border-primary/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50"
                    placeholder="Your pet's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Animal Species
                  </label>
                  <select className="w-full px-6 py-4 border-2 border-primary/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50">
                    <option>Select species</option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Cow</option>
                    <option>Horse</option>
                    <option>Rabbit</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">
                  Service Required
                </label>
                <select className="w-full px-6 py-4 border-2 border-primary/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50">
                  <option>Select service type</option>
                  <option>Dog Pet Visit</option>
                  <option>Cat Pet Visit</option>
                  <option>Pet Bath</option>
                  <option>Pet Grooming</option>
                  <option>Laboratory Tests</option>
                  <option>X-Ray Imaging</option>
                  <option>Complete Health Checkup</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">
                  Special Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-primary/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50"
                  placeholder="Any special requirements or notes about your pet's condition..."
                ></textarea>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="home-collection"
                  className="w-5 h-5 text-primary border-2 border-primary/30 rounded focus:ring-primary"
                />
                <label htmlFor="home-collection" className="text-sm font-medium text-neutral-700">
                  I would like home collection service
                </label>
              </div>
              
              <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-3 text-lg">
                <Send className="w-6 h-6" />
                <span>Book Appointment</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-primary/10 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Phone</h3>
                  <p className="text-neutral-600">Call us for appointments</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-primary">081589 33766</p>
            </div>

            {/* Address */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-secondary/10 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-light to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Address</h3>
                  <p className="text-neutral-600">Visit our care center</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Nabin Sen Rd, near Animal Health Veterinary Hospital,<br />
                Ward 10, Janta Nagar, Siliguri, West Bengal 734001
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-accent-green/10 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green-light to-accent-green/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-accent-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Operating Hours</h3>
                  <p className="text-neutral-600">We're here when you need us</p>
                </div>
              </div>
              <div className="space-y-2 text-neutral-700">
                <p className="font-medium">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="font-medium">Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Emergency Services */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Star className="w-8 h-8 text-white/30 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="w-8 h-8 mr-3 animate-pulse" />
                Emergency Services
              </h3>
              <p className="mb-6 leading-relaxed opacity-90">
                For emergency pet care services, please call us directly. 
                We prioritize urgent cases and can arrange immediate care when needed.
              </p>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border border-white/30">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;