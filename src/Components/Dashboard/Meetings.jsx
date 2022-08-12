import React from "react";

const Meetings = () => {
  return (
    <div>

      {/* Add meeting modal part with full details */}

      <div>
        <h1 className="text-3xl text-cyan-700 text-center m-10 font-bold">Meetings</h1>

        <div>

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
