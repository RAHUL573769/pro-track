import React, { useState } from "react";
import {GrAdd} from 'react-icons/gr'
import AddProjectModal from "./AddProjectModal";
const Projects = () => {
  return (
    <div>
      <div className="mb-10">
     <div className="flex justify-between mb-5">
     <div className="text-3xl font-semibold font-mono">Project list</div>

     <AddProjectModal></AddProjectModal>

     </div>
    <div className="grid lg:grid-cols-3 grid-col-1 lg:gap-6 items-center">
    <div class="card w-96 bg-cream text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
  <div class="card-body">
    <h2 class="card-title">Project title</h2>
    <p><small className="font-semibold">Owner: Mark don</small></p>
    <div className="flex justify-between font-semibold">
      <p>Start date: 9/8/2022</p>
      <p>End date:12/82022</p>
    </div>
    <p>Tasks: 7</p>
    
  </div>
    </div>
    <div class="card w-96 bg-cream text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
  <div class="card-body">
    <h2 class="card-title">Project title</h2>
    <p><small className="font-semibold">Owner: Mark don</small></p>
    <div className="flex justify-between font-semibold">
      <p>Start date: 9/8/2022</p>
      <p>End date:12/82022</p>
    </div>
    <p>Tasks: 7</p>
    
  </div>
    </div>
    <div class="card w-96 bg-cream text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
  <div class="card-body">
    <h2 class="card-title">Project title</h2>
    <p><small className="font-semibold">Owner: Mark don</small></p>
    <div className="flex justify-between font-semibold">
      <p>Start date: 9/8/2022</p>
      <p>End date:12/82022</p>
    </div>
    <p>Tasks: 7</p>
    
  </div>
    </div>
    <div class="card w-96 bg-cream text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
  <div class="card-body">
    <h2 class="card-title">Project title</h2>
    <p><small className="font-semibold">Owner: Mark don</small></p>
    <div className="flex justify-between font-semibold">
      <p>Start date: 9/8/2022</p>
      <p>End date:12/82022</p>
    </div>
    <p>Tasks: 7</p>
    
  </div>
    </div>
    <div class="card w-96 bg-cream text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
  <div class="card-body">
    <h2 class="card-title">Project title</h2>
    <p><small className="font-semibold">Owner: Mark don</small></p>
    <div className="flex justify-between font-semibold">
      <p>Start date: 9/8/2022</p>
      <p>End date:12/82022</p>
    </div>
    <p>Tasks: 7</p>
    
  </div>
    </div>
    <div class="card w-96 bg-cream text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
  <div class="card-body">
    <h2 class="card-title">Project title</h2>
    <p><small className="font-semibold">Owner: Mark don</small></p>
    <div className="flex justify-between font-semibold">
      <p>Start date: 9/8/2022</p>
      <p>End date:12/82022</p>
    </div>
    <p>Tasks: 7</p>
    
  </div>
    </div>
   
    
</div>
    </div>

    </div>
  );
};

export default Projects;
