import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Input } from '../../components';
import { apiClient } from '../../services/api';
import colors from '../../styles';
import { Button, Container, Content, IconArea, MessageButton, MessageButtonText, MessageButtonTextBold, TextButton } from './styles';

const Register: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (): Promise<void> => {
    try {
      const response: AxiosResponse<RegisterResponse> = await apiClient.post('/signup', { name, email, password });
      if (response.data.message) navigation.reset({ routes: [{ name: 'Login' }] });
    } catch (err) {
      Alert.alert(
        'Erro',
        err.response.data.error,
      );
    }
  }

  return (
    <Container>
      <Content>
        <IconArea>
          <FontAwesome5 name="twitter" size={64} color={colors.primary} />
        </IconArea>

        <Input
          value={name}
          placeholder="Nome"
          onChangeText={(text: string) => setName(text)}
        />

        <Input
          value={email}
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          value={password}
          placeholder="Senha"
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
        />

        <Button onPress={handleRegister}>
          <TextButton>Cadastrar</TextButton>
        </Button>

        <MessageButton onPress={() => navigation.reset({ routes: [{name: 'Login'}] })}>
          <MessageButtonText>Já possui conta?</MessageButtonText>
          <MessageButtonTextBold>Entrar</MessageButtonTextBold>
        </MessageButton>
      </Content>
    </Container>
  );
}

export { Register };

