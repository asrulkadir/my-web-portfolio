import {
  GoogleMap,
  LoadScript,
  Marker, // Import Marker
} from '@react-google-maps/api';

function MapComponent() {
  // Atur LongLat Focus map disini saya mengatur LongLat yang mengarah ke Jakarta
  const center = {
    lat: -3.9594901,
    lng: 119.6151426,
  };

  // ContainerStyle Berfungsi Untuk Mengatur StyleContainer Untuk google maps
  const containerStyle = {
    width: '90%',
    height: '50vh',
    margin: 'auto',
  };

  return (
    <>
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GMAPS_API}`}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          options={{
            scrollwheel: false,
          }}
        >
          <Marker
            //Titik Marker akan di letakkan dengan menentukan LongLat
            position={{
              lat: -3.9594901,
              lng: 119.6151426,
            }}
            // Jika Ingin Marker dapat di drag rubah value draggable menjadi true
            draggable={false}
          />
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default MapComponent;
