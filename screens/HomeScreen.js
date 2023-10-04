import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "../assets/constants/colors";
import Categories from "../components/Categories/Categories";
import getCategories from "../lib/getCategories";
import { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList/RecipeList";

const HomeScreen = () => {
  const color = colors;
  const [categoriesData, setCategoriesData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategoriesData(data);
      setActiveCategory(data[0].strCategory);
    })();
  }, []);
  return (
    <SafeAreaView style={[{ paddingHorizontal: 20 }]}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/avatar.png")}
        />
        <Icon color={"gray"} name="bell" size={25} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleName}>Hello, Noman!</Text>
        <Text style={styles.titleHeading}>
          Make your own food, stay at{" "}
          <Text style={[styles.titleHeading, { color: color.amber700 }]}>
            home
          </Text>
        </Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.serchInput} placeholder="Search any recipe" />
        <TouchableOpacity style={styles.searchButton}>
          <IconFontAwesome name="search" size={20} color={"gray"} />
        </TouchableOpacity>
      </View>
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categoriesData={categoriesData}
      />
      <RecipeList activeCategory={activeCategory} />
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 30,
  },
  titleName: {
    color: "rgba(0,0,0,0.7)",
  },
  titleHeading: {
    width: "75%",
    fontSize: 32,
    lineHeight: 50,
    fontWeight: "500",
  },
  searchBar: {
    marginTop: 20,
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 999,
  },
  serchInput: {
    width: "90%",
  },
  searchButton: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "white",
  },
});
