import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import AddTask from './AddTask';
import { useQuery } from "react-query";
import TaskDetails from './TaskDetails';



const TaskPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState({})
    
    const [click, setClick] = useState(false)

    const navigate = useNavigate();

    const navigateToTask = id => {
        navigate(`/dashboard/taskDetails/${id}`)
    }

    useEffect(() => {
        const url = `https://protrackbd.herokuapp.com/projects/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [project, id]);


    const { data: allTask, isLoading, refetch } = useQuery('task', () => fetch('https://protrackbd.herokuapp.com/issues', {
        method: 'GET',
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading />
    }
    refetch()

   
    return (
        <div className='px-6'>
            <h1 className='my-5 text-2xl font-bold'>Project: <small className='text-emerald-400 uppercase'>{project.projectTitle}</small></h1>
            <div className='grid gap-10 grid-cols-5 mr-10'>
                <div class="card w-40 h-32 bg-green-400 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">36</h2>
                        <p>Open Bugs</p>
                    </div>
                </div>

                <div class="card w-40 h-32 bg-emerald-300 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">9</h2>
                        <p>Closed Bugs</p>

                    </div>
                </div>

                <div class="card w-40 h-32 bg-rose-400 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">12</h2>
                        <p>Overdue</p>
                    </div>
                </div>

                <div class="card w-40 h-32 bg-lime-400 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">8</h2>
                        <p>Due in 7 days</p>
                    </div>
                </div>
            </div>
            <hr className='my-10 font-bold' />
            <div>
                <div className='flex justify-between mb-4'>
                    <h1 className='text-xl font-bold text-green-500 mt-2'>Task Details</h1>
                    <button onClick={setClick(true)} class="inline-block px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add TAsk</button>


                </div>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead className='hover'>
                            <tr>
                                <th>No</th>
                                <th>Task name</th>
                                <th>Assigned by</th>
                                <th>Assigned to</th>
                                <th>Priority</th>
                                <th>Deadline</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allTask.map((task, index) =>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{task.taskName}</td>
                                        <td>{task.owner}</td>
                                        <td>{task.Assignee}</td>
                                        <td className='bg-green-500 rounded-xl text-center text-white font-bold'>{task.priority}</td>
                                        <td>{task.Deadline}</td>
                                        <td onClick={() => navigateToTask(task._id)}>Details</td>
                                    </tr>
                                )
                            }




                        </tbody>
                    </table>
                    {
                        click && <AddTask/>
                    }
                </div>
            </div>
            </div>

  );
};

export default TaskPage;
