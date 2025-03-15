import type { Meta, StoryObj } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const meta: Meta<typeof Carousel> = {
  title: 'Components/UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const ProductCarousel: Story = {
  render: () => (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {[
          {
            title: "MacBook Pro",
            price: "$1,299",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481"
          },
          {
            title: "iPhone 15 Pro",
            price: "$999",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1692845702708"
          },
          {
            title: "iPad Air",
            price: "$599",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1645065732688"
          }
        ].map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-muted-foreground">{product.price}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const ImageGallery: Story = {
  render: () => (
    <Carousel className="w-full max-w-3xl">
      <CarouselContent>
        {[
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80",
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
          "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80"
        ].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="p-0">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}; 