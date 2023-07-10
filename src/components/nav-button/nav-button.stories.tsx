import { Meta, StoryObj } from "@storybook/react";
import NavButton from "./nav-button";
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof NavButton> = {
  title: 'Design System/Atoms/NavButton',
  component: NavButton,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/home']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavButton>;

export const Default: Story = {
  render: () => <NavButton to="/">Home</NavButton>,
};

export const CurrentPage: Story = {
  render: () => <NavButton to="/iframe.html">Home</NavButton>,
};
