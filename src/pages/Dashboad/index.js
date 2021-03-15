import React from 'react';
import { Container } from './styles';
import Map from '../../components/Map'
import Selector from '../../components/Selector'

function Dashboard() {

  return (
    <Container>
      <Selector/>
      <Map/>
    </Container>
  );
}

export default Dashboard;