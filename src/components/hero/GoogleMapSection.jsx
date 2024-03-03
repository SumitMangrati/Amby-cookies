import React, { useEffect, useContext, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF, OverlayViewF , DirectionsRenderer } from "@react-google-maps/api";
import { SourceContext } from "../../context/SourceContext";
import { DestinationContext } from "../../context/DestinationContext";
import { AmbulanceContext } from "../../context/AmbulanceContext";

const containerStyle = {
  width: "95%",
  height: "400px",
};

function GoogleMapSection() {
  // const { isLoaded } = useJsApiLoader({
  //     id: 'google-map-script',
  //     googleMapsApiKey: "AIzaSyBgPLdJyUe_t2PogCAPMx1meipEnCPlFsA"
  //   })

  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const {ambulance , setAmbulance} = useContext(AmbulanceContext);
  useEffect(()=>{
    source
    destination
  },[])
  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [marker , setMarker]  = useState({
    lat: 22.50,
    lng: 88.26,
  })


  const [map, setMap] = React.useState(null);
  const [directionRoutePoints , setDirectionRoutePoints] =useState([]);

  useEffect(() => {
    if (source?.length != [] && map) {
      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
      if(source.length !=[] && destination.length !=[]){
        directionRoute();
    }
    }
  
},[source])

useEffect(()=> {
  setDirectionRoutePoints([]);
},[])



  useEffect(() => {
    if (destination?.length != [] && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }
    if(source.length !=[] && destination.length !=[]){
        directionRoute();
    }
  }, [destination]);


  const directionRoute=()=>{
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
        origin:{lat:source.lat,lng:source.lng},
        destination:{lat:destination.lat,lng:destination.lng},
        travelMode: google.maps.TravelMode.DRIVING
    },(result,status)=>{
        if(status === google.maps.DirectionsStatus.OK){
            setDirectionRoutePoints(result)
            console.log(directionRoutePoints);
            //console.log("hello")
            console.log(marker.lat)
        }
        else{
            console.error(`error fetching directions ${result}`);
        }
    })
  }


  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {source.length != [] ? 
        <MarkerF position={{ lat: source.lat, lng: source.lng }}
         >
            <OverlayViewF
            position={{ lat: marker.lat, lng: marker.lng }}
            mapPaneName={OverlayViewF.OVERLAY_MOUSE_TARGET}
            >
                <div className="p-2 bg-white font-bold inline-block">
                    <p className="text-black text-[16px]">{source.label}</p>
                </div>
            </OverlayViewF>
         </MarkerF>
       : null}



         <MarkerF position={{lat:27.55 , lng:88.7}}>

         </MarkerF>
       


      {/* {destination.length != [] ? 
        <MarkerF position={{ lat: destination.lat, lng: destination.lng }} >
          
        </MarkerF>
       : null} */}


       <DirectionsRenderer
        directions={directionRoutePoints}
        options={{

        }}
       />


      /* Child components, such as markers, info windows, etc. */
    </GoogleMap>
  );
}

export default GoogleMapSection;
