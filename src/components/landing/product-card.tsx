import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

type ProductCardProps = {
  name: string;
  features: string;
  imageSrc: string;
  dataAiHint: string;
};

export function ProductCard({ name, features, imageSrc, dataAiHint }: ProductCardProps) {
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
        <p className="text-sm text-muted-foreground">{features}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href="https://wa.me/+2347074212990" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Buy on WhatsApp
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
