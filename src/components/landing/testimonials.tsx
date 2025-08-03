import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah L.',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman smiling',
    comment: 'The customer service was exceptional, and I found the perfect laptop for my studies at a great price. Highly recommended!',
  },
  {
    name: 'Mike D.',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'man professional',
    comment: 'Smart Technology has an amazing selection. The nationwide delivery was super fast, and my new ProBook is a powerhouse.',
  },
  {
    name: 'Jessica P.',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman designer',
    comment: 'I love my new AirLite! The team helped me choose the right model for my design work. A five-star experience from start to finish.',
  },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground mt-2">Real stories from satisfied clients</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground italic border-l-4 border-accent pl-4">"{testimonial.comment}"</blockquote>
              </CardContent>
              <div className="p-6 pt-0 flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
