export const normalizeIngredients = (mealData: Meal): string[] => {
  const ingredients: string[] = [];
  let finished = false;
  let index = 1;
  while (!finished) {
    const ingredient = mealData[`strIngredient${index}`];
    const measure = mealData[`strMeasure${index}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    } else {
      finished = true;
      break;
    }
    ++index;
  }
  return ingredients;
};
