import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {MealDetails} from '../../src/components';

const mealData: Meal = {
  strMeal: 'Ribollita',
  strInstructions:
    'Put 2 tablespoons of the oil in a large pot over medium heat. When it\u2019s hot, add onion, carrot, celery and garlic; sprinkle with salt and pepper and cook, stirring occasionally, until vegetables are soft, 5 to 10 minutes.\r\nHeat the oven to 500 degrees. Drain the beans; if they\u2019re canned, rinse them as well. Add them to the pot along with tomatoes and their juices and stock, rosemary and thyme. Bring to a boil, then reduce heat so the soup bubbles steadily; cover and cook, stirring once or twice to break up the tomatoes, until the flavors meld, 15 to 20 minutes.\r\nFish out and discard rosemary and thyme stems, if you like, and stir in kale. Taste and adjust seasoning. Lay bread slices on top of the stew so they cover the top and overlap as little as possible. Scatter red onion slices over the top, drizzle with the remaining 3 tablespoons oil and sprinkle with Parmesan.\r\nPut the pot in the oven and bake until the bread, onions and cheese are browned and crisp, 10 to 15 minutes. (If your pot fits under the broiler, you can also brown the top there.) Divide the soup and bread among 4 bowls and serve.',
  strMealThumb:
    'https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg',
  strYoutube: 'https://www.youtube.com/watch?v=BiQUYTBb6eQ',
  strIngredient1: 'Olive Oil',
  strIngredient2: 'Onion',
  strIngredient3: 'Carrot',
  strIngredient4: 'Celery',
  strIngredient5: 'Garlic',
  strIngredient6: 'Cannellini Beans',
  strIngredient7: 'Canned tomatoes',
  strIngredient8: 'Water',
  strIngredient9: 'Rosemary',
  strIngredient10: 'Thyme',
  strIngredient11: 'Kale',
  strIngredient12: 'Wholegrain Bread',
  strIngredient13: 'Red Onion',
  strIngredient14: 'Parmesan',
  strIngredient15: '',
  strIngredient16: '',
  strIngredient17: '',
  strIngredient18: '',
  strIngredient19: '',
  strIngredient20: '',
  strMeasure1: '5 tablespoons',
  strMeasure2: '1 chopped',
  strMeasure3: '1 chopped',
  strMeasure4: '1 stalk chopped',
  strMeasure5: '1 tablespoon minced',
  strMeasure6: '2 cups',
  strMeasure7: '1',
  strMeasure8: '4 cups',
  strMeasure9: '1 fresh sprig',
  strMeasure10: '1 fresh sprig',
  strMeasure11: '1 pound chopped',
  strMeasure12: '4 thick slices',
  strMeasure13: '1 thinly sliced',
  strMeasure14: '\u00bd cup freshly grated',
  strMeasure15: '',
  strMeasure16: '',
  strMeasure17: '',
  strMeasure18: '',
  strMeasure19: '',
  strMeasure20: '',
};

it('renders correctly without loading', () => {
  const tree = renderer.create(<MealDetails data={mealData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with loading', () => {
  const tree = renderer
    .create(<MealDetails data={mealData} isLoading />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without data', () => {
  const tree = renderer.create(<MealDetails data={{}} />);
  expect(tree).toMatchSnapshot();
});
