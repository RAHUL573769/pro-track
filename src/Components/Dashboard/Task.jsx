import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Task = ({ task }) => {

  // const { id } = useParams();
  const id = task._id

  console.log(task);




  const handleStatus = (event) => {
    console.log(event.target.value)
    console.log(task._id);

    const statusUpdate ={

      status: event.target.value
    }
    console.log(statusUpdate);
      fetch(`http://localhost:5001/update/${id}`, {
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
    <div className="w-full bg-base-100 shadow-xl my-5 rounded-xl h-32">
      <h2 class="card-title text-violet-600 bg-base-200 p-2 pl-5">{task.projectName}</h2>
      <div className="grid grid-cols-5 lg:gap-3 gap-5 justify-center border-blue-600 page-header p-5">

      <div>
          <h3 className="font-bold">Task Name</h3>
          <p>{task.data?.taskName}</p>
        </div>
        <div>
          <h3 className="font-bold">Status</h3>
          <select
            onChange={handleStatus}
            class="bg-[#0284c7] text-white font-bold p-1 rounded-xl border-none"
          >
            <option value={task.status?.status}>{task.status?.status}</option>
            <option value="In Progress">In Progress</option>
            <option value="In Review">In Review</option>
            <option value="Complete">Complete</option>

          </select>
        </div>
        <div>
          <h3 className="font-bold">Priority</h3>
          <p>{task.data?.priority}</p>
        </div>
        <div>
          <h3 className="font-bold">Deadline</h3>
          <p>{task.data?.Deadline}</p>
        </div>
        <div>
          <h3 className="font-bold">Assignee</h3>
          <p className='text-sm'>{task.user}</p>
        </div>
      </div>
    </div>
  )
};

export default Task;