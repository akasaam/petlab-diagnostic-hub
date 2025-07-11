import { 
  Heart, 
  Stethoscope, 
  TestTube, 
  Activity, 
  Shield, 
  Eye, 
  Bug, 
  Pill,
  Camera,
  FileText,
  Star,
  Sparkles
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Dog Pet Visit",
      description: "Complete health checkups and diagnostic services for dogs of all breeds and ages.",
      icon: Heart,
      className: "hematology",
      price: "$49 USD",
      features: ["Health Checkup", "Vaccination", "Grooming"]
    },
    {
      title: "Cat Pet Visit", 
      description: "Specialized feline care with comprehensive diagnostic and wellness services.",
      icon: Stethoscope,
      className: "biochemistry",
      price: "$39 USD", 
      features: ["Feline Care", "Health Screening", "Dental Care"]
    },
    {
      title: "Pet Bath",
      description: "Professional grooming and bathing services for your beloved pets.",
      icon: Sparkles,
      className: "urine-clinical",
      price: "$25 USD",
      features: ["Professional Bath", "Nail Trimming", "Ear Cleaning"]
    },
    {
      title: "Pet Grooming",
      description: "Complete grooming services including styling, nail care, and hygiene maintenance.",
      icon: Star,
      className: "kit-based",
      price: "$35 USD",
      features: ["Full Grooming", "Styling", "Health Check"]
    },
    {
      title: "Laboratory Tests",
      description: "Advanced diagnostic testing including blood work, urine analysis, and more.",
      icon: TestTube,
      className: "serology",
      price: "Varies",
      features: ["Blood Tests", "Urine Analysis", "Pathology"]
    },
    {
      title: "X-Ray Imaging",
      description: "Digital radiography for accurate diagnosis of internal conditions.",
      icon: Camera,
      className: "cytology",
      price: "Varies", 
      features: ["Digital X-Ray", "Bone Imaging", "Internal Scans"]
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency veterinary services for urgent pet health situations.",
      icon: Activity,
      className: "microbiology",
      price: "Call",
      features: ["24/7 Service", "Emergency Response", "Critical Care"]
    },
    {
      title: "Wellness Programs",
      description: "Preventive care programs to keep your pets healthy year-round.",
      icon: Shield,
      className: "hormone",
      price: "Varies",
      features: ["Preventive Care", "Wellness Plans", "Health Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-6 h-6">
        <Star className="w-full h-full text-primary/30 animate-pulse" />
      </div>
      <div className="absolute bottom-32 left-16 w-5 h-5">
        <Sparkles className="w-full h-full text-secondary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-semibold mb-8 border border-primary/20">
            <FileText className="w-5 h-5 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-8">
            Comprehensive Pet Care
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Professional veterinary diagnostic services for over 13 animal species including 
            dogs, cats, cows, horses, and more with same-day reporting and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`service-icon ${service.className} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-10 h-10" />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Heart className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-neutral-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-200">
                <span className="text-lg font-bold text-primary">{service.price}</span>
                <button className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-neutral-600 mb-8 text-lg">
            Looking for something specific? We offer specialized diagnostics for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Book Consultation</span>
            </button>
            <button className="btn-secondary">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;