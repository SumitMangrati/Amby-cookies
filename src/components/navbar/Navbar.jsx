import React from "react";
import logo from "../../assets/logo2.png";
//#FF9C75
function Navbar() {
  return (
    <div className="sticky">
      <div className="bg-secondary flex align-middle justify-between py-4 px-20 
      ">
        <div className="flex align-middle justify-center">
            <img 
            className="w-10 h-10"
            src={logo} alt="" />
        </div>
        <div>
          <button className=" outline-none bg-tirtary py-2 px-5 rounded-lg">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
