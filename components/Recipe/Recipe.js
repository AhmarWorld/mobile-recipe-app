import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const Recipe = ({ recipe, onPressCard }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={onPressCard}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.recipeImage} />
      <Text numberOfLines={1} style={styles.text}>
        {recipe.strMeal}
      </Text>
    </TouchableOpacity>
  );
};
export default Recipe;
const styles = StyleSheet.create({
  container: {
    maxWidth: "48%",
    flex: 1,
    gap: 10,
  },
  recipeImage: {
    height: 250,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
