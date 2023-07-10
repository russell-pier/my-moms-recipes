import { Meta, StoryObj } from '@storybook/react';
import Header from './header';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Header> = {
    title: 'Design System/Organisms/Header',
    component: Header,
    decorators: [
      (Story) => (
        <MemoryRouter initialEntries={['/home']}>
          <Story />
        </MemoryRouter>
      ),
    ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Home: Story = {
    render: () => <Header title="My Mom's Recipes" />,
};

export const Search: Story = {
    render: () => <Header title="Search" />,
};

export const Saved: Story = {
    render: () => <Header title="Saved" />,
};