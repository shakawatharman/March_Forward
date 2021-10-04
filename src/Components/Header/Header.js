import React from 'react';
import img from '../../logo.png';
import Nav from '../Nav/Nav';

const Header = () => {
    
    return (
        <header className='bg-default'>
            <div className='container'>
                <div className='py-2'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>
            <Nav></Nav>
        </header>
    );
};

export default Header;