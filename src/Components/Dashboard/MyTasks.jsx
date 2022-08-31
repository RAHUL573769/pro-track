import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
const MyTasks = () => {
  const [mytasks, setmyTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/mytask.json")
      .then((res) => res.json())
      .then((data) => setmyTasks(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">My Tasks</h2>

      <table class="table-fixed w-full border-collapse">
        <thead>
          <tr className="bg-[#0c4a6e] text-white text-xl">
            <th className="w-16 p-3 ">
              {" "}
              <CgProfile></CgProfile>
            </th>
            <th>Task</th>
            <th>Owner</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default MyTasks;
