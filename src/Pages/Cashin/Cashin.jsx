import React from 'react';
import './Cashin.css';

export default function Cashin() {
    return (
        <div className='cash-in'>
            <h3>Cash In</h3>
            <div className='form-wrapper'>

                <form className='form' action="#">
                    <label className='in-lbl' htmlFor="">Amount</label>
                    <input placeholder='123456' className='in-inp' type="Number" />
                    <label className='in-lbl' htmlFor="">Type</label>
                    <select className='type' name="" id="">
                        <option value="In">Cash in</option>
                        <option value="Expense">Expense</option>
                    </select>
                    <label className='in-lbl' htmlFor="">Description</label>
                    <input placeholder='Reason..' className='in-inp' type="text" />
                    <input className='sub-btn' type="submit" name="" id="" />
                </form>
            </div>
            <br />
            <br />
        </div>
    )
}
