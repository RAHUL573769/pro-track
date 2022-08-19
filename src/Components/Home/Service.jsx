
import React from 'react';
import app from '../../Assets/images/app-development.png';
import asset from '../../Assets/images/speculate.png';
import info from '../../Assets/images/info.png';
import team from '../../Assets/images/team.png';
import time from '../../Assets/images/time-tracking.png';



const Service = () => {
  return (
    <div className='mt-10 p-5 px-10'>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-28 mx-16  mt-10">

        <div className="card max-w-lg  transform transition duration-500 hover:scale-110 ">


          <div className="text-center ">
            <h2 className='text-4xl font-bold text-center text-header'> you can Manage and Maintain </h2>
            <h2 className='text-4xl font-bold text-center text-blue-600'>Using Pro-Track</h2>
            <p>

            </p>

          </div>
        </div>


        <div className=" max-w-lg transform transition duration-500 hover:scale-110 ">

          <figure className='text-5xl mt-5'>
            <img className='w-16' src={app} alt="" />
          </figure>
          <div>
            <h2 className="text-2xl font-bold text-header"> App Development</h2>
            <p className='text-paragraph'>
              For App/Web Development ProTrack is the best for website. Here many developers can work as a team.

            </p>

          </div>
        </div>
        <div className="max-w-lg  transform transition duration-500 hover:scale-110 ">
          <figure className='text-5xl mt-5'>
            <img className='w-16' src={asset} alt="" />
          </figure>
          <div>
            <h2 className="text-2xl font-bold text-header">Asset Development</h2>
            <p className='text-paragraph'>
              In ProTrack they work here as per as they want with full free, it will save their time and money.

            </p>

          </div>
        </div>


        <div className="max-w-lg  transform transition duration-500 hover:scale-110">
          <figure className='text-5xl mt-5'>
            <img className='w-16' src={info} alt="" />
          </figure>
          <div>
            <h2 className="text-2xl font-bold text-header">Information Purpose</h2>
            <p className='text-paragraph'>
              While developing a projects developers need many information. Here all the required information will provide by the team leaders.

            </p>

          </div>
        </div>

        <div className=" max-w-lg  transform transition duration-500 hover:scale-110 ">
          <figure className='text-5xl mt-5'>
            <img className='w-16' src={team} alt="" />
          </figure>
          <div>
            <h2 className="text-2xl font-bold text-header">Team Collaboration</h2>
            <p className='text-paragraph'>
              ProTrack is build mainly for the team work/collaboration. Here many developers can work as a team and they can complete their projects.

            </p>

          </div>
        </div>

        <div className=" max-w-lg  transform transition duration-500 hover:scale-110 ">
          <figure className='text-5xl mt-5'>
            <img className='w-16' src={time} alt="" />
          </figure>
          <div >
            <h2 className="text-2xl font-bold text-header">Tracking Time</h2>
            <p className='text-paragraph'>
              Here team leaders will assign the task to the team members with the time limit. They will have to complete the task in time it will be track here.

            </p>

          </div>
        </div>




      </div>
    </div>
  );
};

export default Service;
