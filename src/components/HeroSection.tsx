import { ArrowRight, Heart, Star, Sparkles } from "lucide-react";
import heroImage from "../assets/petcare-hero-connected.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-light via-white to-secondary-light py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-4 h-4">
        <Star className="w-full h-full text-primary animate-pulse" />
      </div>
      <div className="absolute top-32 right-20 w-6 h-6">
        <Sparkles className="w-full h-full text-secondary animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-1/4 w-5 h-5">
        <Star className="w-full h-full text-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-40 right-1/3 w-4 h-4">
        <Sparkles className="w-full h-full text-secondary/60 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-semibold mb-8 border border-primary/20">
            <Heart className="w-5 h-5 mr-2 text-secondary animate-pulse" />
            North Bengal's First Govt. Registered Vet Diagnostic Centre
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
            Find Your Best
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Pet Care Center
            </span>
          </h1>
          
          <p className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            PETLAB specializes in comprehensive laboratory tests and imaging solutions for pets and animals. 
            We offer complete diagnostic solutions for over 13 species with same-day report delivery and 
            home collection facilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="btn-primary flex items-center justify-center space-x-3 text-lg">
              <Heart className="w-6 h-6" />
              <span>Online Appointment</span>
            </button>
            <button className="btn-secondary text-lg">
              Browse Products
            </button>
          </div>
        </div>
        
        {/* Pet Images with Connecting Lines - Inspired by reference */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Top Left Pet */}
            <div className="pet-frame bg-gradient-to-br from-primary-light to-primary/5 p-6 lg:col-start-1 lg:row-start-1">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Heart className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            {/* Top Right Pet */}
            <div className="pet-frame bg-gradient-to-br from-secondary-light to-secondary/5 p-6 lg:col-start-4 lg:row-start-1">
              <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center">
                <Star className="w-16 h-16 text-secondary" />
              </div>
            </div>
            
            {/* Bottom Left Pet */}
            <div className="pet-frame bg-gradient-to-br from-accent-green-light to-accent-green/5 p-6 lg:col-start-1 lg:row-start-2">
              <div className="w-full h-48 bg-gradient-to-br from-accent-green/20 to-primary/20 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-accent-green" />
              </div>
            </div>
            
            {/* Bottom Right Pet */}
            <div className="pet-frame bg-gradient-to-br from-accent-orange-light to-accent-orange/5 p-6 lg:col-start-4 lg:row-start-2">
              <div className="w-full h-48 bg-gradient-to-br from-accent-orange/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Heart className="w-16 h-16 text-accent-orange" />
              </div>
            </div>
          </div>
          
          {/* Central Statistics */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-primary/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">13+</div>
                  <div className="text-sm text-neutral-600 font-medium">Animal Species</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">1st</div>
                  <div className="text-sm text-neutral-600 font-medium">In North Bengal</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connecting Lines */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {/* Horizontal lines */}
            <div className="absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30"></div>
            <div className="absolute top-3/4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent-green/30 via-accent-orange/30 to-accent-green/30"></div>
            
            {/* Vertical lines */}
            <div className="absolute left-1/4 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-primary/30 via-accent-green/30 to-primary/30"></div>
            <div className="absolute right-1/4 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-secondary/30 via-accent-orange/30 to-secondary/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;