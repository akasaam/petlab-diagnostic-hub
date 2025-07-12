import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-8">Contact Us</h1>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;