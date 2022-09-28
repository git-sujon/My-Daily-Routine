import React, { useEffect, useState } from 'react';
import DisplayData from '../DisplayData/DisplayData';
import './LoadData.css'

const LoadData = () => {
    const [FullActivities ,setFullActivities ]= useState([])

    useEffect (()=> {
        fetch ('fakeData.json')
        .then (res => res.json())
        .then (data => setFullActivities(data) )
    }, [])
    return (
        <div className=''>
           <div className="row row-cols-1 row-cols-md-3 g-5">
           {
                FullActivities.map(activities => <DisplayData 
                    activities={activities}
                    key={activities.id}
                    ></DisplayData> )
            }
           </div>
        </div>
    );
};

export default LoadData;