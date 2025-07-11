import { Award, Users, Clock, MapPin } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Government Registered",
      description: "First ever govt. registered veterinary diagnostic centre in North Bengal"
    },
    {
      icon: Users,
      title: "Expert Specialists",
      description: "Dedicated team of veterinary specialists ensuring accurate diagnostics"
    },
    {
      icon: Clock,
      title: "Same Day Reports",
      description: "Quick turnaround time with same-day report delivery for most tests"
    },
    {
      icon: MapPin,
      title: "Home Collection",
      description: "Convenient home collection services for your pet's comfort"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-secondary-light-green text-secondary-green rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              About PETLAB
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
              North Bengal's Premier
              <span className="text-primary"> Veterinary</span>
              <br />
              Diagnostic Centre
            </h2>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              PETLAB is the first ever government registered veterinary diagnostic centre for pets and animals 
              in the entire North Bengal region. Located in Siliguri, we specialize in comprehensive laboratory 
              tests and imaging solutions for our beloved animals.
            </p>
            
            <p className="text-neutral-600 mb-8 leading-relaxed">
              We offer complete diagnostic solutions for more than 13 species including dogs, cats, cows, horses, 
              rabbits, monkeys, pigs, buffalos, camels, sheep, goats, rats, mice, and more. Our mission is to 
              diminish the lack of proper veterinary treatment in North Bengal by conducting accurate tests 
              through our specialized team.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-neutral-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Location</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">Address</p>
                  <p className="text-neutral-600">
                    Nabin Sen Rd, near Animal Health Veterinary Hospital,<br />
                    Ward 10, Janta Nagar, Siliguri, West Bengal 734001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">Operating Hours</p>
                  <p className="text-neutral-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-medium text-neutral-900 mb-2">Species We Serve</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  {["Dog", "Cat", "Cow", "Horse", "Rabbit", "Monkey", "Pig", "Buffalo", "Camel", "Sheep", "Goat", "Rat", "Mouse"].map((species) => (
                    <span key={species} className="px-2 py-1 bg-primary-light text-primary rounded-full text-xs">
                      {species}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;