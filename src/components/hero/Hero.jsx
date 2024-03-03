
import React , {useEffect, useState} from "react";

import heroImage from "../../assets/hero-image.jpg";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function Hero(type) {

    const [value  , setValue] = useState('');
    const [placeholder , setPlaceholder] = useState(null)
    useEffect(()=>{
        type=='source'
        ?setPlaceholder('Enter your location')
        :setPlaceholder('Enter your destination')
    },[])

    const getLatandLong=(place,type)=>{
        console.log(place);
        console.log(type);
    }

  return (
    <>
      <div className="font-poppins bg-secondary lg:flex px-20 py-10 align-middle justify-between min-h-[90vh]">
        <div className="py-[8rem] flex-col align-middle justify-start">
          <h1 className="  text-4xl font-bold font-poppins mb-5">
            <span className=" ">Ambulance</span> Service
          </h1>
          <h3 className="font-poppins mb-5">Book an ambulance near you</h3>

          {/* <input
            type="text"
            className=" px-4 mb-5 text-sm font-light  italic   outline-none h-10 w-80 bg-transparent rounded-lg"
            placeholder="Enter your location"
          /> */}
          <div>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyBgPLdJyUe_t2PogCAPMx1meipEnCPlFsA"
            selectProps={{
                value,
                onChange: (place)=>{getLatandLong(place,type);setValue(place)},
                placeholder:placeholder,
                isClearable:true,
                components:{
                    DropdownIndicator: false
                }
            }}
             
          />

          <br />
          <GooglePlacesAutocomplete
            apiKey="AIzaSyBgPLdJyUe_t2PogCAPMx1meipEnCPlFsA"
            selectProps={{
                value,
                onChange: (place)=>{getLatandLong(place,type);setValue(place)},
                placeholder:placeholder,
                isClearable:true,
                components:{
                    DropdownIndicator: false
                }
            }}
             
          />

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
    </>
  );
}

export default Hero;
