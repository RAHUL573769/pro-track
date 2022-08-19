import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneDelete } from 'react-icons/ai';

const Project = ({ project, handleDelete }) => {
  const { about, owner, projectTitle, startDate, endDate, team, email, _id } = project;
  console.log(project._id);

  const navigate = useNavigate();
  const navigateToTask = id => {
    navigate(`/dashboard/taskPage/${id}`)
  }
  return (
    <div class="card lg:max-w-lg bg-seaBlue border-l-8 border-blue text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
      <div>
        <div class="card-body">
          <div className='flex justify-between gap-4 mb-3'>
            <div>
              <h2 class="text-center text-2xl uppercase font-bold">{projectTitle.slice(0, 8)}</h2>
            </div>
            <button onClick={() => handleDelete(_id)}>
              <AiTwotoneDelete className='text-rose-500'/>
            </button>

          </div>
          <div onClick={() => navigateToTask(_id)}>
            <h2 className='font-bold text-header mb-2'>Owner Name: <small className="uppercase text-paragraph">{owner.slice(0,8)}</small></h2>
            <div className="flex justify-between gap-4 font-semibold mb-2">
              <p className='font-bold text-header'>Start date:<small className="uppercase text-paragraph"> {startDate}</small></p>
              <p className='font-bold text-header'>End date:<small className="uppercase text-paragraph"> {endDate}</small></p>
            </div>
            <h2 className='font-bold text-header'>Description : <span className='text-paragraph'>{about.slice(0, 50)}</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;