import React from "react";

const MyTasks = () => {
  return (
    <div>
     <div class=" text-center mb-5">
  <table class="table-fixed w-full  ">
   
    <thead>
      <tr className='bg-black text-white text-xl'>
        <th>Completed</th>
        <th className='p-6'>#</th>
        <th>Task</th>
        <th>Assigned by</th>
        <th>Status </th>
        <th>Priority</th>
        <th>Starting Date</th>
        <th>End Date</th>
      </tr>
    </thead>
    <tbody className='border-2 border-collapse-'>
     
      <tr className='bg-base-200'>
        <th> <input type="checkbox" name="" id="" /> </th>
        <th className='py-3 '>1</th>
        <td>Front end ready</td>
        <td> Mark Don</td>
        <td>
          <select name="" id="" className="bg-base-200">
            <option value="">-</option>
            <option value="">Pending</option>
            <option value="">In progress</option>
            <option value="">Completed</option>
          </select>
        </td>
        <td>High</td>
        <td>2/8/22</td>
        <td>6/8/22</td>
      </tr>
    
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyTasks;
