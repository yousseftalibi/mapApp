import './header.css';
import Directions from '../../components/directions/Directions'
import LocateMe from '../../components/locateMe/LocateMe';
import ParkingLots from '../../components/ParkingLots/ParkingLots';
import { useState } from 'react';

let Header = () => {
  const [showDirections, setDirections] = useState(false);
  const [showLocateMe, setLocateMe] = useState(false);
  const [showParkingLots, setParkingLots] = useState(false);
  const showDirectionsComponent = () => {
    setDirections(true);
    setLocateMe(false);
    setParkingLots(false);

  }
  const showLocateMeComponent = () => {
    setLocateMe(true);
    setDirections(false);
    setParkingLots(false);

  }
  const showParkingLotsComponent = () => {
    setParkingLots(true);
    setLocateMe(false);
    setDirections(false);
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'fixed',
      top: 0,
      left: 0,
      right: 0
    }}>
      <div id="component" onClick={showDirectionsComponent}>
        <h1>
          Directions
        </h1>
        {showDirections && <Directions />}
      </div>
      <div id="component" onClick={showLocateMeComponent}>
        <h1>
          Locate me
        </h1>
        {showLocateMe && <LocateMe />}
      </div>

      <div id="component" onClick={showParkingLotsComponent} >
        <h1 style={{ position: 'fixed' }}>
          Parking Lots
        </h1>
        {showParkingLots && <ParkingLots />}
      </div>
    </div>
  );

}

export default Header;

