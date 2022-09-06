import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Profile = ({isRealod}) => {
    const [myInfo,setMyinfo]=useState([])
   console.log(isRealod)
   const [user]=useAuthState(auth)
    useEffect(()=>{
        const email=user?.email
      console.log(email)
     
        fetch(`http://localhost:5001/userinfo?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
           
            setMyinfo(data)
        })
    
    },[user,isRealod])
    return (
                   
        <div>
          <h6 className='mb-2 font-semibold'>Educational Qualification:    <span className='text-xl text-primary'>{myInfo?.info?.education}</span></h6>
          <h6 className='mb-2 font-semibold'>Your Country: <span className='text-xl text-primary'>{myInfo?.info?.location}</span></h6>
          <h6 className='mb-2 font-semibold'>Your Contact No:  <span className='text-xl text-primary'>{myInfo?.info?.number}</span></h6>
        </div>
    );
};


export default Profile;