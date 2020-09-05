import React, { useEffect } from 'react';
import { Container, Logo, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles';

import logoTwitter from '../../../assets/splashTwitter.png';

const Preload: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); 
  }, []);

  return (
    <Container>
      <Logo source={logoTwitter} />
      <LoadingIcon size='large' color={colors.primary} />
    </Container>
  );
}

export { Preload };
