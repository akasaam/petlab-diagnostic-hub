import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "../assets/petlab-hero.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-light to-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-secondary-light-green text-secondary-green rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              North Bengal's First Govt. Registered Vet Diagnostic Centre
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Professional
              <span className="text-primary"> Veterinary</span>
              <br />
              Diagnostic Services
            </h1>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              PETLAB specializes in comprehensive laboratory tests and imaging solutions for pets and animals. 
              We offer complete diagnostic solutions for over 13 species with same-day report delivery and 
              home collection facilities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-green flex-shrink-0" />
                <span className="text-neutral-700">Same Day Reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-green flex-shrink-0" />
                <span className="text-neutral-700">Home Collection</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-green flex-shrink-0" />
                <span className="text-neutral-700">13+ Animal Species</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-green flex-shrink-0" />
                <span className="text-neutral-700">Expert Specialists</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Book Diagnostic Test</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                Download Test Reports
              </button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="PETLAB Veterinary Diagnostic Centre" 
                className="w-full h-auto rounded-2xl shadow-large"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-large">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">13+</div>
                  <div className="text-sm text-neutral-600">Animal Species</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-large">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-green mb-1">1st</div>
                  <div className="text-sm text-neutral-600">In North Bengal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;