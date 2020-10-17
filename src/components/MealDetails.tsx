import React, {useState, useEffect} from 'react';
import {Dimensions, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {normalizeIngredients} from '../services/utils';

const {width} = Dimensions.get('window');

const LoadingContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Container = styled.ScrollView`
  width: 100%;
  margin-top: 32px;
`;

const Text = styled.Text`
  font-size: 16px;
  margin-top: 8px;
`;

const Image = styled.Image.attrs({height: width * 0.5, width: width * 0.8})`
  width: ${width * 0.8}px;
  height: ${width * 0.5}px;
  margin-top: 16px;
  border-radius: 4px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled(Title)`
  margin-top: 24px;
`;

const InstructionsText = styled(Text)`
  text-align: center;
`;

type Props = {
  data: Meal;
  isLoading?: boolean;
};

const MealDetails: React.FC<Props> = ({data}) => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    if (data.strIngredient1) {
      setIngredients(normalizeIngredients(data));
    }
  }, [data]);

  if (ingredients.length < 1) {
    return (
      <LoadingContainer>
        <ActivityIndicator size={30} color="blueviolet" />
      </LoadingContainer>
    );
  }

  return (
    <Container contentContainerStyle={{alignItems: 'center'}}>
      <Title>{data.strMeal}</Title>
      <Image source={{uri: data.strMealThumb}} />
      {ingredients.map((ingredient, index) => {
        return <Text key={index}>{ingredient}</Text>;
      })}
      <Subtitle>Instructions</Subtitle>
      <InstructionsText>{data.strInstructions}</InstructionsText>
    </Container>
  );
};

MealDetails.defaultProps = {
  isLoading: false,
};

export default MealDetails;
