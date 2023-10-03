import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../assets/constants/colors";

const Category = ({ name, thubnail, isActive, setActiveCategory }) => {
  const backgroundColor = isActive ? colors.amber600 : "rgba(0,0,0,0.1)";
  const onPress = () => {
    setActiveCategory(name);
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.category}>
      <View style={[styles.imageBox, { backgroundColor: backgroundColor }]}>
        <Image style={styles.image} source={{ uri: thubnail }} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageBox: {
    width: 60,
    height: 60,
    borderRadius: 60,
    padding: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 55,
  },
});
