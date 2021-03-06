import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.body};
`;

export const Logo = styled.Image`
  width: 100%;
  height: 50%;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 40px;
`;