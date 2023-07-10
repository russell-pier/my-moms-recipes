import { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta: Meta<typeof Input> = {
    title: 'Design System/Atoms/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Placeholder: Story = {
    args: {
        placeholder: 'Click to start typing ...',
        value: ''
    },
};

export const Filled: Story = {
    args: {
        placeholder: 'Click to start typing ...',
        value: 'tomato'
    },
};