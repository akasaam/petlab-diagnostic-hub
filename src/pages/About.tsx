import Header from "../components/Header";
import Footer from "../components/Footer";
import { Award, Heart, Star, Users, Clock, MapPin } from "lucide-react";
import happyPets from "../assets/happy-pets.jpg";
import vetServices from "../assets/vet-services.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        {/* Hero Section */}
        <div className="bg-white py-16 mb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                  <Award className="w-5 h-5 mr-2" />
                  Government Registered
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">About PETLAB</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  North Bengal's first government-registered veterinary diagnostic center, 
                  dedicated to providing comprehensive healthcare solutions for pets and animals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center text-primary">
                    <Heart className="w-5 h-5 mr-2" />
                    <span className="font-semibold">13+ Animal Species</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Same Day Reports</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={happyPets} alt="Happy pets" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Expert Care</h3>
              <p className="text-muted-foreground">Professional veterinary services with state-of-the-art equipment and experienced staff.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Trusted by Many</h3>
              <p className="text-muted-foreground">Thousands of satisfied pet owners trust us with their beloved companions' health.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Convenient Location</h3>
              <p className="text-muted-foreground">Easily accessible location in Siliguri with home collection services available.</p>
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src={vetServices} alt="Veterinary services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We specialize in laboratory tests and imaging solutions for over 13 species, 
                  offering same-day report delivery and home collection facilities to ensure 
                  convenient and reliable healthcare for your beloved pets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment is to provide accurate diagnostics, compassionate care, 
                  and exceptional service to help pets live healthier, happier lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;