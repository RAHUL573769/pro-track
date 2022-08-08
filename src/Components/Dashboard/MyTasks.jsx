import React from "react";

const MyTasks = () => {
  return (
    <div>
     <div class=" text-center mt-20 ">
  <table class="table-fixed w-full  ">
   
    <thead>
      <tr className='bg-blue text-xl'>
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
     
      <tr className='bg-seaBlue'>
        <th className='py-3 '>1</th>
        <td>Front end ready</td>
        <td> Mark Don</td>
        <td>In Progress</td>
        <td>Crucial</td>
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
