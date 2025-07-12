import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-8">About PETLAB</h1>
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;