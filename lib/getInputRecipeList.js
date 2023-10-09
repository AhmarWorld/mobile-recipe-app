export default async function getInputRecipeList(inputValue) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
  );
  const { meals } = await res.json();
  return meals;
}
