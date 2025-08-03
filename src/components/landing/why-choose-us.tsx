import { ShieldCheck, Tag, Headset, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Trusted Brands',
    description: 'We only stock laptops from the world\'s most reputable and reliable brands.',
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    description: 'Get the best value for your money with our unbeatable prices and special offers.',
  },
  {
    icon: Headset,
    title: '24/7 Customer Support',
    description: 'Our expert team is always here to help you with any questions or issues.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast and secure delivery to your doorstep, anywhere in the country.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground mt-2">Your satisfaction is our priority</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-background shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-accent/10 text-accent">
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
