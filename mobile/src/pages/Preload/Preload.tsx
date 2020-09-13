import React, { useEffect } from 'react';
import { Container, Logo, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles';
import AsyncStorage from '@react-native-community/async-storage';

import logoTwitter from '../../../assets/splashTwitter.png';

const Preload: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = await AsyncStorage.getItem('@token');
        if(token) navigation.reset({ routes: [{ name: 'PrivateRoutes' }] });
        else navigation.navigate('Login');
      } catch (error) {
        console.log(error);
      }
    }

    verifyToken();

  }, []);

  return (
    <Container>
      <Logo source={logoTwitter} />
      <LoadingIcon size='large' color={colors.primary} />
    </Container>
  );
}

export { Preload };
