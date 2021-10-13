import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {

    const { user, googleSignIn } = useAuth();

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
                <button onClick={googleSignIn} className="purches-button">Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;