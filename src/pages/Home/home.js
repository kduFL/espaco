import {Container, Content, Title} from './styles';

import Card from '../../components/Card/card';
import Destaque from '../../components/Destaque/destaque';
import React from 'react';

const Home = () => {
  return (
    <Container>
      <Destaque />
      <Content>
        <Title>Espaço News</Title>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
};

export default Home;
