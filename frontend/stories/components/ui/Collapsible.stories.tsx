import type { Meta, StoryObj } from '@storybook/react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span>Toggle with icon</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          <p>Content that can be collapsed and expanded.</p>
          <p className="mt-2 text-muted-foreground">
            Click the button above to toggle.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const Notifications: Story = {
  render: () => (
    <Collapsible className="w-[350px]">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Notifications
          <span className="ml-2 text-muted-foreground">(3)</span>
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="px-4 py-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          You have a new message!
        </div>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="px-4">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Your subscription is expiring soon.
          </div>
        </div>
        <div className="px-4">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Welcome to the platform!
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}; 