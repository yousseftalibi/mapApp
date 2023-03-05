import '../directions/Directions.css';
import { useEffect, useState } from 'react';
import GoogleMapsApi from '../google/GoogleMapsApi';
let LocateMe = () => {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    findMe();
  }, [latitude, longitude]);

  const findMe = () => {
    function success(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }

    function error() {
      window.alert('Unable to retrieve your location');
    }

    if (!navigator.geolocation) {
      window.alert('Geolocation is not supported by your browse');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  return (
    <div className="Directions" style={{
      position: 'absolute',
      top: '70px',

      alignItems: 'center'
    }}>
      <header className="Directions-header">

        <GoogleMapsApi latitude={latitude} longitude={longitude} />

      </header>
    </div>
  );
}

export default LocateMe;
