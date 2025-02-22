import React from "react";
import HomePage from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./components/styles.css"

function App() {
  return (
    <div className="font-nunito bg-gray-50">
      <HomePage />
      <About />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
