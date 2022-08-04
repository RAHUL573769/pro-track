import React from "react";
import image1 from "../../images/telegram.jpg";
import image2 from "../../images/gmail.png";
import image3 from "../../images/linkdin (2).png";
import image4 from "../../images/twiter.jpg";
import image11 from "../../images/github.png";
import image6 from "../../images/facebook.png";
import image7 from "../../images/google.png";
import image8 from "../../images/zoom.png";
import image12 from "../../images/calander.png";
import image10 from "../../images/meet (2).png";
import image5 from "../../images/drive.png";
import image9 from "../../images/skype.png";

const UserIcon = () => {
  return (
    <div className='flex bg-navyBlue py-52 my-24 mx-16 rounded-3xl'>
      <div>
        <h2 className='mx-20 mt-10 text-center text-orange-400 text-4xl font-bold'>Connect to <span className='text-primary'>Pro-track</span> with your preferred apps</h2>
      </div>
      <div className='grid grid-cols-6 mx-20 item-center relative'>
       <img className='w-16 absolute rounded-full top-32 -left-16' src={image4} alt="" />
        <img className='w-16 absolute left-48 bottom-28 rounded-full' src={image5} alt="" />
        <img className='w-16 absolute bottom-40 left-16' src={image6} alt="" />
        <img className='w-16 absolute top-48 left-16' src={image7} alt="" />
        <img className='w-16 absolute top-20 left-20 rounded-full' src={image8} alt="" />
        <img className='w-16 absolute top-32 left-48' src={image9} alt="" />
        <img className='w-16' src={image10} alt="" />
        <img className='w-16 absolute -left-24 bottom-32 bg-white rounded-full' src={image11} alt="" />
      </div>
    </div>
  );
};

export default UserIcon;
