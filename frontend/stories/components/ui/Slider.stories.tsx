import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/ui/slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/UI/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <Slider
      defaultValue={[33]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="w-[60%] space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Volume</label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
      />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-[60%] space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Price Range</label>
        <span className="text-sm text-muted-foreground">$20 - $60</span>
      </div>
      <Slider
        defaultValue={[20, 60]}
        max={100}
        step={1}
      />
    </div>
  ),
};

export const WithSteps: Story = {
  render: () => (
    <div className="w-[60%] space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Size</label>
        <span className="text-sm text-muted-foreground">Medium</span>
      </div>
      <Slider
        defaultValue={[2]}
        max={3}
        min={0}
        step={1}
        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Small</span>
        <span>Medium</span>
        <span>Large</span>
        <span>X-Large</span>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[60%] space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Volume (Disabled)</label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider
        disabled
        defaultValue={[50]}
        max={100}
        step={1}
      />
    </div>
  ),
}; 