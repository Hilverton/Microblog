import React, { useState } from 'react';
import { Button, Container, Content, IconArea, TextButton, MessageButton, MessageButtonText, MessageButtonTextBold } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import Api from '../../services/api';

import { Input } from '../../components';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await Api.login(email, password);
      if (response.data.token) {
        await AsyncStorage.setItem('@token', response.data.token);
        navigation.reset({ routes: [{ name: 'Timeline' }] });
      }
    } catch (err) {
      console.log(err);
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
