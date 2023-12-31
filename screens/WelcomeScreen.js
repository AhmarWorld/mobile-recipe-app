import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { Image, StyleSheet, Text, View } from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { colors } from "../assets/constants/colors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categoriesSlice";
import { fetchRecipes } from "../store/recipesSlice";

const WelcomeScreen = ({ navigation }) => {
  const ringOnePadding = useSharedValue(0);
  const ringTwoPadding = useSharedValue(0);

  const categoriesLoaded = useSelector((state) => state.categories.loaded);
  const recipesLoaded = useSelector((state) => state.recipes.loaded);
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      ringOnePadding.value = withSpring(35);
      ringTwoPadding.value = withSpring(15);
      dispatch(fetchCategories());
    }, 2000);
  }, []);

  useEffect(() => {
    if (activeCategory) {
      dispatch(fetchRecipes(activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    setTimeout(() => {
      if (recipesLoaded) {
        navigation.replace("Main");
      }
    }, 2000);
  }, [recipesLoaded]);

  return (
    <SafeAreaView style={[styles.container, styles.centeredLayout]}>
      <Animated.View
        style={[styles.ringOne, styles.ring, { padding: ringOnePadding }]}
      >
        <Animated.View
          style={[styles.ringTwo, styles.ring, { padding: ringTwoPadding }]}
        >
          <Image
            style={styles.welcomeImage}
            source={require("../assets/images/welcome.png")}
          />
        </Animated.View>
      </Animated.View>
      <View style={styles.textBlock}>
        <Text style={styles.heading}>Foody</Text>
        <Text style={styles.subhead}>Food is always right!</Text>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.amber600,
  },
  centeredLayout: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  ring: { borderRadius: 999 },
  ringOne: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  ringTwo: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  welcomeImage: {
    width: 200,
    height: 200,
  },
  textBlock: { marginTop: 15 },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
  },
  subhead: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
});
