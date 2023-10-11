import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import IconBack from "react-native-vector-icons/MaterialIcons";
import IconLike from "react-native-vector-icons/Octicons";
import Icon from "react-native-vector-icons/AntDesign";
import Icone from "react-native-vector-icons/Ionicons";
import IconeR from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import getRecipeById from "../lib/getRecipeById";
import { ActivityIndicator } from "react-native";

const RecipeDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getRecipeById(route.params.recipeId);
      setRecipe(res);
    })();
  }, []);

  if (!recipe) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.imageBack} />
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.back}
          >
            <IconBack
              name="arrow-back-ios"
              size={30}
              color={"orange"}
              style={{
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsFavorite(!isFavorite);
            }}
            style={styles.back}
          >
            <IconLike
              name="heart-fill"
              size={30}
              color={isFavorite ? "orange" : "gray"}
              style={{ marginTop: 5, marginLeft: 1 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.recipeDetailBlockText}>
          <View style={styles.recipeDetailBlockTextIn}>
            <Text style={styles.DetailBlockTextOne}>{recipe.strMeal}</Text>
            <Text style={styles.DetailBlockText}>{recipe.strArea}</Text>
          </View>
          <View style={styles.coocking}>
            <View style={styles.coockingBlock}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 999,
                  backgroundColor: "white",
                }}
              >
                <Icon size={50} name="clockcircleo" />
              </View>
              <Text style={styles.coockingBlockText}>35</Text>
              <Text>Mins</Text>
            </View>
            <View style={styles.coockingBlock}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 999,
                  backgroundColor: "white",
                }}
              >
                <Icone size={50} name="people" />
              </View>
              <Text style={styles.coockingBlockText}>35</Text>
              <Text>Mins</Text>
            </View>
            <View style={styles.coockingBlock}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 999,
                  backgroundColor: "white",
                }}
              >
                <IconeR size={50} name="fire" />
              </View>
              <Text style={styles.coockingBlockText}>35</Text>
              <Text>Mins</Text>
            </View>
            <View style={styles.coockingBlock}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 999,
                  backgroundColor: "white",
                }}
              >
                <Octicons size={50} name="stack" />
              </View>
              <Text style={styles.coockingBlockText}>35</Text>
              <Text>Mins</Text>
            </View>
          </View>
        </View>
        <Text style={styles.ingredientsTitle}>Ingrediants</Text>
        <ScrollView style={styles.ingredientsList}>
          <View style={styles.ingrediants}>
            {[...Array(20).keys()].map((index) => {
              if (recipe[`strIngredient${index + 1}`]) {
                return (
                  <View key={index} style={styles.ingrediantsDetails}>
                    <View style={styles.ingrediantsMini}></View>
                    <Text style={styles.ingrediantsText}>
                      {recipe[`strMeasure${index + 1}`]}
                    </Text>
                    <Text>{recipe[`strIngredient${index + 1}`]}</Text>
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
        <Text style={styles.InstractionsText}>Instractions</Text>
        <View style={styles.Instractions}>
          <Text>{recipe.strInstructions}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default RecipeDetailScreen;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 5,
  },
  imageBack: {
    position: "absolute",
    top: 5,
    borderRadius: 50,
    width: "100%",
    height: 400,
  },
  header: {
    width: "100%",
    height: 350,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "start",
    flexDirection: "row",
  },
  back: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  recipeDetailBlockText: {
    width: "100%",
    marginTop: 20,
    padding: 10,
    alignItems: "center",
  },
  DetailBlockTextOne: {
    fontSize: 25,
    fontWeight: "700",
  },
  DetailBlockText: {
    marginTop: 5,
    fontSize: 20,
    color: "gray",
  },
  coocking: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coockingBlock: {
    width: 80,
    height: 150,
    backgroundColor: "orange",
    alignItems: "center",
    borderRadius: 80,
    justifyContent: "space-beetwen",
    padding: 5,
  },
  coockingBlockText: {
    fontSize: 22,
    fontWeight: "700",
  },
  recipeDetailBlockTextIn: {
    width: "100%",
    marginTop: 10,
    marginBottom: 15,
  },
  ingredientsTitle: {
    fontWeight: "700",
    fontSize: 24,
    padding: 10,
  },
  ingrediants: {
    flexDirection: "column",
    paddingLeft: 15,
  },
  ingredientsList: {
    padding: 10,
  },
  ingrediantsDetails: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  ingrediantsMini: {
    width: 20,
    height: 20,
    backgroundColor: "orange",
    borderRadius: 50,
  },
  ingrediantsText: {
    paddingRight: 13,
    marginLeft: 10,
    fontWeight: "500",
  },
  ingrediantsBlock: {
    width: "100%",
  },
  ingrediantsBlockText: {
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: "600",
  },
  Instractions: {
    width: "100%",
    padding: 10,
  },
  InstractionsText: {
    paddingTop: 10,
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: "600",
  },
});
