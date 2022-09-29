import React from 'react';
import avatar from '../../../avatar.png'
import './AsideData.css'
const AsideData = () => {
    return (
        <div >
            <div className='border'>
                <div className='profile d-flex flex-column  align-items-center  justify-content-center'>

                    <div className='icon me-3'>
                        <img src={avatar} alt="" />
                    </div>
                    <h3 className='fw-bold'>Mr Sujon</h3>
                    <div className='info d-flex text-success '>

                        <div className='fw-bold  d-flex flex-column me-2'>
                            <p className='my-0 fw-bolder'>Activities Completed:</p>
                            <p className='m-0' >7</p>
                        </div>
                        <div className='fw-bold d-flex flex-column me-2'>
                            <p className='my-0 fw-bolder'>Leader Board:</p>
                            <p className='m-0' >92</p>
                        </div>
                        <div className='fw-bold d-flex flex-column me-2'>
                            <p className='my-0 fw-bolder'>On Time Complete:</p>
                            <p className='m-0' >95%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='break mt-5'>
                <h4 className='fw-bold text-center '>Take a Break...</h4>
                <hr />
            </div>
            <div className='bg-secondary-custom text-center p-3 rounded-pill'>
                <button className='btn btn-outline-primary fw-bold px-3 me-2 rounded-pill'>5</button>
                <button className='btn btn-outline-primary fw-bold px-3 me-2 rounded-pill'>10</button>
                <button className='btn btn-outline-primary fw-bold px-3 me-2 rounded-pill'>15</button>
                <button className='btn btn-outline-primary fw-bold px-3 me-2 rounded-pill border-5'>30</button>
            </div>

            <div className='activities-track  mt-5'>
                    <h4 className='fw-bold text-center' >Activities Accomplished</h4>
                    <hr />
                    <div className='d-flex p-4 bg-secondary-custom rounded-pill justify-content-between'>
                        <p className='m-0 fw-bold'>Completed Task:</p>
                        <p className='my-0  fw-bold text-secondary'><span className=''>0</span> Minutes</p>
                    </div>

                    <div className='d-flex justify-content-between p-4 my-3 bg-secondary-custom rounded-pill'>
                        <p className='m-0 fw-bold'>Break Time:</p>
                        <p className='my-0  fw-bold text-secondary'><span className=''>0</span> Minutes</p>
                    </div>
                    <div className='btn btn-primary p-3 fw-bold  w-100 rounded-pill'>
                        Activity Completed
                    </div>
                    
            </div>



        </div>
    );
};

export default AsideData;