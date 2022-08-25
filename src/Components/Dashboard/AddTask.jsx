import React from 'react';
import { useForm } from "react-hook-form";


const AddTask = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, event) => {
        console.log(data)
        const url = `https://protrackbd.herokuapp.com/issues`;
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
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
    return (
        <div class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none lg:w-[950px] w-96" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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
            <div className='flex flex-col lg:flex-row mb-3'>
                <div>

                    <label
                        htmlFor="company-website"
                        className="block text-xl mt-5 mb-2 font-medium text-gray-700 "
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

                </div>
                <div className='lg:ml-16'>
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
    );
};

export default AddTask;