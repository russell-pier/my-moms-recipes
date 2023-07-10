import { Meta, StoryObj } from '@storybook/react';
import RecipeList from './recipe-list';
import recipes from "../../api/all-recipes.json"

const meta: Meta<typeof RecipeList> = {
    title: 'Design System/Organisms/RecipeList',
    component: RecipeList,
};

export default meta;
type Story = StoryObj<typeof RecipeList>;

export const Default: Story = {
    args: {
        recipes
    },
};