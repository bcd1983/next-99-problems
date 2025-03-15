import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="w-[150px] shrink-0 rounded-md border p-4"
          >
            <div className="font-semibold">Item {i + 1}</div>
            <div className="text-sm text-muted-foreground">
              Description for item {i + 1}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithContent: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-lg font-bold">Introduction</h4>
        <p className="text-sm text-muted-foreground">
          The ScrollArea component is a custom scrollable container that provides a
          consistent cross-browser scrolling experience with custom scrollbars that
          match your theme.
        </p>
        <h4 className="text-lg font-bold">Features</h4>
        <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
          <li>Custom scrollbar styling</li>
          <li>Cross-browser compatibility</li>
          <li>Smooth scrolling behavior</li>
          <li>Responsive design support</li>
          <li>Keyboard navigation</li>
          <li>Touch device support</li>
        </ul>
        <h4 className="text-lg font-bold">Implementation</h4>
        <p className="text-sm text-muted-foreground">
          The component is built on top of Radix UI&apos;s ScrollArea primitive,
          providing a solid foundation for scrollable content areas in your
          application.
        </p>
        <h4 className="text-lg font-bold">Usage</h4>
        <p className="text-sm text-muted-foreground">
          Simply wrap your content with the ScrollArea component and specify the
          desired dimensions. The component will automatically handle the scrolling
          behavior and display appropriate scrollbars when needed.
        </p>
        <h4 className="text-lg font-bold">Customization</h4>
        <p className="text-sm text-muted-foreground">
          The scrollbar appearance can be customized through CSS variables and
          Tailwind CSS classes to match your application&apos;s design system.
        </p>
      </div>
    </ScrollArea>
  ),
}; 