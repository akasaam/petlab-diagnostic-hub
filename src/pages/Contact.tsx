import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, MapPin, Clock, Mail, MessageCircle, Heart } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        {/* Hero Section */}
        <div className="bg-white py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get in Touch
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help with all your pet care needs. Reach out to us anytime.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Ready to help you</p>
              <a href="tel:08158933766" className="text-primary font-semibold hover:underline">
                081589 33766
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Come see us in person</p>
              <p className="text-primary font-semibold">
                Nabin Sen Rd, Siliguri, West Bengal
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Service</h3>
              <p className="text-muted-foreground mb-4">Fast and reliable</p>
              <p className="text-primary font-semibold">
                Same Day Reports • Home Collection
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                ></textarea>
                <button className="btn-primary w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose PETLAB?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    North Bengal's First Government Registered Center
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive services for 13+ animal species
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Same-day report delivery
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Home collection facilities available
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Expert veterinary professionals
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Emergency Contact</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent pet health concerns, don't hesitate to call us immediately.
                </p>
                <a href="tel:08158933766" className="btn-primary inline-flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;