import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
