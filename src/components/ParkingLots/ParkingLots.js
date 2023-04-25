import React, { useState, useEffect, useCallback } from 'react';
import MapComponent from '../google/GoogleMapsApi';
import '../directions/Directions.css';

const ParkingLots = (props) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
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
    <div
      className="Directions"
      style={{
        position: 'absolute',
        top: '70px',
        alignItems: 'center',
      }}
    >
      <header className="Directions-header">
        <MapComponent
          latitude={latitude}
          longitude={longitude}
          parkingLots={props.parkingLots}
        />
      </header>
    </div>
  );
};

export default ParkingLots;
