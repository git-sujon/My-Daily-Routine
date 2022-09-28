import React from 'react';
import avatar from '../../../avatar.png'
const AsideData = () => {
    return (
        <div>
            <div className='profile d-flex justify-content-center align-items-center'>
                <div className='avatar border border-5'>
                    <img src={avatar} className='w-25 rounded-circle' />
                </div>
                <div>
                    <h3 className='fw-bold'>Mr Sujon</h3>
                </div>
            </div>
        </div>
    );
};

export default AsideData;