import React, { useState, useEffect } from 'react';
import '../directions/Directions.css';
import ParkingLots from '../ParkingLots/ParkingLots';

const LocateMe = () => {
  
  const [parkingLotsPoints, setParkingLotsPoints] = useState();

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

  }, []);


  return (
    <div className="Directions" style={{
      position: 'absolute',
      top: '70px',
      alignItems: 'center'
    }}>
      <header className="Directions-header">
        <ParkingLots parkingLots={parkingLotsPoints} />
      </header>
    </div>
  );
};

export default LocateMe;
