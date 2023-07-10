import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import Search from './page';

const meta: Meta<typeof Search> = {
  title: 'Design System/Pages/SearchPage',
  component: Search,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/home']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const SearchPage: Story = {
  render: () => <Search />,
};