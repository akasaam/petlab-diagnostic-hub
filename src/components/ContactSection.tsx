import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white text-primary rounded-full text-sm font-medium mb-6">
            <Phone className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Contact PETLAB
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ready to schedule a diagnostic test for your pet? Contact us today for professional 
            veterinary diagnostic services with same-day reporting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-medium">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Book an Appointment</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Pet Owner Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Pet Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your pet's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Animal Species
                  </label>
                  <select className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select species</option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Cow</option>
                    <option>Horse</option>
                    <option>Rabbit</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Test Required
                </label>
                <select className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Select test type</option>
                  <option>Hematology</option>
                  <option>Biochemistry</option>
                  <option>Urine & Clinical Pathology</option>
                  <option>X-Ray</option>
                  <option>Ultrasonography</option>
                  <option>Complete Health Checkup</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Special Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Any special requirements or notes about your pet's condition..."
                ></textarea>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="home-collection"
                  className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                />
                <label htmlFor="home-collection" className="text-sm text-neutral-700">
                  I would like home collection service
                </label>
              </div>
              
              <button type="submit" className="w-full btn-primary">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-medium">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Phone</h3>
                  <p className="text-neutral-600">Call us for appointments</p>
                </div>
              </div>
              <p className="text-lg font-medium text-primary">081589 33766</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-medium">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary-light-green rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Address</h3>
                  <p className="text-neutral-600">Visit our diagnostic centre</p>
                </div>
              </div>
              <p className="text-neutral-700">
                Nabin Sen Rd, near Animal Health Veterinary Hospital,<br />
                Ward 10, Janta Nagar, Siliguri, West Bengal 734001
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-medium">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary-light-orange rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Operating Hours</h3>
                  <p className="text-neutral-600">We're here when you need us</p>
                </div>
              </div>
              <div className="space-y-1 text-neutral-700">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="bg-primary p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Emergency Services</h3>
              <p className="mb-4">
                For emergency diagnostic services, please call us directly. 
                We prioritize urgent cases and can arrange immediate testing when needed.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;