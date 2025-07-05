import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import WhatsAppButton from "./WhatsAppButton";
import ContactForm from "./ContactForm";


export default function Homepage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <Header />
      <main className="pt-20 space-y-16">
        <Hero />
        <About />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <WhatsAppButton />
    </div>
  );
}
