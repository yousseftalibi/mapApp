import './Directions.css';
import {useEffect, useState} from 'react';

let LocateMe=()=> {
    const [status, setStatus] = useState(null);
    useEffect(() => {
        findMe();
      }, []);
    const findMe =   () => {
        const status = document.querySelector('#status');
        const mapLink = document.querySelector('#map-link');

        mapLink.href = '';
        mapLink.textContent = '';

        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
        
            status.textContent = '';
            mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
            mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
          }

          function error() {
            status.textContent = 'Unable to retrieve your location';
          }

          if (!navigator.geolocation) {
            status.textContent = 'Geolocation is not supported by your browser';
          } else {
            status.textContent = 'Locating…';
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
                            <p id="status"></p>
                <a id="map-link" target="_blank"></a>
          </header>
        </div>
      );
}

export default LocateMe;
