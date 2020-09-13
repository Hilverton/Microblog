import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Container } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { apiClient } from '../../services/api';
import { Alert } from 'react-native';
import { Tweet } from '../../components';

type Props = {
  item: Tweet;
}

const Home: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const getTweets = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (!token) Alert.alert('Erro', 'Erro inesperado');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await apiClient.get('/tweets', config);
      setTweets(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTweets();
  }, []);

  const _onRefresh = () => {
    setRefreshing(true);
    getTweets();
    setRefreshing(false);
  }

  const _renderItem = ({ item }: Props) => <Tweet tweet={item} />;

  return (
    <Container>
      <FlatList
        data={tweets}
        keyExtractor={tweet => tweet._id}
        renderItem={_renderItem}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={_onRefresh}
          />
        }
      />
    </Container>
  );
}

export { Home };
