import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: 100%;
  elevation: 2;
  background-color: blueviolet;
  border-radius: 4px;
  padding: 8px;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

type Props = {
  text: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({text, onPress}) => {
  return (
    <Container {...{onPress}}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
