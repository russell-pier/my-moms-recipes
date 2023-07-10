import { createSlice } from "@reduxjs/toolkit";
import { Recipe } from "../models/recipe.model";

interface RecipesState {
  recipes: Recipe[];
}

const initialState: RecipesState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    saveRecipe: (state, action) => {
      const recipe = state.recipes.find(
        (recipe) => recipe.id === action.payload
      );
      if (recipe) {
        recipe.saved = !recipe.saved;
      }
    },
  },
});

export const { setRecipes, saveRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
