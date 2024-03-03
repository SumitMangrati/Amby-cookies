import React, { useEffect, useState, useContext } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SourceContext } from "../../context/SourceContext";
import { DestinationContext } from "../../context/DestinationContext";
import { AmbulanceContext } from "../../context/AmbulanceContext";
function InputItem(type) {
  const [value, setValue] = useState("");

  const [placeholder, setPlaceholder] = useState(null);
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const { ambulance, setAmbulance } = useContext(AmbulanceContext);
  useEffect(() => {
    type.type === "source"
      ? setPlaceholder("Enter your location")
      : setPlaceholder("Enter your destination");
  }, []);

 

  const getLatandLong = (place, type) => {
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry.location) {
        if (type.type === "source") {
          setSource({ 
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            address: place.formatted_address,
            label: place.name,
          });

          setAmbulance({
            lat: place.geometry.location.lat() + 5,
            lng: place.geometry.location.lng() + 1,
            address: place.formatted_address,
            label: place.name,
          });
          
        } else {
          setDestination({

            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            address: place.formatted_address,
            label: place.name,
          });
        }
      }
    });
  };

  return (
    <GooglePlacesAutocomplete
      
      selectProps={{
        value,
        onChange: (place) => {
          getLatandLong(place, type);
          setValue(place);
        },
        placeholder: placeholder,
        isClearable: true,
        components: {
          DropdownIndicator: false,
        },
      }}
    />
  );
}

export default InputItem;
