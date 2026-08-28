import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Projects />
        <Research />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
