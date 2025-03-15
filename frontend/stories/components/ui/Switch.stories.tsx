import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Switch> = {
  title: 'Components/UI/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => <Switch />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled" className="text-muted-foreground">
        Disabled
      </Label>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="grid gap-1.5">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" />
        <Label htmlFor="notifications">Enable notifications</Label>
      </div>
      <p className="text-sm text-muted-foreground pl-[36px]">
        You'll be notified when something important happens.
      </p>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="flex items-center space-x-2">
        <Switch id="email" />
        <Label htmlFor="email">Email notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="sms" defaultChecked />
        <Label htmlFor="sms">SMS notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="push" />
        <Label htmlFor="push">Push notifications</Label>
      </div>
    </div>
  ),
}; 