import React, { useState } from 'react';
import { Container, Button, ButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { apiClient } from '../../services/api';
import { Input } from '../../components';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

const Tweet: React.FC = () => {
  const navigation = useNavigation();
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const SendContent = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (!token) Alert.alert('Erro', 'Erro inesperado');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await apiClient.post('/tweets', { content }, config);
      setContent('');
      if (response.data.message) navigation.navigate('Home');

    } catch (err) {
      Alert.alert(
        'Erro',
        err.response.data.error,
      );
    }
  }

  return (
    <Container>
      <Input
        value={content}
        placeholder="Conteúdo do Tweet"
        onChangeText={(text: string) => setContent(text)}
        textAlignVertical="top"
        multiline={true}
        numberOfLines={5}
        style={{
          paddingVertical: 10,
          height: 200
        }}
      />
      <Input
        value={image}
        placeholder="Url da imagem (opcional)"
        onChangeText={(text: string) => setImage(text)}
      />
      <Button onPress={SendContent}>
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
}

export { Tweet };
