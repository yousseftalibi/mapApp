import './header.css';
import { useState } from 'react';
import Events from '../../components/Events/Events';
import Directions from '../../components/directions/Directions';
import ParkingLots from '../../components/ParkingLots/ParkingLots';
import Chat from '../../components/chat/Chat';

let Header = () => {
  const [showDirections, setDirections] = useState(false);
  const [showEvents, setEvents] = useState(false);
  const [showChat, setChat] = useState(false);
  const [showParkingLots, setParkingLots] = useState(false);

  const showDirectionsComponent = () => {
    setDirections(true);
    setChat(false);
    setParkingLots(false);
    setEvents(false);
  }
  const showEventsComponent = () => {
    setEvents(true);
    setDirections(false);
    setChat(false);
    setParkingLots(false);
  }
  const showChatComponent = () => {
    setChat(true);
    setDirections(false);
    setParkingLots(false);
    setEvents(false);

  }
  const showParkingLotsComponent = () => {
    setParkingLots(true);
    setChat(false);
    setDirections(false);
    setEvents(false);
  }

  return (
    <div class="headerBar">

    <div id="component" onClick={showDirectionsComponent}>
        <h1>
          Directions
        </h1>
        {showDirections && <Directions />}
      </div>

      <div id="component" onClick={showEventsComponent}>
        <h1>
          Events
        </h1>
        {showEvents && <Events />}
      </div>
      <div id="component" onClick={showParkingLotsComponent}>
        <h1>
          Parking Lots
        </h1>
        {showParkingLots && <ParkingLots />}
      </div>

      <div id="component" onClick={showChatComponent} >
        <h1 >
          Chat
        </h1>
        {showChat && <Chat />}
      </div>
    </div>
  );

}

export default Header;

