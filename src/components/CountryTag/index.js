import React from 'react';
import { Container, Text } from './styles';

function CountryTag({country, confirmed}) {
  return (
    <Container>
      <Text>{country}</Text>
      <Text>{confirmed}</Text>
    </Container>
  );
}

export default CountryTag;