import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import avatar from '../../../avatar.png'
import './AsideData.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AsideData = ({activitiesArray}) => {
    
    let totalTimeNeeds=0;
    for (let activities  of activitiesArray) {
        totalTimeNeeds= totalTimeNeeds+ activities.timeRequired
    }
    const [btntext, setbtntext] = useState([])

    const [timeAdded, setTimeAdded] = useState([])
 
    const handleBreakButton =(e) => {
        let value= e.target.innerText
        setbtntext(e.target.innerText)
        localStorage.setItem("times", value )

    }

 
    useEffect (()=> {

        const getdataFromLocal= localStorage.getItem("times")
        setbtntext(getdataFromLocal) 

    },[] )
    

  


    // let getData= JSON.parse(localStorage.getItem("breakTime"))
    // console.log(getData)

    return (
        <div className='full-aside'>
            <div className='border'>
                <div className='profile d-flex flex-column  align-items-center  justify-content-center'>

                    <div className='icon me-3'>
                        <img src={avatar} alt="" />
                    </div>
                    <h3 className='fw-bold'>Mr Sujon</h3>
                    <div className='info d-flex  text-success '>

                        <div className='fw-bold  d-flex flex-column me-2'>
                            <p className='my-0 fw-bolder'>Activities Completed:</p>
                            <p className='m-0' >{activitiesArray.length}</p>
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

            <div className='bottom-aside my-3 p-2'>
                
            <div className='break mt-1'>
                <h5 className='fw-bold text-center '>Take a Break...</h5>
                <hr />
            </div>
            <div className='bg-secondary-custom text-center p-3 rounded-pill'>
                <button onClick={(e)=>handleBreakButton(e)} className='btn btn-outline-primary fw-bold px-3 me-2 rounded-pill'>5</button>
                <button onClick={(e)=>handleBreakButton(e)} className='btn btn-outline-primary fw-bold px-3 me-2 rounded-pill'>10</button>
                <button onClick={(e)=>handleBreakButton(e)} className='btn btn-outline-primary fw-bold px-3 me-2 rounded-pill'>15</button>
                <button onClick={(e)=>handleBreakButton(e)} className='btn btn-outline-primary fw-bold px-3 me-2 rounded-pill border-5'>30</button>
            </div>
            <hr />

            <div className='activities-track  mt-3'>
                <h5 className='fw-bold text-center ' >Activities Accomplished..</h5>
                <hr />
                <div className='d-flex p-4 bg-secondary-custom rounded-pill justify-content-between'>
                    <p className='m-0 fw-bold'>Completed Task:</p>
                    <p className='my-0  fw-bold text-secondary'><span className=''> {totalTimeNeeds}</span> Minutes</p>
                </div>

                <div className='d-flex justify-content-between p-4 my-3 bg-secondary-custom rounded-pill'>
                    <p className='m-0 fw-bold'>Break Time:</p>
                    <p className='my-0  fw-bold text-secondary'><span className=''>{btntext}  </span> Minutes</p>
                </div>
                <div  className='btn btn-primary p-3 fw-bold  w-100 rounded-pill'>
                    Activity Completed
                    <ToastContainer />
                </div>

            </div>
            </div>



        </div>
    );
};

export default AsideData;