import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from './styles'
import Mark from '../../components/Mark'
import { useDispatch, useSelector } from 'react-redux'
import { requestCases } from '../../store/ducks/cases'


function Map(){
  const data = useSelector(({casesState}) => casesState.data)
  const dispatch = useDispatch();
  const cases = Object.values(data)
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  if('geolocation' in navigator){
    const watcher = navigator.geolocation.watchPosition(function(position){
      setLongitude(position.coords.longitude)
      setLatitude(position.coords.latitude)
    })    
  }else{
    alert('Não foi possivel pegar sua localização atual.')
  }

  useEffect(()=> {
    dispatch(requestCases())
  },[dispatch])

 
  const defaultProps = {
    center: {
      lat: latitude || 59.95,
      lng: longitude || 30.33
    },
    zoom: 0
  }

    return (
      <Container >
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        {
          cases.map((item, index) => 
          <Mark
            key={index}
            lat={item.All.lat && item.All.lat}
            lng={item.All.long && item.All.long}
          />
          )
        }
          
        </GoogleMapReact>
      </Container>
    );
  }


export default Map;
