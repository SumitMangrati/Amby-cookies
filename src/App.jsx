import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero2";
import { DestinationContext } from "./context/DestinationContext";
import { SourceContext } from "./context/SourceContext";
import { AmbulanceContext } from "./context/AmbulanceContext";
function App() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  const [ambulance, setAmbulance] = useState([]);
  return (
    <SourceContext.Provider value={{ source, setSource }}>
    <DestinationContext.Provider value={{ destination, setDestination }}>
    <AmbulanceContext.Provider value={{ ambulance, setAmbulance }}>
      <Navbar />
      <Hero />
      </AmbulanceContext.Provider>
    </DestinationContext.Provider>
    </SourceContext.Provider>
    
  );
}

export default App;
