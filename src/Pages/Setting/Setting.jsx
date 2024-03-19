import React, { useState } from 'react';
import './Setting.css';

export default function Setting() {
    const [imgSrc, setImgSrc] = useState('');
    const [error, setError] = useState('');

    const hadleImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImgSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className='setting'>
            <div className="setting-wrapper">
                <h4 className='change-h4'>Change Password</h4>
                <div className="change-pass">
                    <input className='change-password' placeholder='Current Password' type="text" id='password' />
                    <input className='change-password' placeholder='New Password' type="password" id="new-password" name="password" required pattern=".{8,}" title="Password must be at least 8 characters long" autocomplete="new-password" />
                    <input className='change-password' placeholder='New Password' type="password" id="confirm_password" name="confirm_password" required pattern=".{8,}" title="Password must be at least 8 characters long" autocomplete="new-password" />
                    <p className='err'>{error}</p>
                    <button className='change-btn'>Save</button>
                </div>
                <hr />
                <h4 className='change-h4'>Change Image</h4>
                <div className="change-profile">
                    <img className='profile-img' src={imgSrc} alt="profile" width={150} height={150} />
                    <p className='err'>{error}</p>
                    <input className='change-btn' type="file" onChange={hadleImgChange} accept='image/*' name="" id="" />
                </div>
                <hr />
                <h4 className='change-h4'>Change Factory</h4>
                <div className="change-fact">
                    <div className='fact'>
                        <label className='fact-lbl' htmlFor="rafique">Rafique Garments</label>
                        <input className='fact-inp' type='checkbox' name='rafique' value="rafique" />
                        <label className='fact-lbl' htmlFor="zainab">Zainab Collection</label>
                        <input className='fact-inp' type='checkbox' name='zainab' value="zainab" />
                        <label className='fact-lbl' htmlFor="harper">Harper Shoe</label>
                        <input className='fact-inp' type='checkbox' name='harper' value="harper" />
                    </div>
                </div>
                <hr />
                <p className='err'>{error}</p>
                <button className='change-btn'>Save Changes</button>
            </div>
        </div>
    )
}
