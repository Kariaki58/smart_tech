import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type ProductCardProps = {
  name: string;
  price: string;
  features: string;
  imageSrc: string;
  dataAiHint: string;
};

export function ProductCard({ name, price, features, imageSrc, dataAiHint }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 ease-in-out flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
         <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            data-ai-hint={dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-bold text-primary mb-2">{name}</CardTitle>
        <p className="text-2xl font-semibold text-accent mb-2">{price}</p>
        <p className="text-sm text-muted-foreground">{features}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90">View Details</Button>
      </CardFooter>
    </Card>
  );
}
