import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className="p-3 m-4 login justify-content-center align-items-center">
            <h2>Login Form</h2>
            <br />
            <button onClick={handleGoogleLogIn} className="btn btn-success"> Google SignIn</button>
        </div>
    );
};

export default Login;