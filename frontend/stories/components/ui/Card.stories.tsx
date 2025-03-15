import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const meta: Meta<typeof Card> = {
  title: 'Components/UI/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

// Basic Card
export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

// Card with only Header and Content
export const Simple: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>A simple card with just content</p>
      </CardContent>
    </Card>
  ),
};

// Card with Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <Card className="w-[350px] bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle>Custom Styled Card</CardTitle>
        <CardDescription className="text-primary-foreground/80">
          This card has custom styling
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with custom background</p>
      </CardContent>
    </Card>
  ),
}; 