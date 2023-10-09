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

const RecipeDetailScreen = () => {
  const recipe = {
    idMeal: "52849",
    strMeal: "Spinach & Ricotta Cannelloni",
    strDrinkAlternate: null,
    strCategory: "Vegetarian",
    strArea: "Italian",
    strInstructions:
      "First make the tomato sauce. Heat the oil in a large pan and fry the garlic for 1 min. Add the sugar, vinegar, tomatoes and some seasoning and simmer for 20 mins, stirring occasionally, until thick. Add the basil and divide the sauce between 2 or more shallow ovenproof dishes (see Tips for freezing, below). Set aside. Make a sauce by beating the mascarpone with the milk until smooth, season, then set aside.\r\n\r\nPut the spinach in a large colander and pour over a kettle of boiling water to wilt it (you may need to do this in batches). When cool enough to handle squeeze out the excess water. Roughly chop the spinach and mix in a large bowl with 100g Parmesan and ricotta. Season well with salt, pepper and the nutmeg.\r\n\r\nHeat oven to 200C/180C fan/gas 6. Using a piping bag or plastic food bag with the corner snipped off, squeeze the filling into the cannelloni tubes. Lay the tubes, side by side, on top of the tomato sauce and spoon over the mascarpone sauce. Top with Parmesan and mozzarella. You can now freeze the cannelloni, uncooked, or you can cook it first and then freeze. Bake for 30-35 mins until golden and bubbling. Remove from oven and let stand for 5 mins before serving.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg",
    strTags: null,
    strYoutube: "https://www.youtube.com/watch?v=rYGaEJjyLQA",
    strIngredient1: "Olive Oil",
    strIngredient2: "Garlic",
    strIngredient3: "Caster Sugar",
    strIngredient4: "Red Wine Vinegar",
    strIngredient5: "Chopped Tomatoes",
    strIngredient6: "Basil Leaves",
    strIngredient7: "Mascarpone",
    strIngredient8: "Milk",
    strIngredient9: "Parmesan",
    strIngredient10: "Mozzarella",
    strIngredient11: "Spinach",
    strIngredient12: "Parmesan",
    strIngredient13: "Ricotta",
    strIngredient14: "Nutmeg",
    strIngredient15: "Cannellini Beans",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "3 tbsp",
    strMeasure2: "8 cloves chopped",
    strMeasure3: "3 tbsp",
    strMeasure4: "2 tblsp ",
    strMeasure5: "3 400g Cans",
    strMeasure6: "Bunch",
    strMeasure7: "2 tubs",
    strMeasure8: "3 tbsp",
    strMeasure9: "85g",
    strMeasure10: "2 sliced",
    strMeasure11: "1kg",
    strMeasure12: "100g ",
    strMeasure13: "3 tubs",
    strMeasure14: "pinch",
    strMeasure15: "400g",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: "",
    strSource:
      "https://www.bbcgoodfood.com/recipes/531632/spinach-and-ricotta-cannelloni",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.imageBack} />
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <IconBack
              name="arrow-back-ios"
              size={30}
              color={"orange"}
              style={{
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.back}>
            <IconLike
              name="heart-fill"
              size={30}
              color={"gray"}
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
          <View style={styles.ingrediants}></View>
        </ScrollView>
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
  },
  ingrediants: {
    flexDirection: "row",
    paddingLeft: 15,
  },
  ingredientsList: {
    padding: 10,
  },
});
