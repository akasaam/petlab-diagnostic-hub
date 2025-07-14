import { ArrowRight, Heart, Star, Sparkles, Phone, MapPin, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import vetServices from "../assets/vet-services.jpg";
import catCheckup from "../assets/cat-checkup.jpg";
import dogCare from "../assets/dog-care.jpg";
import petLab from "../assets/pet-lab.jpg";
import happyPets from "../assets/happy-pets.jpg";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-6 h-6">
        <Star className="w-full h-full text-primary animate-pulse" />
      </div>
      <div className="absolute top-32 right-20 w-8 h-8">
        <Heart className="w-full h-full text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-1/4 w-6 h-6">
        <Award className="w-full h-full text-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-40 right-1/3 w-5 h-5">
        <Sparkles className="w-full h-full text-primary/60 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-8 border border-primary/20">
            <Award className="w-5 h-5 mr-2 text-primary" />
            North Bengal's First Govt. Registered Vet Diagnostic Centre
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Find Your Best
            <br />
            <span className="text-primary">
              Pet Care Center
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            PETLAB specializes in comprehensive laboratory tests and imaging solutions for pets and animals. 
            We offer complete diagnostic solutions for over 13 species with same-day report delivery and 
            home collection facilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/appointment" className="btn-primary text-lg gap-3">
              <Calendar className="w-6 h-6" />
              <span>Online Appointment</span>
            </Link>
            <Link to="/products" className="btn-secondary text-lg">
              Browse Products
            </Link>
          </div>
        </div>
        
        {/* Enhanced Pet Care Showcase */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Veterinary Services */}
            <div className="pet-frame bg-white p-6 lg:col-start-1 lg:row-start-1">
              <div className="w-full h-48 rounded-2xl overflow-hidden">
                <img src={vetServices} alt="Veterinary Services" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-foreground">Expert Care</h3>
                <p className="text-sm text-muted-foreground">Professional veterinary services</p>
              </div>
            </div>
            
            {/* Cat Checkup */}
            <div className="pet-frame bg-white p-6 lg:col-start-4 lg:row-start-1">
              <div className="w-full h-48 rounded-2xl overflow-hidden">
                <img src={catCheckup} alt="Cat Health Checkup" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-foreground">Health Checkups</h3>
                <p className="text-sm text-muted-foreground">Comprehensive examinations</p>
              </div>
            </div>
            
            {/* Dog Care */}
            <div className="pet-frame bg-white p-6 lg:col-start-1 lg:row-start-2">
              <div className="w-full h-48 rounded-2xl overflow-hidden">
                <img src={dogCare} alt="Dog Care Services" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-foreground">Dog Care</h3>
                <p className="text-sm text-muted-foreground">Specialized canine treatments</p>
              </div>
            </div>
            
            {/* Laboratory */}
            <div className="pet-frame bg-white p-6 lg:col-start-4 lg:row-start-2">
              <div className="w-full h-48 rounded-2xl overflow-hidden">
                <img src={petLab} alt="Pet Laboratory" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-foreground">Laboratory</h3>
                <p className="text-sm text-muted-foreground">Advanced diagnostic testing</p>
              </div>
            </div>
          </div>
          
          {/* Central Statistics Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="stats-card">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">13+</div>
                  <div className="text-sm text-muted-foreground font-medium">Animal Species</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1st</div>
                  <div className="text-sm text-muted-foreground font-medium">In North Bengal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Contact Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl border border-border shadow-lg">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
            <p className="text-muted-foreground">081589 33766</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-border shadow-lg">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground">Nabin Sen Rd, Siliguri</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-border shadow-lg">
            <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Same Day</h3>
            <p className="text-muted-foreground">Report Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;