
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Founder from '@/components/Founder';
import Programs from '@/components/Programs';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Affiliations from '@/components/Affiliations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-sans min-h-screen bg-black">
      <NavBar />
      <Hero />
      <About />
      <Founder />
      <Programs />
      <Gallery />
      <FAQ />
      <Contact />
      <Affiliations />
      <Footer />
    </div>
  );
};

export default Index;
