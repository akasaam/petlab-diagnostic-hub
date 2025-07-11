import { Award, Users, Clock, MapPin, Heart, Star, Sparkles } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Government Registered",
      description: "First ever govt. registered veterinary diagnostic centre in North Bengal",
      color: "text-service-purple"
    },
    {
      icon: Users,
      title: "Expert Specialists", 
      description: "Dedicated team of veterinary specialists ensuring accurate diagnostics",
      color: "text-service-pink"
    },
    {
      icon: Clock,
      title: "Same Day Reports",
      description: "Quick turnaround time with same-day report delivery for most tests",
      color: "text-service-blue"
    },
    {
      icon: MapPin,
      title: "Home Collection",
      description: "Convenient home collection services for your pet's comfort",
      color: "text-service-green"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Dog Owner",
      text: "PETLAB provided exceptional care for my golden retriever. The staff was professional and the results were delivered quickly.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen", 
      role: "Cat Owner",
      text: "The home collection service was incredibly convenient. My cat felt comfortable throughout the entire process.",
      avatar: "MC"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-16 left-10 w-5 h-5">
        <Star className="w-full h-full text-primary/20 animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-16 w-6 h-6">
        <Sparkles className="w-full h-full text-secondary/20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-semibold mb-8 border border-primary/20">
              <Heart className="w-5 h-5 mr-2 text-secondary animate-pulse" />
              About PETLAB
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
              North Bengal's Premier
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pet Care Center
              </span>
            </h2>
            
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              PETLAB is the first ever government registered veterinary diagnostic centre for pets and animals 
              in the entire North Bengal region. Located in Siliguri, we specialize in comprehensive laboratory 
              tests and imaging solutions for our beloved animals.
            </p>
            
            <p className="text-neutral-600 mb-10 leading-relaxed">
              We offer complete diagnostic solutions for more than 13 species including dogs, cats, cows, horses, 
              rabbits, monkeys, pigs, buffalos, camels, sheep, goats, rats, mice, and more. Our mission is to 
              diminish the lack of proper veterinary treatment in North Bengal by conducting accurate tests 
              through our specialized team.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2 text-lg group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Decorative background for image area */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-primary/10">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Location & Hours</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">Address</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Nabin Sen Rd, near Animal Health Veterinary Hospital,<br />
                      Ward 10, Janta Nagar, Siliguri, West Bengal 734001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-light to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">Operating Hours</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-2xl border border-primary/20">
                  <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                    <Heart className="w-5 h-5 text-primary mr-2" />
                    Species We Serve
                  </h4>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {["Dog", "Cat", "Cow", "Horse", "Rabbit", "Monkey", "Pig", "Buffalo", "Camel", "Sheep", "Goat", "Rat", "Mouse"].map((species) => (
                      <span key={species} className="px-3 py-1 bg-white text-primary rounded-full text-xs font-medium border border-primary/20">
                        {species}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            What Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Customers</span> Say About Us
          </h3>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Hear from pet owners who trust PETLAB with their beloved companions' health and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-gradient-to-br from-primary-light/50 to-secondary-light/50 p-8 rounded-3xl border border-primary/10 relative">
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-600 mb-3">{testimonial.role}</p>
                  <p className="text-neutral-700 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;