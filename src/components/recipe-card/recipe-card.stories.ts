import { Meta, StoryObj } from "@storybook/react";
import RecipeCard from "./recipe-card";

const meta: Meta<typeof RecipeCard> = {
  title: "Design System/Molecules/RecipeCard",
  component: RecipeCard,
};

export default meta;
type Story = StoryObj<typeof RecipeCard>;

export const Default: Story = {
  args: {
    recipe: {
      id: 2,
      name: "Creamy Tomato Basil Pasta",
      description:
        "A comforting and flavorful pasta dish made with fresh tomatoes, basil, and creamy sauce.",
      image:
        "https://images.pexels.com/photos/7837671/pexels-photo-7837671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.2,
      saved: false,
    },
  },
};

export const Saved: Story = {
  args: {
    recipe: {
      id: 2,
      name: "Creamy Tomato Basil Pasta",
      description:
        "A comforting and flavorful pasta dish made with fresh tomatoes, basil, and creamy sauce.",
      image:
        "https://images.pexels.com/photos/7837671/pexels-photo-7837671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.2,
      saved: true,
    },
  },
};
