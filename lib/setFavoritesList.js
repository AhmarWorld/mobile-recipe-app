import AsyncStorage from "@react-native-async-storage/async-storage";

export default function setFavoritesList(value) {
  AsyncStorage.setItem("favorites", JSON.stringify(value));
}
