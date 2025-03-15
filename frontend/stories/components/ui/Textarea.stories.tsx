import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Textarea> = {
  title: 'Components/UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => <Textarea placeholder="Type your message here." />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Textarea
      placeholder="You cannot edit this textarea."
      disabled
    />
  ),
};

export const WithRows: Story = {
  render: () => (
    <Textarea
      placeholder="This textarea has 10 rows."
      rows={10}
    />
  ),
};

export const WithMaxLength: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-max">Your message (max 200 characters)</Label>
      <Textarea
        id="message-max"
        placeholder="Type your message here."
        maxLength={200}
      />
    </div>
  ),
}; 