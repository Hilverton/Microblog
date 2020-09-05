import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInput } from './styles';

interface InputProps extends TextInputProps {
  value: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ value, placeholder, ...props }) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
}
export { Input };