import React from 'react';
import { GrAdd } from 'react-icons/gr';
import { useForm } from 'react-hook-form';

const AddProjectModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className='grid justify-content-center'>
            {/* <!-- The button to open modal --> */}
            <label for="my-modal" class="btn btn-success font-bold mb-3"><GrAdd className="mr-2"></GrAdd>Create Project</label>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                            Project Name:
                        </label>

                        <input
                            type="text"
                            name="project-title"
                            id="company-website"
                            className="border-solid border-2 border-base-200 w-full "
                            placeholder="App development"
                            {...register("project-title")}
                        />

                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>

                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="you@example.com"
                            defaultValue={''}
                            {...register("about")}
                        />
                        <label htmlFor="owner" className='"block text-sm font-medium text-gray-700'>Owner Name:</label>

                        <input
                            type="text"
                            name="owner"
                            id="owner"
                            placeholder='Mark Don'
                            className="border-solid border-2 border-base-200 w-56 "
                            {...register("owner")}
                        />

                        <div className='flex'>
                            <div>
                                <label htmlFor="start" className='"block text-sm font-medium text-gray-700'>Starting Date:</label>

                                <input
                                    type="date"
                                    name="start-date"
                                    id="start"
                                    className="border-solid border-2 border-base-200 w-56 "
                                    {...register("start-date")}
                                />

                            </div>

                            <div>
                                <label htmlFor="end" className='"block text-sm font-medium text-gray-700'>Ending Date:</label>

                                <input
                                    type="date"
                                    name="end-date"
                                    id="end"
                                    className="border-solid border-2 border-base-200 w-56 "
                                    {...register("end-date")}
                                />
                            </div>
                        </div>

                        <label htmlFor="owner" className='"block text-sm font-medium text-gray-700'>Team Name:</label>

                        <input
                            type="text"
                            name="team"
                            id="team"
                            placeholder='Mark Don'
                            className="border-solid border-2 border-base-200 w-56 "
                            {...register("team")}
                        />

                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Add members
                        </label>

                        <textarea
                            id="members"
                            name="members"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="you@example.com"
                            defaultValue={''}
                            {...register("members")}
                        />

                        <div class="modal-action flex justify-between">
                            <label for="my-modal" class="btn">Cancel</label>
                            <input type="submit" value='submit' className='btn'/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProjectModal;

// <div>
//     <label for="create-project" class="btn btn-success font-bold"><GrAdd className="mr-2"></GrAdd>Create Project</label>
//     <input type="checkbox" id="create-project" class="modal-toggle " />
//     <div class="modal lg:ml-60 mt-10 overflow-hidden">
//         <div class="modal-box max-w-lg w-11/12 lg:max-w-5xl">
//             <h3 class="font-bold text-lg">Hello user! Create Your project here.</h3>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className='grid grid-cols-1 lg:grid-cols-2'>
//                     <div className='my-3'>
//                         <div className="mt-5 md:mt-0 md:col-span-2 p-2">
//                             <div className="shadow sm:rounded-md sm:overflow-hidden">
//                                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                                     <div className="grid grid-cols-3 gap-6">
//                                         <div className="col-span-3 sm:col-span-2">
//                                             <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
//                                                 Project Name:
//                                             </label>
//                                             <div className="mt-1 flex rounded-md shadow-sm">
//                                                 <input
//                                                     type="text"
//                                                     name="project-title"
//                                                     id="company-website"
//                                                     className="border-solid border-2 border-base-200 w-full "
//                                                     placeholder="App development"
//                                                     {...register("project-title")}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <label htmlFor="about" className="block text-sm font-medium text-gray-700">
//                                             Description
//                                         </label>
//                                         <div className="mt-1">
//                                             <textarea
//                                                 id="about"
//                                                 name="about"
//                                                 rows={3}
//                                                 className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
//                                                 placeholder="you@example.com"
//                                                 defaultValue={''}
//                                                 {...register("about")}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <label htmlFor="owner" className='"block text-sm font-medium text-gray-700'>Owner Name:</label>
//                                         <div className="mt-1 flex rounded-md shadow-sm">
//                                             <input
//                                                 type="text"
//                                                 name="owner"
//                                                 id="owner"
//                                                 placeholder='Mark Don'
//                                                 className="border-solid border-2 border-base-200 w-56 "
//                                                 {...register("owner")}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <label htmlFor="start" className='"block text-sm font-medium text-gray-700'>Starting Date:</label>
//                                         <div className="mt-1 flex rounded-md shadow-sm">
//                                             <input
//                                                 type="date"
//                                                 name="start-date"
//                                                 id="start"
//                                                 className="border-solid border-2 border-base-200 w-56 "
//                                                 {...register("start-date")}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <label htmlFor="end" className='"block text-sm font-medium text-gray-700'>Ending Date:</label>
//                                         <div className="mt-1 flex rounded-md shadow-sm">
//                                             <input
//                                                 type="date"
//                                                 name="end-date"
//                                                 id="end"
//                                                 className="border-solid border-2 border-base-200 w-56 "
//                                                 {...register("end-date")}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='my-4'>
//                         <div className="shadow sm:rounded-md sm:overflow-hidden">
//                             <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                                 <div>
//                                     <label htmlFor="owner" className='"block text-sm font-medium text-gray-700'>Team Name:</label>
//                                     <div className="mt-1 flex rounded-md shadow-sm">
//                                         <input
//                                             type="text"
//                                             name="team"
//                                             id="team"
//                                             placeholder='Mark Don'
//                                             className="border-solid border-2 border-base-200 w-56 "
//                                             {...register("team")}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="about" className="block text-sm font-medium text-gray-700">
//                                         Add members
//                                     </label>
//                                     <div className="mt-1">
//                                         <textarea
//                                             id="members"
//                                             name="members"
//                                             rows={3}
//                                             className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
//                                             placeholder="you@example.com"
//                                             defaultValue={''}
//                                             {...register("member")}
//                                         />
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="modal-action flex justify-between">
//                     <label for="create-project" class="btn">Cancel</label>
//                     <input type="submit" value='submit' />
//                 </div>
//             </form>
//         </div>
//     </div>
// </div>


