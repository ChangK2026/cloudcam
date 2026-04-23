import Header      from '@/components/Header';
import Hero        from '@/components/Hero';
import TrustBar    from '@/components/TrustBar';
import Features    from '@/components/Features';
import Benefits    from '@/components/Benefits';
import Stats       from '@/components/Stats';
import Solutions   from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import CTABanner   from '@/components/CTABanner';
import Contact     from '@/components/Contact';
import Footer      from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Benefits />
        <Stats />
        <Solutions />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
