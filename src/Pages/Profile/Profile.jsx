import React from 'react';
import './Profile.css';

export default function () {
    return (
        <div className='profile'>
            <div className="left">
                <label className='left-lbl' htmlFor="">ID</label>
                <label className='left-lbl' htmlFor="">Name</label>
                <label className='left-lbl' htmlFor="">Email</label>
                <label className='left-lbl' htmlFor="">Phone</label>
                <label className='left-lbl' htmlFor="">Factory</label>
                <label className='left-lbl' htmlFor="">Department</label>
            </div>
            <div className="right">
                <img className='prof-img' src="/logoImage.png" alt="" width={150} height={150} />
            </div>
        </div>
    )
}
