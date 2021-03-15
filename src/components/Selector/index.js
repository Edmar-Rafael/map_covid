import React, { useEffect } from 'react';
import { Container, Title } from './styles';
import CountryTag from '../../components/CountryTag'
import { useDispatch, useSelector } from 'react-redux'
import { requestCases } from '../../store/ducks/cases'

function Selector() {
  const data = useSelector(({casesState}) => casesState.data)
  const dispatch = useDispatch();
  const cases = Object.values(data)
 
  useEffect(()=> {
    dispatch(requestCases())
  },[dispatch])

  return (
    <Container>
      
      {
        cases.map((country, index)=>
        <CountryTag 
          key={index} 
          country={country.All.country && country.All.country}
          confirmed={country.All.confirmed}
        />
          
        )
      }
    </Container>
  );
}

export default Selector;