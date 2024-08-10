// import {
//   GoogleMap,
//   LoadScript,
//   Marker, // Import Marker
// } from '@react-google-maps/api';
import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

function MapComponent() {
  // Atur LongLat Focus map disini saya mengatur LongLat yang mengarah ke Jakarta
  // const center = {
  //   lat: -3.9594901,
  //   lng: 119.6151426,
  // };

  const center: [number, number] = [-3.925568, 119.601222];

  // ContainerStyle Berfungsi Untuk Mengatur StyleContainer Untuk google maps
  // const containerStyle = {
  //   width: "90%",
  //   height: "50vh",
  //   margin: "auto",
  // };

  // return (
  //   <>
  //     <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GMAPS_API}`}>
  //       <GoogleMap
  //         mapContainerStyle={containerStyle}
  //         center={center}
  //         zoom={12}
  //         options={{
  //           scrollwheel: false,
  //         }}
  //       >
  //         <Marker
  //           //Titik Marker akan di letakkan dengan menentukan LongLat
  //           position={{
  //             lat: -3.9594901,
  //             lng: 119.6151426,
  //           }}
  //           // Jika Ingin Marker dapat di drag rubah value draggable menjadi true
  //           draggable={false}
  //         />
  //       </GoogleMap>
  //     </LoadScript>
  //   </>
  // );

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "50vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={icon}>
        <Popup>Desa Polewali Kecamatan Suppa Kabupaten Pinrang</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
