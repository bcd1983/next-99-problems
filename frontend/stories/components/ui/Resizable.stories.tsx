import type { Meta, StoryObj } from '@storybook/react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Components/UI/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[400px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Footer</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Complex: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[400px] max-w-4xl rounded-lg border"
    >
      <ResizablePanel defaultSize={20} minSize={20}>
        <div className="flex h-full flex-col">
          <div className="flex h-12 items-center border-b px-4 font-semibold">
            Navigation
          </div>
          <div className="flex-1 p-4">
            <div className="space-y-2">
              <div className="rounded bg-muted p-2">Item 1</div>
              <div className="rounded bg-muted p-2">Item 2</div>
              <div className="rounded bg-muted p-2">Item 3</div>
            </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full flex-col">
              <div className="flex h-12 items-center border-b px-4 font-semibold">
                Main Content
              </div>
              <div className="flex-1 p-4">
                <div className="rounded-lg border-2 border-dashed h-full flex items-center justify-center">
                  Content Area
                </div>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full flex-col">
              <div className="flex h-12 items-center border-b px-4 font-semibold">
                Console
              </div>
              <div className="flex-1 p-4">
                <div className="font-mono text-sm">
                  {'>'} Hello, world!
                </div>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full flex-col">
          <div className="flex h-12 items-center border-b px-4 font-semibold">
            Properties
          </div>
          <div className="flex-1 p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border px-3 py-2"
                  placeholder="Enter name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Type</label>
                <select className="w-full rounded-md border px-3 py-2">
                  <option>Type 1</option>
                  <option>Type 2</option>
                  <option>Type 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}; 