import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

export function CallToAction() {
  return (
    <section className="py-20 md:py-24 bg-primary">
      <div className="container text-center text-primary-foreground">
        <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">
          Ready to find your perfect laptop?
        </h2>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transform hover:scale-105 transition-transform">
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="mr-2 h-6 w-6" />
            Contact on WhatsApp to buy
          </Link>
        </Button>
      </div>
    </section>
  );
}
