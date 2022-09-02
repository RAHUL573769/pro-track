import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const TaskDetails = () => {
  const { id } = useParams();
  const [taskDetails, setTaskDetails] = useState({});
  const [user] = useAuthState(auth)

  useEffect(() => {
    const url = `https://protrackbd.herokuapp.comissues/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setTaskDetails(data))
  }, [taskDetails]);




  const handleStatus = (event) => {
    console.log(event.target.value)
    console.log(taskDetails._id);

    const statusUpdate = {

      status: event.target.value
    }
    console.log(statusUpdate);
    fetch(`https://protrackbd.herokuapp.comupdate/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(statusUpdate)
    })
      .then(res => res.json())
      .then(result => console.log(result))


  }



  return (
    <div className='p-10'>
      <h1 className='text-3xl uppercase font-bold mb-3'>{taskDetails.data?.taskName}</h1>
      <hr />

      <div class="flex gap-32 lg:gap-5 text-xl shadow-lg border-4 border-t-blue-500  mt-8 px-6 py-2.5 font-medium leading-tight uppercase rounded   hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
        <h1> Description</h1>
        <IoIosArrowDropdown />
      </div>

      <div style={{ "min-height": "120px" }}>
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
          <div class="block p-6   bg-white max-w-sm" style={{ "width": "900px" }}>
            {taskDetails.data?.description}
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 shadow-lg px-6 border-4 border-t-blue-500'>
        <h1 className="text-xl font-medium  py-2.5 font-medium leading-tight uppercase rounded">Task Information</h1>
        <h4 className=' border-b hover:border-b-blue-500 pb-2'>Assignee : <span className='ml-8'>{taskDetails.data?.Assignee}</span></h4>
        <h4 className=' border-b hover:border-b-blue-500 pb-2'>Owner : <span className='ml-8'>{user?.displayName}</span></h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <h4 className='border-b hover:border-b-blue-500 pb-2'>Status : <select
            onChange={handleStatus}
            class="bg-[#0284c7] text-white font-bold p-1 rounded-xl border-none"
          >
            <option value={taskDetails.status?.status}>{taskDetails.status?.status}</option>
            <option value="In Progress">In Progress</option>
            <option value="In Review">In Review</option>
            <option value="Complete">Complete</option>

          </select>
          </h4>
          <h4 className=' border-b hover:border-b-blue-500 pb-2'>Priority : <span className="ml-20 font-bold">{taskDetails.data?.priority}</span></h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-10">
          <h4 className=' border-b hover:border-b-blue-500 pb-2'>Start date : <span className="lg:ml-20 font-bold">{taskDetails.data?.startDate}</span></h4>
          <h4 className=' border-b hover:border-b-blue-500 pb-2'>Deadline : <span className="lg:ml-20 font-bold">{taskDetails.data?.Deadline}</span></h4>
        </div>

      </div>
    </div>
  );
};

export default TaskDetails;