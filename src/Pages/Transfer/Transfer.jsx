import React from 'react';
import './Transfer.css';

export default function Transfer() {
    return (
        <div className='transfer'>
            <h3>Transfer Cash</h3>
            <div className='form-wrapper'>

                <form className='form' action="#">
                    <label className='trans-lbl' htmlFor="">Amount</label>
                    <input placeholder='123456' className='trans-inp' type="Number" />
                    <label className='pati-lbl' htmlFor="">Transfer To</label>
                    <select className='type' name="" id="">
                        <option value="Amir">Amir</option>
                        <option value="Farhan">Farhan</option>
                        <option value="Waqas">Waqas</option>
                    </select>
                    <label className='pati-lbl' htmlFor="">Transfer To</label>
                    <select className='type' name="" id="">
                        <option value="Amir">Amir</option>
                        <option value="Farhan">Farhan</option>
                        <option value="Waqas">Waqas</option>
                    </select>
                    <label className='trans-lbl' htmlFor="">Description</label>
                    <input placeholder='Reason..' className='trans-inp' type="text" />
                    <input className='sub-btn' type="submit" name="" id="" />
                </form>
            </div>
            <br />
            <br />
        </div>
    )
}
