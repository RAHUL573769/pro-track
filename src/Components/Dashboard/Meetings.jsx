import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Meetings = () => {
  // const [meetings, setMeetings] = useState([]);

  // useEffect(() => {
  //   fetch("https://protrackbd.herokuapp.com//meeting")
  //     .then((res) => res.json())
  //     .then((data) => setMeetings(data));
  // }, []);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  // const [meetings, setMeetings] = useState([]);

  // useEffect(() => {
  //   fetch("https://protrackbd.herokuapp.com/meeting")
  //     .then((res) => res.json())
  //     .then((data) => setMeetings(data));
  // }, []);
  const { data: meetings, isLoading,refetch } = useQuery('meeting', () => fetch('https://protrackbd.herokuapp.com/meeting',{
        method:"GET",
    }).then(res => res.json()))
    if (isLoading) {
      return <Loading />;
    }
    refetch();

  

  const onSubmit = (data) => {
    const url = `https://protrackbd.herokuapp.com/meeting`;
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
  };
  return (
    <div>
      {/* Add meeting modal part with full details */}

      <div>
        <h1 className="text-3xl text-cyan-700 text-center m-5 font-bold">
          Meetings
        </h1>

        <div className="flex justify-between px-4">
          <div>
           <h1 className="text-xl font-bold "> See all meetings</h1>
            </div>
            <div>
          <div className="text-left ">

            <label for="add-meeting-modal" className="btn btn-primary text-white">
             + Add new meeting
            </label>
          </div>

          <input
            type="checkbox"
            id="add-meeting-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box border-double border-8 border-blue-500">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-2xl text-center bg-blue-300 py-2 rounded-lg">Schedule a new meeting here!</h3>
                <label
                  className="block text-sm mt-5 mb-3 font-medium text-gray-700"
                >
                  Meeting:
                </label>

                <input
                  type="text"

                  name="meetingtype"
                  placeholder="Write the type of meeting"
                  className="input  border-2 border-green-400 w-full "
                  {...register("meetingtype")}
                />

                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <input
                  type="time"
                  name="meetingtime"
                  placeholder="Meeting time"
                  className="input  border-2 border-green-400 w-full "
                  {...register("meetingtime", { required: true })}
                />

                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="meetingdate"
                  placeholder="Meeting Date"
                  className="input  border-2 border-green-400 w-full "
                  {...register("meetingdate", { required: true })}
                />

                <label className="label">
                  <span className="label-text">Project Name</span>
                </label>
                <input
                  type="text"
                  name="project"
                  placeholder="Select the Project"
                  className="input  border-2 border-green-400 w-full "
                  {...register("project", { required: true })}
                />


                <label className="label">
                  <span className="label-text">Meeting Link</span>
                </label>
                <input
                  type="text"
                  name="meetingLink"
                  placeholder="Put the meeting link here"
                  className="input  border-2 border-green-400 w-full "
                  {...register("meetingLink", { required: true })}
                />
                <div className="modal-action flex justify-between">
                  <label for="add-meeting-modal" className="btn bg-red-500 btn-sm">
                    Cancel
                  </label>
                  <input
                    for="add-meeting-modal"
                    type="submit"
                    value="submit"
                    className="btn btn-success btn-sm"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Show all the meetings details here in table  */}

      {meetings.map((meeting, index) => (
        <div className="mt-5 px-4">
          <div className="overflow-x-auto">
            <table className="table w-full">
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
                <tr className="hover:border-b border-blue-600">
                  <th>{index + 1}</th>
                  <td>{meeting.meetingtype}</td>
                  <td>{meeting.meetingtime}</td>
                  <td>{meeting.meetingdate}</td>
                  <td>{meeting.project}</td>
                  <td><a href={meeting.meetingLink}>{meeting.meetingLink}</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meetings;
