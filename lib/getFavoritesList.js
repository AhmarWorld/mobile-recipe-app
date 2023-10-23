import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getFavoritesList() {
  const result = await AsyncStorage.getItem("favorites");
  return JSON.parse(result);
}
