import React from 'react';
import { Link } from 'react-router-dom';

const EndPart = () => {
    return (
        <div className='text-center p-5 mb-20'>
            <h2 className='text-center text-5xl font-bold '>Start your journey with Pro-Track</h2>
           <Link to="/login">
           <button className="btn hover:bg-indigo-700 bg-indigo-400  w-40 mt-5 border-none" Link to ="/login">Get Started</button>
    
           </Link>
        </div>
    );
};

export default EndPart;