import React from 'react';
import { Container, Logo, Text } from './styles';

import logoTwitter from '../../../assets/splashTwitter.png';

const Timeline: React.FC = () => {
  return (
    <Container>
      <Logo source={logoTwitter} />
      <Text>Timeline</Text>
    </Container>
  );
}

export { Timeline };
