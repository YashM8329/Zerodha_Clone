import React from 'react';

function Pricing() {
    return ( 
        <div className='column'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='fs-2 mb-3'>Unbeateable Pricing</h1>
                    <p className='mt-5'>We pioneered the concept od discount broking and price trnsperancy in india. Flat fees and no hidden charges</p>
                    <a href="" style={{textDecoration:"none"}}>See Pricing</a>
                </div>
                {/* <div className='col-2'></div> */}
                <div className='col-6 p-5 mt-5'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1>₹0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;