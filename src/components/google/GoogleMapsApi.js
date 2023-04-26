import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import '../ParkingLots/ParkingCarousel/ParkingSpotInfo.css';
import ParkingSpotInfo from '../ParkingLots/ParkingCarousel/ParkingSpotInfo';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './GoogleMapsApi.css';
const containerStyle = {
    width: '60vw',
    height: '60vh'
};


const MapComponent = (props) => {

    const coordinatesToObject = (coordinates) => {
        return {
          lat: coordinates[1],
          lng: coordinates[0],
        };
      };
      
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDsyOLA17EkFUROT4z8O02xFoPHMeHiha0"
    })
    const location = {
        lat: props.latitude,
        lng: props.longitude
    };


    const parkingSpots = props.parkingLots;
 
    return isLoaded ? (
        <>

        <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={13}
            center={location}
        >
        {parkingSpots && parkingSpots.records && parkingSpots.records.map((record, index) => (
    <Marker
      key={index}
      position={coordinatesToObject(record.geometry.coordinates)}
    />
  ))}
         </GoogleMap>
    <div className="parking-spot-container">
      <Carousel
        showArrows
        swipeable
        useKeyboardArrows
        emulateTouch
      >
        {parkingSpots &&
          parkingSpots.records &&
          parkingSpots.records.map((record, index) => (
            <ParkingSpotInfo key={index} parkingSpot={record.fields} />
          ))}
      </Carousel>
    </div>
  </>
) : (
  <></>
);
}

export default MapComponent;  