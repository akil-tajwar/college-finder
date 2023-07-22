import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#232323]'>
            <div className='flex justify-between w-3/4 mx-auto py-6'>
                <div className='text-yellow-500 text-3xl font-semibold'>
                    <h3>College Finder</h3>
                    {/* <h3>Finder</h3> */}
                </div>
                <div className='flex gap-8 justify-center items-center font-semibold text-white'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/colleges'}>Colleges</Link>
                    <Link to={'/admission'}>Admisson</Link>
                    <Link to={'/mycollege'}>My College</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;