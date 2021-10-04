import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='bg-dark'>
            <div className='container'>
            <div className='py-2 d-flex'>
           <NavLink className='px-2 text-decoration-none text-white' activeClassName='bg-default' to="/home">Home</NavLink>
           <NavLink className='px-2 text-decoration-none text-white' activeClassName='bg-default' to="/services">Services</NavLink>
           <NavLink className='px-2 text-decoration-none text-white' activeClassName='bg-default' to="/about">About</NavLink>
           <NavLink className='px-2 text-decoration-none text-white' activeClassName='bg-default' to="/registration">Registration</NavLink>
        </div>
        </div>
        </div>
    );
};

export default Nav;