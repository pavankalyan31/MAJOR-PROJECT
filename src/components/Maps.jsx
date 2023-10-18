import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import './Maps.css';

const center = {
  lat: 17.385,
  lng: 78.4867,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function Maps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBNY-z05i9HhL8C4JrVm_8YWb9kKvS2vNw",
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    const success = (position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCurrentPosition(pos);
    };

    const error = () => {
      setCurrentPosition(null);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  const onMapClick = (event) => {
    if (currentPosition) {
      setMarkers((current) => [
        ...current,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
        },
      ]);
    }
  };

  const onMarkerDragEnd = (event) => {
    const newPos = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setCurrentPosition(newPos);
  };

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        zoom={10}
        center={currentPosition || center}
        options={options}
        onClick={onMapClick}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {currentPosition && (
          <Marker
            position={currentPosition}
            icon={{
              url: "/current_location.svg",
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            draggable={true}
            onDragEnd={onMarkerDragEnd}
          />
        )}
        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Marker Details</h2>
              <p>Latitude: {selected.lat}</p>
              <p>Longitude: {selected.lng}</p>
              <p>Time: {selected.time.toLocaleString()}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default Maps;
