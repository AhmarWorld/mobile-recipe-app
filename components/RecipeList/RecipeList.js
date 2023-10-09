import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import getRecipeList from "../../lib/getRecipeList";
import Animated, { SlideInDown } from "react-native-reanimated";
import RecipeCard from "../RecipeCard/RecipeCard";
import getInputRecipeList from "../../lib/getInputRecipeList";

export default function RecipeList({ activeCategory, inputValue }) {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    if (inputValue.trim() !== "") {
      (async () => {
        const data = await getInputRecipeList(inputValue);
        setRecipeList(data);
      })();
    }
  }, [inputValue]);

  useEffect(() => {
    if (activeCategory.trim() !== "") {
      (async () => {
        const data = await getRecipeList(activeCategory);
        setRecipeList(data);
      })();
    }
  }, [activeCategory]);

  if (activeCategory.trim() === "") {
    return <Text>Category has not chosen</Text>;
  }

  if (recipeList.length === 0) {
    return <ActivityIndicator size={"large"} />;
  }

  if (recipeList.length > 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Recipes</Text>
        <Animated.FlatList
          entering={SlideInDown.delay(2500)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={styles.recipeList}
          data={recipeList}
          renderItem={({ item }) => {
            return (
              <RecipeCard
                id={item.idMeal}
                thumbnail={item.strMealThumb}
                name={item.strMeal}
              />
            );
          }}
          keyExtractor={(item) => item.idMeal}
        ></Animated.FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: "500",
  },
  recipeList: {
    width: "100%",
    marginTop: 10,
  },
});
