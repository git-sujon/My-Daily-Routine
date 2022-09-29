import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import DisplayData from '../DisplayData/DisplayData';

import './LoadData.css'

const LoadData = () => {
    const [FullActivities, setFullActivities] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setFullActivities(data))
    }, [])


 

    const [activitiesArray, setactivitiesArray] = useState ([])

    const timeAddHandler = (activities) => {
        const newActivitiesArray = [...activitiesArray, activities]
        setactivitiesArray(newActivitiesArray)
        // console.log(newActivitiesArray)
      
    }




    return (
        <div className='row'>
            <div className='col-12 col-md-9'>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        FullActivities.map(activities => <DisplayData
                            activities={activities}
                            key={activities.id}
                            timeAddHandler={timeAddHandler}
                        ></DisplayData>)
                    }
                </div>
            </div>
            <div className='col-12 col-md-3'>
                <Aside activitiesArray= {activitiesArray}></Aside>
                
            </div>



        </div>


    );
};

export default LoadData;