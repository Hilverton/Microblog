import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import colors from '../../styles';
import { Button, Container, Content, IconArea, TextButton, MessageButton, MessageButtonText, MessageButtonTextBold } from './styles';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components';

const Register: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

        <Button>
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

