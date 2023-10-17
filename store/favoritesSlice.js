import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  loaded: false,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { ...initialState },
  reducers: {
    addFavoriteRecipe(state, action) {
      state.favorites = state.favorites.push(action.payload);
    },
    deleteFavoriteRecipe(state, action) {
      state.favorites = state.favorites.filter(
        (el) => el.idMeal !== action.payload.idMeal
      );
    },
  },
});

export const { addFavoriteRecipe, deleteFavoriteRecipe } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
