import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.body};
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.text}
`;