import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { FaGoogle} from "react-icons/fa";
import { FaFacebookSquare} from "react-icons/fa";
import { FaTelegramPlane} from "react-icons/fa";
import { BsEnvelopeOpenFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsCaretRightSquareFill } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";


const UserIcon = () => {
    return (
        <div className='mx-20 my-24'>
            <h2 className='mx-20 mt-10 text-center text-5xl font-bold'>Join over 2,000 teams worldwide that are using</h2> <h2 className='mx-20  text-center text-5xl font-bold'><span className='text-primary'>Pro-track</span> to get more done.</h2>
          <div className='grid grid-cols-4 text-5xl font-bold  mt-10 mx-20 item-center'>
            
         <h2 className='mx-20'><GoMarkGithub> </GoMarkGithub></h2> 
          <h2 ><FaGoogle></FaGoogle></h2>
          <h2 ><FaFacebookSquare></FaFacebookSquare></h2>
          <h2><FaTelegramPlane></FaTelegramPlane></h2>
          
          
          <h2 className='mt-10 mx-20'><BsEnvelopeOpenFill></BsEnvelopeOpenFill></h2>
          <h2 className='mt-10'><BsWhatsapp></BsWhatsapp></h2>
          <h2 className='mt-10'><AiFillTwitterSquare></AiFillTwitterSquare></h2>
          <h2 className='mt-10'><BsCaretRightSquareFill></BsCaretRightSquareFill></h2>
         

          
         
          </div>
        </div>
    );
};

export default UserIcon;