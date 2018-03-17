
import React,{Component} from 'react';

import './Login.css';

   
export default class Login extends Component {

    render() {
        return (
            <div className="login">
                <div className="cell1">
                </div>
                <div className="cell2">
                </div>
                <div className="cell3">
                </div>
                <div className="cell4">
                </div>
                <div className="cell5">
                    <form className="loginForm" onSubmit={this.handlesubmit}>
                        <div className = "login1">
                            <input ref = "user_name" className = "userlogin" type = "text" placeholder = "Username" />
                        </div>
             
                        <div className = "login2">
                            <input ref = "password" className ="userpassword" type = "password" placeholder = "Password" />
                        </div>
  
                        <div className = "login3">
                            <button type="button" className = "login_button">Login</button> 
                        </div>
                    </form>
                    <div className = "login4">
                        <p class="message">Not registered? <a href="/signup">Create an account</a></p>    
                    </div>
                
            
                </div>
            </div>
        );
    }
}
  
  