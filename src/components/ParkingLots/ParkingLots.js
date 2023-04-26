import React, { useState, useEffect } from 'react';
import '../directions/Directions.css';
import MapComponent from '../google/GoogleMapsApi';
const LocateMe = () => {
  
  const [parkingLotsPoints, setParkingLotsPoints] = useState();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {

    let getParkingLotsPoints = async() => {
      
      const response = await fetch('http://127.0.0.1:5000/parkingLots', {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }) 

      setParkingLotsPoints(await response.json());
  }

  getParkingLotsPoints();

  if (!navigator.geolocation) {
    window.alert('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  function error() {
    window.alert('Unable to retrieve your location');
  }
  }, []);


  return (
    <div className="Directions" style={{
      position: 'absolute',
      top: '70px',
      alignItems: 'center'
    }}>
      <header className="Directions-header">
      <MapComponent
          latitude={latitude}
          longitude={longitude}
          parkingLots={parkingLotsPoints}
        />
      </header>
    </div>
  );
};

export default LocateMe;
