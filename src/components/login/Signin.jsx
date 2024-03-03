import React from "react"
import "../css/style.css"
export default  function Signin(){
    const [up , setup] = React.useState(false);
    function handleClick(){
        setup((prev)=>!prev);
    }

   return(
       <div>
        <form action="" className={up ? 'login__registre' : 'none'}  id="login-in">
                    <h1 className="login__title">Sign In</h1>

                    <div className="login__box">
                        <i className='bx bx-user login__icon'></i>
                        <input type="email" placeholder="Email" className="login__input"></input>
                    </div>

                    <div className="login__box">
                        <i className='bx bx-lock-alt login__icon'></i>
                        <input type="password" placeholder="Password" className="login__input"></input>
                    </div>

                    <a href="#" className="login__forgot">Forgot password?</a>

                    <a href="#" className="login__button">Sign In</a>

                    <div>
                        <span className="login__account">Don't have an Account ?</span>
                        <span className="login__signin" id="sign-up" onClick={handleClick}>Sign Up</span>
                    </div>
                </form>


                <form action="" className={up ? 'login__create none' : 'block'} id="login-up">
                    <h1 className="login__title">Create Account</h1>

                   

                    <div className="login__box">
                        <i className='bx bx-at login__icon'></i>
                        <input type="text" placeholder="Email" className="login__input"></input>
                    </div>

                    <div className="login__box">
                        <i className='bx bx-lock-alt login__icon'></i>
                        <input type="password" placeholder="Password" className="login__input"></input>
                    </div>

                    <a href="#" className="login__button" >Sign Up</a>

                    <div>
                        <span className="login__account">Already have an Account ?</span>
                        <span className="login__signup" id="sign-in" onClick={handleClick}>Sign In</span>
                    </div>

                    <div className="login__social">
                        <a href="#" className="login__social-icon"><i className='bx bxl-facebook' ></i></a>
                        <a href="#" className="login__social-icon"><i className='bx bxl-twitter' ></i></a>
                        <a href="#" className="login__social-icon"><i className='bx bxl-google' ></i></a>
                    </div>
                </form>

                
              
       </div>
   )
}