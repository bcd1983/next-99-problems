import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const DashboardIcon = () => (
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
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const UsersIcon = () => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SettingsIcon = () => (
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
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-[250px] border rounded-lg">
      <Sidebar>
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
        </div>
        <div className="p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <DashboardIcon />
            <span className="ml-2">Dashboard</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <UsersIcon />
            <span className="ml-2">Users</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <SettingsIcon />
            <span className="ml-2">Settings</span>
          </Button>
        </div>
      </Sidebar>
    </div>
  ),
};

export const WithSubItems: Story = {
  render: () => (
    <div className="h-[400px] w-[250px] border rounded-lg">
      <Sidebar>
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
        </div>
        <div className="p-4 space-y-2">
          <div>
            <Button variant="ghost" className="w-full justify-start">
              <DashboardIcon />
              <span className="ml-2">Dashboard</span>
            </Button>
            <div className="ml-6 mt-2 space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Overview
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Analytics
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Reports
              </Button>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start">
            <UsersIcon />
            <span className="ml-2">Users</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <SettingsIcon />
            <span className="ml-2">Settings</span>
          </Button>
        </div>
      </Sidebar>
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <div className="h-[400px] w-[250px] border rounded-lg">
      <Sidebar>
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
        </div>
        <div className="flex-1 p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <DashboardIcon />
            <span className="ml-2">Dashboard</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <UsersIcon />
            <span className="ml-2">Users</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <SettingsIcon />
            <span className="ml-2">Settings</span>
          </Button>
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-muted" />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  ),
}; 