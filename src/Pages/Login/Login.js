import React from 'react';
import useAuth from '../../hooks/useAuth'
const Login = () => {
    const {googleSignIn} = useAuth()
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={googleSignIn} className="btn-warning">Google sign in</button>
        </div>
    );
};

export default Login;