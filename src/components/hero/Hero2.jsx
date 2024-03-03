
import React , {useEffect, useState , useContext} from "react";
import heroImage from "../../assets/hero-image.jpg";
//import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import InputItem from './InputItem'
import { SourceContext } from "../../context/SourceContext";
import { DestinationContext } from "../../context/DestinationContext";
import { AmbulanceContext } from "../../context/AmbulanceContext";
import { LoadScript } from "@react-google-maps/api";
import GoogleMapSection from "./GoogleMapSection";

function Hero2() {
  const { source, setSource } = useContext(SourceContext);
  const {ambulance , setAmbulance} = useContext(AmbulanceContext)
  const { destination, setDestination } = useContext(DestinationContext);
  useEffect(() => {
    if(source){
      console.log(source)
    }
    if(destination){
      console.log(destination)
      console.log(ambulance)
    }
  },[source , destination]) 

  return (
    <>
    <LoadScript
    libraries={['places']}
    googleMapsApiKey="AIzaSyBgPLdJyUe_t2PogCAPMx1meipEnCPlFsA">
        <div className="font-poppins bg-secondary lg:flex px-20 py-10 align-middle justify-between min-h-[90vh]">
        <div className="py-[8rem] flex-col align-middle justify-start">
          <h1 className="  text-4xl font-bold font-poppins mb-5">
            <span className=" ">Ambulance</span> Service
          </h1>
          <h3 className="font-poppins mb-5">Book an ambulance near you</h3>

          <div>
            <InputItem type="source"/>
            <InputItem type="destination"/>

            <div className="p-3 bg-tirtary my-5 rounded-md text-center">
          <button className="text-md font-semibold"
          >Search</button>
          </div>
          
          </div>

          </div>

        
        <div>
          <img src={heroImage} alt="" className=" lg:w-[35rem] rounded-xl" />
        </div>
      </div>

      <div className="mx-7">
      <GoogleMapSection/>
      </div>
      </LoadScript>
    </>
  )
}

export default Hero2