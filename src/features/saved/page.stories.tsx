import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import Saved from './page';

const meta: Meta<typeof Saved> = {
  title: 'Design System/Pages/SavedPage',
  component: Saved,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/home']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Saved>;

export const SavedPage: Story = {
  render: () => <Saved />,
};