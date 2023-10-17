import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Recipe from "../Recipe/Recipe";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";

import { fetchRecipes } from "../../store/recipesSlice";

const Recipes = ({ inputText }) => {
  const [showingRecipes, setShowingRecipes] = useState([]);
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipesLoaded = useSelector((state) => state.recipes.loaded);
  const dispatch = useDispatch();

  const [pageRendered, setPageRendered] = useState(0);

  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );

  useEffect(() => {
    setPageRendered(pageRendered + 1);
  }, []);

  useEffect(() => {
    setShowingRecipes(recipes);
  }, [recipes]);

  useEffect(() => {
    if (activeCategory && pageRendered > 0 && recipesLoaded) {
      dispatch(fetchRecipes(activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    if (inputText.trim() !== "" && recipes.length > 0) {
      const newShowingRecipes = recipes.filter((recipe) => {
        return recipe.strMeal.toLowerCase().includes(inputText.toLowerCase());
      });
      setShowingRecipes(newShowingRecipes);
    }
  }, [inputText]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipes</Text>
      {recipesLoaded ? (
        <FlatList
          data={showingRecipes}
          numColumns={2}
          renderItem={({ item }) => {
            return <Recipe recipe={item} />;
          }}
          keyExtractor={(item) => item.idMeal}
          style={styles.recipeList}
          columnWrapperStyle={styles.recipeListColumnWrapper}
        />
      ) : (
        <ActivityIndicator size={"large"} />
      )}
    </View>
  );
};
export default Recipes;
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    gap: 20,
  },
  heading: {
    fontWeight: "600",
    fontSize: 20,
  },
  recipeList: {
    gap: 18,
  },
  recipeListColumnWrapper: {
    justifyContent: "space-between",
    gap: 12,
  },
});
