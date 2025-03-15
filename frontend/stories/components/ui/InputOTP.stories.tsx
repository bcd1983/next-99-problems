import type { Meta, StoryObj } from '@storybook/react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const meta: Meta<typeof InputOTP> = {
  title: 'Components/UI/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="gap-2">
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <span className="text-2xl text-muted-foreground">-</span>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const Pattern: Story = {
  render: () => (
    <InputOTP maxLength={6} pattern="^[0-9]{6}$">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}; 