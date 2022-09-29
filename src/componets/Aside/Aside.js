import React from 'react';
import AsideData from './AsideData/AsideData';

const Aside = ({activitiesArray}) => {
    
    return (
        <div>
            <AsideData activitiesArray={activitiesArray} ></AsideData>
        </div>
    );
};

export default Aside;