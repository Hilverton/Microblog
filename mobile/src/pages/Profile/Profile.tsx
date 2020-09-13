import React from 'react';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text } from './styles';
import { useNavigation } from '@react-navigation/native';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const Logout = async () => {
    await AsyncStorage.removeItem('@token');
    navigation.reset({ routes: [{ name: 'Login' }] });
  }

  return (
    <Container>
      <Text>Profile Page</Text>
      <Button
        onPress={Logout}
        title="Logout"
        color="#4bb0ee"
        accessibilityLabel="Learn more about this purple button"
      />
    </Container>
  );
}

export { Profile };

