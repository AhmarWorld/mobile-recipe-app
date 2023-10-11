import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function RecipeCard({ id, name, thumbnail }) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("RecipeDetail", {
      recipeId: id,
    });
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
    flex: 1,
    height: 250,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginHorizontal: 10,
  },
  image: {
    width: 160,
    height: 230,
    borderRadius: 15,
  },
  text: {
    fontSize: 12,
    width: "100%",
    height: 12,
    textAlign: "center",
  },
});
