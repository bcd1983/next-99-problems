import type { Meta, StoryObj } from '@storybook/react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithCustomTrigger: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="cursor-pointer p-2 rounded-md hover:bg-muted inline-block">
          Hover over me
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Custom Trigger Example</h4>
          <p className="text-sm">
            This hover card is triggered by a custom element.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">MacBook Pro</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481"
              alt="MacBook Pro"
              className="h-16 w-16 rounded-md object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold">MacBook Pro</h4>
              <p className="text-sm text-muted-foreground">
                Starting at $1,299
              </p>
            </div>
          </div>
          <p className="text-sm">
            The most powerful MacBook Pro ever is here. With the blazing-fast M1
            Pro or M1 Max chip — the first Apple silicon designed for pros.
          </p>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Learn more
            </Button>
            <Button size="sm">Buy now</Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}; 