import { Image, StyleSheet, Text, View } from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { colors } from "../assets/constants/colors";
const WelcomeScreen = () => {
  const colors = colors;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bigCircle}>
        <View style={styles.littleCircle}>
          <Image
            style={styles.welcomeImage}
            source={require("../assets/images/welcome.png")}
          />
        </View>
      </View>
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
    padding: 30,
    borderRadius: 250,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  bigCircle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
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
