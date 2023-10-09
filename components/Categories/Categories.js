import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import Category from "../Category/Category";

export default function Categories({
  activeCategory,
  setActiveCategory,
  categoriesData,
}) {
  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      entering={FadeInDown.duration(500)}
    >
      {categoriesData.map((el, index) => {
        const isActive = el.strCategory === activeCategory;
        return (
          <Category
            key={index}
            name={el.strCategory}
            thubnail={el.strCategoryThumb}
            isActive={isActive}
            setActiveCategory={setActiveCategory}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 25,
    height: 75,
  },
});
