import React from 'react';
import packages from '../../Assets/images/packages.jpg'
import protrack from '../../Assets/images/pro1.jpg'
import discover from '../../Assets/images/discover.jpg'
const Summery = () => {
    return (
        <>
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10  mx-10 '>
        
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={packages} class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 className='text-3xl font-bold'>See Pro-Track Packages</h2>
    <p>Choose Your package</p>
    <div class="card-actions">
      <button class="btn btn-secondary">See Packages</button>
    </div>
  </div>
</div><div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src ={protrack}  class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 className='text-3xl font-bold'>What is Pro-Track</h2>
    <p>Pro-Track is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.</p>
    <div class="card-actions">
      <button class="btn btn-secondary">Tour Pro-track</button>
    </div>
  </div>
</div><div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={discover} class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 className='text-3xl font-bold'>Discover Pro-Track</h2>
    <p>The productivity tool teams love, paired with the features and security needed for scale.</p>
    <div class="card-actions">
      <button class="btn btn-secondary">Learn More</button>
    </div>
  </div>
</div>
       </div>
 <div className='text-center mt-10 mx-10 px-10'>
       <h2 className='text-5xl font-bold '>It’s more than work. It’s a way of working together.</h2>
       <p  className='text-3xl mt-5'>Start with a <span className='text-secondary'>Pro-Track</span> board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
       </div>
       </>
    );
};

export default Summery;