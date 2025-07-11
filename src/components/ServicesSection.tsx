import { 
  Microscope, 
  Droplets, 
  TestTube, 
  Activity, 
  Shield, 
  Eye, 
  Bug, 
  Pill,
  Stethoscope,
  FileText
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Hematology",
      description: "Complete blood count, blood cell analysis, and coagulation studies for accurate diagnosis.",
      icon: Droplets,
      className: "hematology",
      tests: ["CBC", "Blood Smear", "Coagulation Tests"]
    },
    {
      title: "Biochemistry",
      description: "Comprehensive metabolic panels, organ function tests, and chemical analysis.",
      icon: TestTube,
      className: "biochemistry", 
      tests: ["Liver Function", "Kidney Function", "Electrolytes"]
    },
    {
      title: "Urine & Clinical Pathology",
      description: "Urinalysis, body fluid analysis, and clinical pathology investigations.",
      icon: Activity,
      className: "urine-clinical",
      tests: ["Urinalysis", "Body Fluids", "Clinical Chemistry"]
    },
    {
      title: "Kit Based Tests",
      description: "Rapid diagnostic tests for quick and accurate point-of-care testing.",
      icon: Shield,
      className: "kit-based",
      tests: ["Rapid Tests", "ELISA", "Immunoassays"]
    },
    {
      title: "Serology",
      description: "Antibody testing, disease screening, and immunological assessments.",
      icon: Shield,
      className: "serology",
      tests: ["Antibody Tests", "Disease Screening", "Immunity Check"]
    },
    {
      title: "Cytology & Histopathology",
      description: "Cellular examination, tissue analysis, and cancer screening services.",
      icon: Microscope,
      className: "cytology",
      tests: ["Cell Analysis", "Tissue Biopsy", "Cancer Screening"]
    },
    {
      title: "Microbiology",
      description: "Bacterial culture, sensitivity testing, and antimicrobial resistance analysis.",
      icon: Bug,
      className: "microbiology",
      tests: ["Culture", "Sensitivity", "Resistance Testing"]
    },
    {
      title: "Hormone Analysis",
      description: "Endocrine function testing, reproductive hormones, and metabolic assessments.",
      icon: Pill,
      className: "hormone",
      tests: ["Thyroid", "Reproductive", "Stress Hormones"]
    },
    {
      title: "X-Ray Imaging",
      description: "Digital radiography for bone, chest, and abdominal imaging with instant results.",
      icon: Eye,
      className: "xray",
      tests: ["Bone X-rays", "Chest Imaging", "Abdominal Scans"]
    },
    {
      title: "Ultrasonography (USG)",
      description: "Advanced ultrasound imaging for internal organ examination and pregnancy monitoring.",
      icon: Stethoscope,
      className: "pathology",
      tests: ["Organ Imaging", "Pregnancy Scan", "Heart Echo"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            Complete Diagnostic Solutions
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Our Specialized Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive veterinary diagnostic services for over 13 animal species including 
            dogs, cats, cows, horses, and more with same-day reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`service-icon ${service.className}`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-neutral-700 mb-2">Key Tests:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.tests.map((test) => (
                    <span 
                      key={test}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                    >
                      {test}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="mt-6 w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Download Complete Test List
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;