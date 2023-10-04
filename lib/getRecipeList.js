export default async function getRecipeList(category) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const { meals } = await res.json();
  return meals;
}
