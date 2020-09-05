import React, { useState } from 'react';
import { Button, Container, Content, IconArea, Input, TextButton, MessageButton, MessageButtonText, MessageButtonTextBold } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Content>
        <IconArea>
          <FontAwesome5 name="twitter" size={64} color={colors.primary} />
        </IconArea>

        <Input
          value={email}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />

        <Input
          value={password}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button>
          <TextButton>Entrar</TextButton>
        </Button>

        <MessageButton>
          <MessageButtonText>Ainda não possui conta?</MessageButtonText>
          <MessageButtonTextBold>Cadastre-se</MessageButtonTextBold>
        </MessageButton>
      </Content>
    </Container>
  );
}

export { Login };
