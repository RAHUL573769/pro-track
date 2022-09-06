import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Profile from './Profile';

const MyProfile = () => {
        const [user]=useAuthState(auth)
        const [isRealod,setIsreload]=useState(false)
        
        const addInfo=(e)=>{
          e.preventDefault()
          const education=e.target.education.value
          const location=e.target.location.value
          const number=e.target.number.value
          const email=user?.email
          const info={education,location,number,email}
          
          console.log(info);
          fetch(`https://protrackbd.herokuapp.com/info/${email}`,{
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
            info
            })
    
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            setIsreload(true)
             
              toast.success(`Hey! ${user.displayName} Your profile Information Added`)
          })
          e.target.reset();
        }
        
        return (
            <div className='m-10 gap-20 grid grid-cols-1 lg:grid-cols-2 p-10 mb-5'>
             
                <div class="card w-96 bg-base-100 shadow-2xl ">
                <h1 className='text-2xl text-primary text-center mt-4'>Welcome {user?.displayName}!!</h1>
      <figure class="px-10 pt-10 mb-5">
        
        <img className='w-40 rounded-full' src={user.photoURL} alt="avatar" class="rounded-xl" />
      </figure>
      <div class="items-center text-justify px-10">
        {/* <h2 class="text-center text-lg font-bold lg:mb-10 ">Name:{user?.displayName}</h2> */}
        <p className='mb-2 font-semibold'>Email:{user?.email}</p>
        <Profile isRealod={isRealod}></Profile>
        </div>
        </div>
        <div className="ms-10 shadow-xl p-10">
        
        
        <form onSubmit={addInfo}>
            
          
            <div class="form-control">
              <label class="label">
                <span class="label-text">email</span>
              </label>
              <input type="text" value={user?.email} placeholder="Education Qualification here"  class="input input-bordered w-full" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Education</span>
              </label>
              <input type="text" name="education" placeholder="Education Qualification here"  class="input input-bordered w-full" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input type="text" name='location' placeholder="Your City here" class="input input-bordered w-full max-w-xs" />
              
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone No</span>
              </label>
              <input type="number" name='number' placeholder="Your Contact No  here" class="input input-bordered w-full max-w-xs" />
              
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Save</button>
            </div>
            
         
          
            
            
            </form>
      </div>
            </div>
        );
    };


export default MyProfile;