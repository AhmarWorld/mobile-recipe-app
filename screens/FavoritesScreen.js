import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { useSelector } from "react-redux";
import Recipe from "../components/Recipe/Recipe";

export default function FavoritesScreen() {
  const favorites = useSelector((state) => state.favorites.favorites);
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<Text style={styles.title}>Favorites</Text>}
        data={favorites}
        numColumns={2}
        renderItem={({ item }) => {
          return <Recipe recipe={item} />;
        }}
        keyExtractor={(item) => item.idMeal}
        style={styles.container}
        columnWrapperStyle={styles.recipeListColumnWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
  },
  recipeListColumnWrapper: {
    justifyContent: "space-between",
    gap: 12,
  },
});
