import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {

    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>LogIn</h2>
                <form onSubmit="">
                    <input type="email" name="" placeholder="Your Email" id="" /><br /><br />
                    <input type="password" name="" placeholder="Password" id="" /><br /><br />
                    <input type="submit" value="Submit" /><br />
                </form>
                <p>New to Ema-Jhon? <Link to="/register">Create Account</Link></p><br />
                <div>---------OR---------</div><br />
                <button onClick={handleGoogleLogIn} className="purches-button">Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;