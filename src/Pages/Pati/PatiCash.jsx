import React from 'react';
import './PatiCash.css';

export default function PatiCash() {
    return (
        <div className='pati-cash'>
            <h3>Pati Cash</h3>
            <div className='form-wrapper'>

                <form className='form' action="#">
                    <label className='pati-lbl' htmlFor="">Amount</label>
                    <input placeholder='123456' className='pati-inp' type="Number" />
                    <label className='pati-lbl' htmlFor="">Transfer To</label>
                    <select className='type' name="" id="">
                        <option value="Amir">Amir</option>
                        <option value="Farhan">Farhan</option>
                        <option value="Waqas">Waqas</option>
                    </select>
                    <label className='pati-lbl' htmlFor="">Description</label>
                    <input placeholder='Reason..' className='pati-inp' type="text" />
                    <input className='sub-btn' type="submit" name="" id="" />
                </form>
            </div>
            <br />
            <br />
        </div>
    )
}
