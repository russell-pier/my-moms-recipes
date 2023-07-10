import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import Home from './page';

const meta: Meta<typeof Home> = {
  title: 'Design System/Pages/HomePage',
  component: Home,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/home']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Home>;

export const HomePage: Story = {
  render: () => <Home />,
};