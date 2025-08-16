import { ProductCard } from './product-card';

const products = [
  {
    name: 'ProBook X360',
    // price: '$1,299',
    features: 'Intel i7 | 16GB RAM | 512GB SSD',
    imageSrc: '/img-1.jpeg',
    dataAiHint: 'laptop sleek'
  },
  {
    name: 'Zenith 15',
    // price: '$999',
    features: 'AMD Ryzen 5 | 8GB RAM | 256GB SSD',
    imageSrc: '/img-2.jpeg',
    dataAiHint: 'laptop professional'
  },
  {
    name: 'AirLite 13',
    // price: '$1,499',
    features: 'Apple M2 | 16GB RAM | 512GB SSD',
    imageSrc: '/img-5.jpeg',
    dataAiHint: 'laptop minimalist'
  },
];

export function ProductPreview() {
  return (
    <section id="products" className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Featured Laptops</h2>
          <p className="text-lg text-muted-foreground mt-2">Check out our most popular models</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
