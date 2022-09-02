import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading';
import { useParams } from 'react-router-dom';


const AddTask = () => {

    const { id } = useParams();
    const [project, setProject] = useState({})
    console.log(project)
    
    const [user] = useAuthState(auth)
    const email = user.email;     
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, event) => {
       
        const  alldata ={
           data : data,
           projectName : project.data?.projectTitle,        
           projectId : project._id,
           user : user?.displayName,
           email : user?.email,
           profile : user?.photoURL
        }
        console.log(alldata);
        const url = `https://protrackbd.herokuapp.comissues`;
        fetch(url, {
            method: "POST",
            body: JSON.stringify(alldata),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                reset();
            });
        event.preventDefault()
    };


    useEffect(() => {
        const url = `https://protrackbd.herokuapp.comprojects/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [project, id]);

    return (
        <div>
            <button class="inline-block px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add TAsk</button>
            <div class="offcanvas offcanvas-end overflow-y-scroll fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none lg:w-[998px] w-96" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header flex items-center justify-between p-4 bg-teal-500 text-white">
                    <h5 class="offcanvas-title mb-0 leading-normal font-semibold text-xl" id="offcanvasRightLabel">Add Your Task</h5>

                    <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='p-5 px-10'>
                    <label
                        htmlFor="company-website"
                        className="block text-xl mt-5 mb-2 font-medium text-gray-700"
                    >
                        Task Name :
                    </label>

                    <input
                        type="text"
                        name="taskName"
                        id="company-website"
                        className="border-solid border-2 p-2 rounded-2xl border-base-200 w-60 "
                        placeholder="react responsive"
                        {...register("taskName")}
                        required
                    />

                    <label
                        htmlFor="company-website"
                        className="block text-xl mt-5 mb-2 font-medium text-gray-700"
                    >
                        Description :
                    </label>

                    <textarea
                     type="text"
                     name="description"
                     id="company-website"
                     className="border-solid border-2 p-2 rounded-2xl border-base-200 lg:w-full w-80"
                     placeholder="add your task description"
                     {...register("description")}
                     required 
                     rows="4"
                    />
                   
                   
                    <label
                        htmlFor="company-website"
                        className="block text-xl mt-8 mb-2 font-medium text-gray-700 "
                    >
                        Assignee :
                    </label>

                    <input
                        type="text"
                        name="Assignee"
                        
                        id="Assignee"
                        className="border-solid border-2 p-2 rounded-2xl border-base-200 w-60 "
                        placeholder="eg: mark don"
                        {...register("Assignee")}
                        required
                    />
                    <div className='flex flex-col lg:flex-row mb-3'>
                        <div>

                            <label
                                htmlFor="start"
                                className="block mt-3 text-xl font-medium text-gray-700"
                            >
                                Start date :
                            </label>

                            <input
                                type="date"
                                name="startDate"
                                id="startDate"
                                className="border-solid border-2 rounded-2xl p-2 mt-3 border-base-200 w-48"
                                {...register("startDate")}
                                required
                            />

                        </div>
                        <div className='lg:ml-36'>
                            <label
                                htmlFor="start"
                                className="block mt-3 text-xl font-medium text-gray-700"
                            >
                                Deadline :
                            </label>

                            <input
                                type="date"
                                name="Deadline"
                                id="Deadline"
                                className="border-solid border-2 rounded-2xl p-2 mt-3 border-base-200 w-48"
                                {...register("Deadline")}
                                required
                            />

                        </div>

                    </div>

                    <div className='flex flex-col lg:flex-row'>
                        <div>
                            <label className='text-xl font-medium text-gray-700'>

                                Priority :
                            </label>
                            <select type='text'
                                name="priority"
                                className='border-solid border-2 ml-2 p-1 mt-3  rounded-2xl border-base-200 w-56 '
                                id="selector" {...register('priority')}>
                                <option value="" disabled>...</option>
                                <option value="High">High </option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>

                            </select>

                        </div>
                        <div className='lg:ml-8'>
                            <label className='text-xl font-medium text-gray-700'>

                                Status :
                            </label>
                            <select type='text'
                                name="status"
                                className='border-solid border-2 ml-2 p-1 mt-3  rounded-2xl border-base-200 w-56 '
                                id="selector" {...register('status')}>
                                <option value="" disabled>...</option>
                                <option value="In Progress">In Progress </option>
                                <option value="In Review">In Review</option>
                                <option value="Complete">Complete</option>

                            </select>

                        </div>
                    </div>


                    <div className='flex justify-end'>
                        <div>
                            <input
                                for="my-modal"
                                type="submit"
                                value="Add"
                                className="btn btn-outline  btn-primary btn-sm px-14 mt-10"
                            />

                        </div>
                    </div>
                </form>
                <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
                    ...
                </div>
            </div>
        </div>
    );
};

export default AddTask;