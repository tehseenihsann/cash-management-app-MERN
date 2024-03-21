import React, { useState } from 'react';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        
        if (email.trim() === 'abc@gmail.com' && password.trim() === '123') {
            setError('');
            console.log(email, password);
        } else {
            setError('Wrong Credentials, Try Again!');
        }
    }

    return (
        <div className='login'>
            <h3>Login</h3>
            <div className="login-wrapper">
                <div className="form">
                    <input placeholder='example@email.com' className='in-email' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder='password' className='in-pass' type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p className='err'>{error}</p>
                    <button className='login-btn' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}
