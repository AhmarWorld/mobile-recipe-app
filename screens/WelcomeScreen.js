import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { colors } from "../assets/constants/colors";
import { useEffect } from "react";
const WelcomeScreen = ({ navigation }) => {
  const paddingBig = useSharedValue(0);
  const paddingLittle = useSharedValue(0);
  const colors = colors;

  useEffect(() => {
    setTimeout(() => {
      paddingBig.value = withSpring(40);
      paddingLittle.value = withSpring(30);
    }, 1000);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.bigCircle,
          {
            padding: paddingBig,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.littleCircle,
            {
              padding: paddingLittle,
            },
          ]}
        >
          <Image
            style={styles.welcomeImage}
            source={require("../assets/images/welcome.png")}
          />
        </Animated.View>
      </Animated.View>
      <View style={styles.title}>
        <Text style={styles.headingOne}>Foody</Text>
        <Text style={styles.headingTwo}>Food is always right</Text>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.amber600,
  },
  welcomeImage: {
    width: 200,
    height: 200,
  },
  littleCircle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 250,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  bigCircle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 300,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  headingOne: {
    fontSize: 64,
    color: "white",
    fontWeight: "700",
  },
  headingTwo: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
  },
  title: {
    alignItems: "center",
  },
});
