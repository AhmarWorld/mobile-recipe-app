import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function RecipeCard({ navigation, id, name, thumbnail }) {
  const onPress = () => {
    console.log(id);
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.recipeCard}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  recipeCard: {
    width: 140,
    height: 220,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginHorizontal: 20,
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 15,
  },
  text: {
    fontSize: 12,
    width: "100%",
    height: 12,
    textAlign: "center",
  },
});
