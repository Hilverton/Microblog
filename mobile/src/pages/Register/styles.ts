import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.body};
`;

export const Content = styled.View`
  padding: 30px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IconArea = styled.View`
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  height: 44px;
  border-width: 1px;
  align-self: stretch;
  padding-left: 15px;
  padding-right: 15px; 
  border-color: ${colors.borderText};
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const Button = styled.TouchableOpacity`
  height: 44px;
  align-self: stretch;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  background-color: ${colors.primary};
`;

export const TextButton = styled.Text`
  color: ${colors.text};
  font-size: 16px;
  font-weight: bold;
`;

export const MessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const MessageButtonText = styled.Text`
  font-size: 14px;
  margin-right: 5px;
`;

export const MessageButtonTextBold = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
`;