import React from 'react';
import { Button } from 'react-native';
import { Container, Logo, Text } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import logoTwitter from '../../../assets/splashTwitter.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const onPressLearnMore = async () => {
    await AsyncStorage.removeItem('@token');
    navigation.reset({ routes: [{ name: 'Login' }] });

  }

  return (
    <Container>
      <Logo source={logoTwitter} />
      <Text>Home</Text>
      <Button
        onPress={onPressLearnMore}
        title="Logout"
        color="#4bb0ee"
        accessibilityLabel="Learn more about this purple button"
      />
    </Container>
  );
}

export { Home };
