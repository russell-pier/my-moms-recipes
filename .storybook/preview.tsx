import type { Preview } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import React from "react";
import '../src/index.css';
import '../src/App.css';
import { saveRecipe, setRecipes } from '../src/redux/recipes.slice';
import recipes from "../src/api/all-recipes.json";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Design System', ['Atoms', 'Molecules', 'Organisms', 'Pages']],
      },
    },
  },
};

export const decorators = [
  (Story) => {

    store.dispatch(setRecipes(recipes));
    store.dispatch(saveRecipe(recipes[1].id));

    return (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  },
];

export default preview;
