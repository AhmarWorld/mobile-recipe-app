import { createSlice } from "@reduxjs/toolkit";
import setFavoritesList from "../lib/setFavoritesList";
import getFavoritesList from "../lib/getFavoritesList";

const initialState = {
  favorites: getFavoritesList("favorites") || [],
  loaded: false,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { ...initialState },
  reducers: {
    addFavoriteRecipe(state, action) {
      if (!state.favorites.find((el) => el.idMeal === action.payload.idMeal)) {
        const newFavorites = [...state.favorites, action.payload];
        setFavoritesList("favorites", newFavorites);
        state.favorites = newFavorites;
      }
    },
    deleteFavoriteRecipe(state, action) {
      const newFavorites = state.favorites.filter(
        (el) => el.idMeal !== action.payload.idMeal
      );
      getFavoritesList("favorites", newFavorites);
      state.favorites = newFavorites;
    },
  },
});

export const { addFavoriteRecipe, deleteFavoriteRecipe } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
