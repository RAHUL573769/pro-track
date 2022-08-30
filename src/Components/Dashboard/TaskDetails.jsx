import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
    const { id } = useParams();
    const [taskDetails, setTaskDetails] = useState({})

    useEffect(() => {
        const url = `http://localhost:5001/issues/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTaskDetails(data))
    }, [taskDetails]);


    return (
        <div className='p-10'>
          <h1 className='text-3xl font-bold mb-3'>{taskDetails.taskName}</h1>
          <hr />
          <div className='mt-5'>
            <h4>Assagnee : <span className='ml-8'>{taskDetails.Assignee}</span></h4>
            <h4>Due : <span className='ml-8'>{taskDetails.Deadline}</span></h4>
          </div>
        </div>
    );
};

export default TaskDetails;