import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getRecipesByCategory } from "../../lib/getRecipesByCategory";
import Recipe from "../Recipe/Recipe";
const Recipes = ({ activeCategory, inputText }) => {
    const [recipes, setRecipes] = useState([]);
    const [showingRecipes, setShowingRecipes] = useState([]);

    useEffect(() => {
        (async () => {
            if (activeCategory) {
                const res = await getRecipesByCategory(activeCategory);
                setRecipes(res.meals);
                setShowingRecipes(res.meals);
            }
        })();
    }, [activeCategory]);

    useEffect(() => {
        if (inputText.trim() !== "" && recipes.length > 0) {
            const newShowingRecipes = recipes.filter((recipe) => {
                return recipe.strMeal
                    .toLowerCase()
                    .includes(inputText.toLowerCase());
            });
            setShowingRecipes(newShowingRecipes);
        }
    }, [inputText]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Recipes</Text>
            <FlatList
                data={showingRecipes}
                numColumns={2}
                renderItem={({ item }) => {
                    return <Recipe recipe={item} />;
                }}
                keyExtractor={(item) => item.idMeal}
                style={styles.recipeList}
                columnWrapperStyle={styles.recipeListColumnWrapper}
            />
        </View>
    );
};
export default Recipes;
const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        gap: 20,
    },
    heading: {
        fontWeight: "600",
        fontSize: 20,
    },
    recipeList: {
        gap: 18,
    },
    recipeListColumnWrapper: {
        justifyContent: "space-between",
        gap: 12,
    },
});
