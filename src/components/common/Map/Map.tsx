import React, { useState } from 'react'
import { 
  GoogleMap, 
  LoadScript, 
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import MapStyles from "./MapStyles";

interface LatLng { 
  lat: number;
  lng: number;
}

interface Location {
  id: number;
  label: string;
  position: LatLng;
}

interface MapProps {    
  height: number;
  width: number;
  borderRadius: number;
  zoom: boolean;
  center: LatLng;
  pin: "primary" | "secondary";
  locations: Array<Location>;
}

const primaryIcon = "https://storage.googleapis.com/cms-staging-storage/pin_icon_100d86f16a/pin_icon_100d86f16a.svg";
const secondaryIcon = "https://storage.googleapis.com/cms-staging-storage/pin_icon_2_401793ce70/pin_icon_2_401793ce70.svg";
const apiKey = "AIzaSyCtwUdkvX559WrbigQtRy9pHXsA5BuOJtI";

const divStyle = {
  fontWeight: `700`,
  fontSize: `12px`,
  lineHeight: `18px`,
  color: `#FFFFFF`
}

export const MapComponent = ({
  height,
  width,
  borderRadius,
  zoom = false, 
  pin,
  locations,
  center
  }: MapProps) => {
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [activeMarker, setActiveMarker] = useState<any>(null);
  const defaultCenter = { lat: 20.5937, lng: 78.9629 };

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={{width: width ? width : 600, height: height ? height : 250, borderRadius: borderRadius ? borderRadius : 2}}
        center={center ? center : locations?.length ? locations[0]?.position : defaultCenter}
        zoom={2}
        options={{
          styles: MapStyles,
          mapTypeControl: false, 
          streetViewControl: false, 
          fullscreenControl: false,          
          keyboardShortcuts: false,
          zoomControl: zoom
        }} 
      >
        {
          locations?.length
          ?
          locations?.map(({id, position, label}: any) => (
            <Marker
              key={id}
              position={position}
              icon={pin === "primary" ? primaryIcon : secondaryIcon}
              onClick={() => {setOpenInfo(!openInfo); setActiveMarker(id)}}
            >
                {(openInfo && activeMarker === id) && (
                  <InfoWindow
                      key={id}
                      onCloseClick={() => {setOpenInfo(!openInfo)}}
                      position={position}
                      options={{minWidth: 100}}
                  >
                    <div style={divStyle}>{label}</div>
                  </InfoWindow>
                )}
              </Marker>
            ))
            :
            <></>
        }
      </GoogleMap>
    </LoadScript>
  )
}