import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';

const meta: Meta<typeof Input> = {
  title: 'Components/UI/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input type="text" placeholder="Enter text..." />,
};

export const Disabled: Story = {
  render: () => <Input type="text" placeholder="Disabled input" disabled />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const Password: Story = {
  render: () => <Input type="password" placeholder="Enter password..." />,
};

export const Search: Story = {
  render: () => (
    <div className="relative">
      <Input type="search" placeholder="Search..." className="pl-8" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  ),
}; 