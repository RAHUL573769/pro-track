import image4 from "../../images/twiter.jpg";
import image11 from "../../images/github.png";
import image6 from "../../images/facebook.png";
import image7 from "../../images/google.png";
import image8 from "../../images/zoom.png";
import image10 from "../../images/meet (2).png";
import image5 from "../../images/drive.png";
import image9 from "../../images/skype.png";

const ConnectApps = () => {
    return (
        <div className="bg-background lg:p-24 sm:p-2 grid lg:grid-cols-2 sm:grid-cols-1">
            <div>
                <h2 className='lg:mx-20 mt-24 text-center text-paragraph text-2xl lg:text-4xl font-bold'>Connect to <span className='text-header font-extrabold'>Pro-Track</span> with your preferred apps</h2>

            </div>
            <div>
                <div className='grid lg:grid-cols-6 lg:mx-20 my-32 mr-24 sm:max-h-20 sm:max-w-sm item-center relative'>
                    <img className='w-16 lg:absolute rounded-full top-40 -left-20' src={image4} alt="" />
                    <img className='w-16 lg:absolute left-64 rounded-full ' src={image5} alt="" />
                    <img className='w-16 lg:absolute bottom-32  left-16' src={image6} alt="" />
                    <img className='w-16 lg:absolute top-40 left-16' src={image7} alt="" />
                    <img className='w-16 lg:absolute left-56 bottom-24 rounded-full' src={image8} alt="" />
                    <img className='w-16 lg:absolute top-28 left-48' src={image9} alt="" />
                    <img className='w-16 mr-10' src={image10} alt="" />
                    <img className='w-16 absolute -left-24  bottom-32 bg-white rounded-full' src={image11} alt="" />
                </div>

            </div>


        </div>
    );
};

export default ConnectApps;