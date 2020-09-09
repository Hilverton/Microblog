import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import colors from '../../styles';
import { Button, Container, Content, IconArea, TextButton, MessageButton, MessageButtonText, MessageButtonTextBold } from './styles';
import { useNavigation } from '@react-navigation/native';

import Api from '../../services/api';

import { Input } from '../../components';

const Register: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await Api.register(name, email, password);
      if (response.data.message) navigation.reset({ routes: [{ name: 'Login' }] });
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
          value={name}
          placeholder="Nome"
          onChangeText={(text: string) => setName(text)}
        />

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

