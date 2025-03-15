import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Progress> = {
  title: 'Components/UI/Progress',
  component: Progress,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => <Progress value={33} />,
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-[60%]" />;
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="relative w-[60%]">
      <Progress value={80} className="h-2" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold">
        80%
      </span>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={50} className="h-2 w-[60%]" />
      <Progress
        value={30}
        className="h-2 w-[60%] [&>div]:bg-red-500"
      />
      <Progress
        value={90}
        className="h-2 w-[60%] [&>div]:bg-green-500"
      />
    </div>
  ),
}; 