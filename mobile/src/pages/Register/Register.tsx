import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import colors from '../../styles';
import { Button, Container, Content, IconArea, Input, TextButton, MessageButton, MessageButtonText, MessageButtonTextBold } from './styles';

const Register: React.FC = () => {
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
          onChangeText={text => setName(text)}
        />

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
          <TextButton>Cadastrar</TextButton>
        </Button>

        <MessageButton>
          <MessageButtonText>Já possui conta?</MessageButtonText>
          <MessageButtonTextBold>Entrar</MessageButtonTextBold>
        </MessageButton>
      </Content>
    </Container>
  );
}

export { Register };

