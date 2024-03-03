import React from "react"
import Signin from "./Signin"

import "../css/style.css"
import logo from "../../assets/logo2.png" 

export default function Login(){

    return (
     
 <div className="login">
        <div className="login__content">
            <div className="login__img">
                <img src={logo} alt=""></img>
            </div>

            <div className="login__forms">
                <Signin />
            </div>
        </div>
 </div>
    


        
    )
}