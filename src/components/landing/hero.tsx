import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-theme(spacing.14))] min-h-[500px] w-full flex items-center justify-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Modern laptop on a desk"
        fill
        className="object-cover"
        priority
        data-ai-hint="modern laptop"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-headline animate-fade-in-down">
          Power Your Productivity with the Latest Laptops
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Explore top brands, unbeatable prices, and expert support.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transform hover:scale-105 transition-transform animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link href="#products">Shop Now</Link>
        </Button>
      </div>
    </section>
  );
}
