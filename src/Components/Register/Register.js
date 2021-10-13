import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" placeholder="Your Email" id="" /><br /><br />
                    <input type="password" name="" placeholder="Password" id="" /><br /><br />
                    <input type="password" name="" placeholder="Re-Enter Password" id="" /><br /><br />
                    <input type="submit" value="Register" />
                </form>
                <p>Already Have a Account! <Link to="/login">Sign In</Link></p>
                <div>---------OR---------</div><br />
                <button className="purches-button">Sign In With Google</button>
            </div>
        </div>
    );
};

export default Register;