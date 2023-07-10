import { Meta, StoryObj } from '@storybook/react';
import ImageComponent from './image';

const meta: Meta<typeof ImageComponent> = {
    title: 'Design System/Atoms/Image',
    component: ImageComponent
  };

export default meta;
type Story = StoryObj<typeof ImageComponent>;

export const Default: Story = {
    args: {
        path: 'https://picsum.photos/200/300'
    },
};

export const WithHeightAndWidth: Story = {
    args: {
        path: 'https://picsum.photos/200/300',
        width: '200px',
        height: '200px'
    },
}

export const Offset: Story = {
    args: {
        path: 'https://picsum.photos/200/300',
        width: '200px',
        height: '200px',
        offset: '75px'
    },
}