import Header       from '@/components/Header';
import ScrollReveal from '@/components/ScrollReveal';
import Hero         from '@/components/Hero';
import Features    from '@/components/Features';
import Benefits    from '@/components/Benefits';
import About       from '@/components/About';
import Solutions   from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import Gallery     from '@/components/Gallery';
import CameraViews from '@/components/CameraViews';
import CTABanner   from '@/components/CTABanner';
import Contact     from '@/components/Contact';
import Footer      from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Features />
        <Testimonials />
        <CameraViews />
        <Gallery />
        <Solutions />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
