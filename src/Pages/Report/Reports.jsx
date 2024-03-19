import React from 'react';
import './Reports.css';

export default function Reports() {
    return (
        <div className="table">
            <h3>Cash Reports</h3>
            <table className='tbl'>
                <thead>

                    <tr className='t-row'>
                        <th className='t-head'>Img</th>
                        <th className='t-head'>Name</th>
                        <th className='t-head'>Description</th>
                        <th className='t-head'>Ammount</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className='t-row'>
                        <td className='t-data'>0</td>
                        <td className='t-data'>0</td>
                        <td className='t-data'>0</td>
                        <td className='t-data'>0</td>
                    </tr>
                    <tr className='t-row'>
                        <td className='t-data'>0</td>
                        <td className='t-data'>0</td>
                        <td className='t-data'>0</td>
                        <td className='t-data'>0</td>
                    </tr>
                    <tr className='t-row'>
                        <td className='t-data'>0</td>
                        <td className='t-data'>0</td>
                        <td className='t-data'>0</td>
                        <td className='t-data'>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
