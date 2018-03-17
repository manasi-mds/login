import React, { Component } from 'react';
import './Signup.css';

export default class Signup extends Component {
    render() {
        return(
            <div className="signup">
                <div className="cell1">
                </div>
                <div className="cell2">
                </div>
                <div className="cell3">
                </div>
                <div className="cell4">
                </div>
                <div className="cell5">
                    <form className="signupForm">
                        <div className = "signup1">
                            <input ref = "user_name" className = "usersignup" type = "text" placeholder = "Username" />
                        </div>
             
                        <div className = "signup2">
                            <input ref = "password" className ="userpassword" type = "password" placeholder = "Password" />
                        </div>

                        <div className = "signup3">
                            <input ref = "email" className ="useremail" type = "text" placeholder = "Email address" />
                        </div>
  
                        <div className = "signup4">
                            <button type="button" className = "signup_button">Sign up</button> 
                        </div>
                    </form>
                    <div className = "login4">
                        <p class="message">Already registered? <a href="/login">Login</a></p>    
                    </div>
                </div>
            </div>

        );
    }
}