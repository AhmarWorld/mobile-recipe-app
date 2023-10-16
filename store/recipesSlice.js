import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecipesByCategory } from "../lib/getRecipesByCategory";

const initialState = {
  recipes: [],
  loaded: false,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (activeCategory) => {
    const res = await getRecipesByCategory(activeCategory);
    return res;
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: { ...initialState },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loaded = false;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload.meals;
        state.loaded = true;
      });
  },
});

export default recipesSlice.reducer;
