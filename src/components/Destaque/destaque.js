import {Button, Container, Description, LogoSerie, TextButton} from './styles';

import React from 'react';

// import { Container } from './styles';

function Destaque() {
  return (
    <Container>
      <LogoSerie />
      <Description>
        Lorem ipsum dolor Auguesit amet, adipisc elit. Augue pellentesque,
        egestas phasellussit amet.
      </Description>
      <Button>
        <TextButton>Saber Mais</TextButton>
      </Button>
    </Container>
  );
}

export default Destaque;
