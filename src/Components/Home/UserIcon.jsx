import React from 'react';
import image1 from '../../images/telegram.jpg';
import image2 from '../../images/gmail.png';
import image3 from '../../images/linkdin (2).png';
import image4 from '../../images/twiter.jpg';
import image11 from '../../images/github.png';
import image6 from '../../images/facebook.png';
import image7 from '../../images/google.png';
import image8 from '../../images/zoom.png';
import image12 from '../../images/calander.png';
import image10 from '../../images/meet (2).png';
import image5 from '../../images/drive.png';
import image9 from '../../images/skype.png';

const UserIcon = () => {
    return (
        <div className='mx-20 my-24'>
            <h2 className='mx-20 mt-10 text-center text-orange-400 text-4xl font-bold'>Join over 2,000 teams worldwide that are using <span className='text-blue'>Pro-track</span> to get more done.</h2>
          <div className='grid grid-cols-6 mt-10 mx-20 item-center'>
            <img className='w-32 h-24 bg-white ' src={image1} alt="" />
            <img className='w-32 h-24 bg-white ' src={image2} alt="" />
            <img className='w-32 h-24 bg-white ' src={image3} alt="" />
            <img className='w-32 h-24 bg-white ' src={image4} alt="" />
            <img className='w-32 h-24 bg-white ' src={image5} alt="" />
            <img className='w-32 h-24 bg-white ' src={image6} alt="" />
            <img className='w-32 mt-8 h-24 bg-white ' src={image7} alt="" />
            <img className='w-32 mt-8 h-24 bg-white ' src={image8} alt="" />   
            <img className='w-32 mt-8 h-24 bg-white ' src={image9} alt="" />
            <img className='w-32 mt-8 h-24 bg-white ' src={image10} alt="" />
            <img className='w-32 mt-8 h-24 bg-white ' src={image11} alt="" />
            <img className='w-32 mt-8 h-24 bg-white ' src={image12} alt="" />   
          </div>
        </div>
    );
};

export default UserIcon;