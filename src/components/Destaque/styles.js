import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const Height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const Container = styled.View`
  height: ${Height};
  width: ${width};
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px 32px;
`;

export const LogoSerie = styled.View`
  background-color: #fff;
  width: 250px;
  height: 40px;
  margin-bottom: 24px;
`;

export const Description = styled.Text`
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  background-color: #6800b9;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
`;
