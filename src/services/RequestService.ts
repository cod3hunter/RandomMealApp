import axios from 'axios';

type MealResponseAPI = {
  meals: Meal[];
};
export const getRandomMeal = async (): Promise<Meal | Partial<Meal>> => {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await axios.get<MealResponseAPI>(url);
    return response.data.meals[0];
  } catch (error) {
    return {};
  }
};
