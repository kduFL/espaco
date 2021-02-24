import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;

export const Container = styled.TouchableOpacity`
  background-color: #ffffff;
  height: ${width - 40};
  width: ${width - 40};
  margin-bottom: 24px;
  border-radius: 4px;
`;
