import React from 'react';
import objective from '../../Assets/images/objective.jpg'

const Objective = () => {
  return (

    <div className='mx-16 p-5'>
      <div className="hero min-h-screen bg-seaBlue p-20 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={objective} alt=" " className="max-w-lg rounded-lg shadow-2xl w-96" />
          <div className='mx-8'>

            <h1 className="text-4xl font-bold">Our Goal and Objectives</h1>
            <p className="py-6 text-xl text-slate-600 font-serif tracking-wider">Our objective is an important part of project planning, it includes identifying, planning, monitoring, and following up on the various activities involved in completing a particular project.</p>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Objective;