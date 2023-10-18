import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getFavoritesList(key) {
  const result = await AsyncStorage.getItem(key);
  return result;
}
