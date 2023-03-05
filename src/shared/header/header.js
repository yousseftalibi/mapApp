import './header.css';
import Directions from '../../components/directions/Directions'
import LocateMe from '../../components/locateMe/LocateMe';
import { useState } from 'react';

let Header = () => {
  const [showDirections, setDirections] = useState(false);
  const [showLocateMe, setLocateMe] = useState(false);
  const showDirectionsComponent = () => {
    setDirections(true);
    setLocateMe(false);
  }
  const showLocateMeComponent = () => {
    setLocateMe(true);
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
    </div>
  );

}

export default Header;

