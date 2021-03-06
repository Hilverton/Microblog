import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.body};
`;

export const Logo = styled.Image`
  width: 100%;
  height: 50%;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;