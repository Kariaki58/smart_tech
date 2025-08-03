import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProductPreview } from '@/components/landing/product-preview';
import { WhyChooseUs } from '@/components/landing/why-choose-us';
import { Testimonials } from '@/components/landing/testimonials';
import { CallToAction } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductPreview />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
