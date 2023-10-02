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

const HomeScreen = () => {
  const color = colors;

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
          <IconFontAwesome name="search" size={25} color={"gray"} />
        </TouchableOpacity>
      </View>
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
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 999,
  },
});
