import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const meta: Meta<typeof Toaster> = {
  title: 'Components/UI/Sonner',
  component: Toaster,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div className="space-x-2">
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  ),
};

export const WithSuccess: Story = {
  render: () => (
    <div className="space-x-2">
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Profile updated successfully', {
            description: 'Your changes have been saved.',
          })
        }
      >
        Success Toast
      </Button>
      <Toaster />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="space-x-2">
      <Button
        variant="outline"
        onClick={() =>
          toast.error('Error updating profile', {
            description: 'Please try again later.',
          })
        }
      >
        Error Toast
      </Button>
      <Toaster />
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="space-x-2">
      <Button
        variant="outline"
        onClick={() =>
          toast('File uploaded', {
            description: 'document.pdf has been uploaded.',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Toast with Action
      </Button>
      <Toaster />
    </div>
  ),
};

export const WithPromise: Story = {
  render: () => (
    <div className="space-x-2">
      <Button
        variant="outline"
        onClick={() => {
          toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
              loading: 'Loading...',
              success: 'Data loaded successfully',
              error: 'Error loading data',
            }
          );
        }}
      >
        Promise Toast
      </Button>
      <Toaster />
    </div>
  ),
}; 