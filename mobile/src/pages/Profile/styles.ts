import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.body};
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;