import React from 'react';
import logo from '../../icon.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <section className='title-bar d-flex align-items-center  '>
                <div>
                    <img className='logo me-3 mt-5' src={logo} alt="icon" />
                </div>
                <h1 className='mt-5 header-title text-primary'>My Daily Routine</h1>
                
            </section>
            <hr />
            <hr />
        </div>
    );
};

export default Header;