import React from 'react';
import './DisplayData.css'

const DisplayData = (props) => {
    const { activities, description, schedule, timeRequired, img } = props.activities
    const {timeAddHandler} =props
    let fullDescription = description.slice(0, 70)
  
 

    return (


        <div className="cards">
            <div className="full-card">
                <div className="card ">
                    <img src={img} className="card-img mx-auto" alt="..." />
                    <div className="card-body mx-auto">
                        <h5 className="card-title fw-bold">{activities}</h5>
                        <p className="card-text">{fullDescription}</p>
                        <p><span className='fw-bold'>Schedule:</span> {schedule}</p>
                        <p className='fw-bold'>Time Takes: <span className='fw-semibold'>{timeRequired} Minutes</span></p>
                        <div className='btn-holder'>
                            <button onClick={()=>timeAddHandler(props.activities)} className='btn btn-primary card-btn w-100'>Complete</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>



    );
};

export default DisplayData;