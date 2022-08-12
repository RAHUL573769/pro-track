import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch('https://protrackbd.herokuapp.com/meeting')
      .then(res => res.json())
      .then(data => setMeetings(data))
  }, [])

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  }
  return (
    <div>

      {/* Add meeting modal part with full details */}

      <div>
        <h1 className="text-3xl text-cyan-700 text-center m-10 font-bold">Meetings</h1>


        {/* <div>

          <div className="text-center">
            <label for="my-modal" class="btn modal-button">Add new meeting</label>
          </div>

          <input type="checkbox" id="my-modal" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box">
              <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <h1 className="text-xl text-red-700 font-semibold text-center">Add meeting for the project</h1>
                <input type="text" placeholder="Meeting Type" className="input input-bordered w-full max-w-xs" />
                <input type="time" placeholder="Meeting Time" className="input input-bordered w-full max-w-xs" />
                <input type="date" placeholder="Meeting Date" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Pick Project" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Meeting Link" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Add" className="btn btn-secondary w-full max-w-xs" />
              </form>
            </div>
          </div>
        </div> */}

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

      {
        meetings.map((meeting, index) =>

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
                    <th>{index + 1}</th>
                    <td>{meeting.meetingType}</td>
                    <td>{meeting.time}</td>
                    <td>{meeting.date}</td>
                    <td>{meeting.projectName}</td>
                    <td>{meeting.meetingLink}</td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
        )
      }

    </div>
  );
};

export default Meetings;
