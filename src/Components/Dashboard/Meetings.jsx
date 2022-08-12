import React from "react";
import { useForm } from "react-hook-form";

const Meetings = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  }
  return (
    <div>

      {/* Add meeting modal part with full details */}

      <div>
        <h1 className="text-3xl text-cyan-700 text-center m-10 font-bold">Meetings</h1>

        <div>
          <h1 className="text-3xl text-cyan-500 m-10">Add New Meeting</h1>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Meeting Type</span>
              </label>
              <input type="text" placeholder="Write the type of meeting" className="input input-bordered w-full max-w-xs" {...register("meetingtype", { required: true })} />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input type="time" placeholder="Meeting time" className="input input-bordered w-full max-w-xs" {...register("meetingtime", { required: true })} />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" placeholder="Meeting Date" className="input input-bordered w-full max-w-xs" {...register("meetingdate", { required: true })} />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Project Name</span>
              </label>
              <input type="text" placeholder="Select the Project" className="input input-bordered w-full max-w-xs" {...register("project", { required: true })} />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Meeting Link</span>
              </label>
              <input type="text" placeholder="Put the meeting link here" className="input input-bordered w-full max-w-xs" {...register("meetingLink", { required: true })} />
            </div>

            <input className="btn btn-outline w-full max-w-xs mt-4" type="submit" value="Add Meeting" />

          </form>

        </div>
      </div>


      {/* Show all the meetings details here in table  */}

      <div className="mt-24">
        <div class="overflow-x-auto">
          <table class="table w-full">

            <thead>
              <tr>
                <th></th>
                <th>Meeting Type</th>
                <th>Time</th>
                <th>Date</th>
                <th>Project</th>
                <th>Meeting Link</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th>1</th>
                <td>Morning Update</td>
                <td>11:00 am</td>
                <td>01-01-22</td>
                <td>Web Server</td>
                <td>https://meet.google.com/qth-zvoa-vxq</td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Meetings;
