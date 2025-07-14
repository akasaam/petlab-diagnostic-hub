import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import { Stethoscope, Heart, Award } from "lucide-react";
import vetServices from "../assets/vet-services.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        {/* Hero Section */}
        <div className="bg-white py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <Stethoscope className="w-5 h-5 mr-2" />
              Professional Veterinary Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive diagnostic and care services for your beloved pets across 13+ animal species.
            </p>
          </div>
        </div>
        
        {/* Services Content */}
        <div className="container mx-auto px-4">
          <ServicesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;