import React, {useState, useCallback} from 'react';
import styled from 'styled-components/native';
import {Button, MealDetails} from './components';
import {getRandomMeal} from './services/RequestService';

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px;
`;

const App: React.FC = () => {
  const [meal, setMeal] = useState<Meal | Partial<Meal>>({});
  const [isLoading, setIsLoading] = useState(false);
  const generateMeal = useCallback(() => {
    (async () => {
      setIsLoading(true);
      const response = await getRandomMeal();
      setMeal(response);
      setIsLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Button text="Generate random meal" onPress={generateMeal} />
      <MealDetails data={meal} isLoading={isLoading} />
    </Container>
  );
};

export default App;
