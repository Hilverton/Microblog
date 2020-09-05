import styled from 'styled-components/native';
import colors from '../../styles';

export const TextInput = styled.TextInput`
  height: 44px;
  border-width: 1px;
  align-self: stretch;
  padding-left: 15px;
  padding-right: 15px; 
  border-color: ${colors.borderText};
  border-radius: 5px;
  margin-bottom: 8px;
`;