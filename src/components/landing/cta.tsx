import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="py-20 md:py-24 bg-primary">
      <div className="container text-center text-primary-foreground">
        <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">
          Ready to find your perfect laptop?
        </h2>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transform hover:scale-105 transition-transform">
          <Link href="#products">Explore Our Collection</Link>
        </Button>
      </div>
    </section>
  );
}
