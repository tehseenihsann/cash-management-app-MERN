import React, { useState } from 'react';
import './Signup.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [Factory, setFactory] = useState('');
    const [department, setDeparment] = useState('');
    const [phone, setPhone] = useState('');

    const handleSignup = () => {
        if (email.trim() === 'abc@gmail.com' && password.trim() === '123') {
            setError('');
            console.log(email, password);
        } else {
            setError('Wrong Credentials, Try Again!');
        }
    }

    return (
        <div className='signup'>
            <h3>Sign Up</h3>
            <div className="signup-wrapper">
                <div className="form">
                    <div className='fact'>
                        <label className='fact-lbl' htmlFor="rafique">Rafique Garments</label>
                        <input className='fact-inp' type='checkbox' name='rafique' value="rafique" />
                        <label className='fact-lbl' htmlFor="zainab">Zainab Collection</label>
                        <input className='fact-inp' type='checkbox' name='zainab' value="zainab" />
                        <label className='fact-lbl' htmlFor="harper">Harper Shoe</label>
                        <input className='fact-inp' type='checkbox' name='harper' value="harper" />
                    </div>
                    <input placeholder='ID' className='in-id' type="id" name='id' value={id} onChange={(e) => setID(e.target.value)} />
                    <input placeholder='Name' className='in-name' type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder='example@email.com' className='in-email' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder='Password' className='in-pass' type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input placeholder='0300 0000000' className='in-phone' type="phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <select className='in-dep' name="separtment" id="department">
                        <option value="cutting">Cutting</option>
                        <option value="stitching">Stitching</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input className="in-image" type="file" accept='image/*' name="" id="" />
                    <p className='err'>{error}</p>
                    <button className='signup-btn' onClick={handleSignup}>Register</button>
                </div>
            </div>
        </div>
    )
}
