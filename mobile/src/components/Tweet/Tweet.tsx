import React from 'react';
import { Container, Author, Content, Image } from './styles';

interface TweetProps {
  tweet: Tweet;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <Container>
      <Author>{tweet.name}</Author>
      <Content>{tweet.content}</Content>
    </Container>
  );
}
export { Tweet };