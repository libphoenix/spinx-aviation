import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import About from "@/components/About";
import GlobalOperations from "@/components/GlobalOperations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Landing />
      <Hero />
      <GlobalOperations />
      <Services />
      <Fleet />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
