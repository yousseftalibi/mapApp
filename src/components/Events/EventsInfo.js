import React from 'react';
import './EventsInfo.css';
const EventsInfo = ({ parkingSpot }) => {
  return (
    <div className="events-spot-info">
      <h3>{parkingSpot.nom}</h3>
      <p>{parkingSpot.adresse}</p>
      <p>Number of spots: {parkingSpot.nb_places}</p>
      <p>Price for 24 hours: {parkingSpot.tarif_24h} €</p>
      <p>Price PMR : {parkingSpot.tarif_pmr}</p>
      <p>Type of users: {parkingSpot.type_usagers}</p>
      <p>Info: {parkingSpot.info}</p>
    </div>
  );
};

export default EventsInfo;
