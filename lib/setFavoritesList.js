import AsyncStorage from "@react-native-async-storage/async-storage";

export default function setFavoritesList(key, value) {
  AsyncStorage.setItem(key, value);
}
