import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'

import '../css/Login.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Login () {
    return (
        <BrowserRouter>
        <div className="Login">
            <div className="Login_Aside">
                <div className="Login_Form">
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher_Item--Active" className="PageSwitcher_Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="PageSwitcher_Item--Active" className="PageSwitcher_Item">Sign Up</NavLink>
                    </div>

                    <div className="FormTitle">
                        <NavLink exact to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
                         or 
                        <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>

                    <Route exact path="/" component={SignUp}></Route>
                    <Route path="/sign-in" component={SignIn}></Route>

                </div>
            </div>
        </div>
        </BrowserRouter>      
    );
}

export default Login;