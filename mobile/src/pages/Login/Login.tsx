import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Input } from '../../components';
import { apiClient } from '../../services/api';
import colors from '../../styles';
import { Button, Container, Content, IconArea, MessageButton, MessageButtonText, MessageButtonTextBold, TextButton } from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (): Promise<void> => {
    try {
      const response: AxiosResponse<LoginResponse> = await apiClient.post('/login', { email, password });
      if (response.data.token) {
        await AsyncStorage.setItem('@token', response.data.token);
        navigation.reset({ routes: [{ name: 'Timeline' }] });
      }
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
          value={email}
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Input
          value={password}
          placeholder="Senha"
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
        />

        <Button onPress={handleLogin}>
          <TextButton>Entrar</TextButton>
        </Button>

        <MessageButton onPress={() => navigation.reset({ routes: [{ name: 'Register' }] })}>
          <MessageButtonText>Ainda não possui conta?</MessageButtonText>
          <MessageButtonTextBold>Cadastre-se</MessageButtonTextBold>
        </MessageButton>
      </Content>
    </Container>
  );
}

export { Login };

