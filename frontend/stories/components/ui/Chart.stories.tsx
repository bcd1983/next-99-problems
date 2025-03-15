import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const meta: Meta<typeof Chart> = {
  title: 'Components/UI/Chart',
  component: Chart,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chart>;

export const LineChart: Story = {
  render: () => (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Revenue Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart
          type="line"
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Revenue',
                data: [3000, 4500, 4000, 5500, 5000, 6500],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </CardContent>
    </Card>
  ),
};

export const BarChart: Story = {
  render: () => (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Monthly Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart
          type="bar"
          data={{
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
              {
                label: '2023',
                data: [12000, 15000, 18000, 21000],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
              },
              {
                label: '2024',
                data: [14000, 17000, 20000, 24000],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </CardContent>
    </Card>
  ),
};

export const DoughnutChart: Story = {
  render: () => (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Revenue by Product</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart
          type="doughnut"
          data={{
            labels: ['Electronics', 'Clothing', 'Books', 'Food'],
            datasets: [
              {
                data: [35, 25, 20, 20],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'right' as const,
              },
            },
          }}
        />
      </CardContent>
    </Card>
  ),
}; 