import logo from '../../../src/images/protrack.png';
import info from '../../../src/Assets/images/information (1).png';
import phone from '../../../src/Assets/images/telephone.png';
import place from '../../../src/Assets/images/placeholder.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-20 bg-gray-100">
   
   <div>
      {/* <span className="footer-title">Services</span> */}
      <img src={logo} alt="" style={{ width: 200 }} />
     <div className='p-5 '>
     <div className='flex'>
      <img className='w-5 h-5' src={info} alt=""  />
      
      <a className="link link-hover p-1">info@protrack.com</a>
      </div>
      <div className='flex'>
      <img className='w-5 h-5' src={phone} alt="" />
      <a className="link link-hover p-1">+8801826668777</a>

      </div>

     <div className='flex'>
     <img className='w-5 h-5' src={place} alt=""/>
     <a className="link link-hover p-1">Dhaka Bangladesh</a>
     </div>
      
     </div>
      {/* <a className="link link-hover">Advertisement</a> */}
    </div>
    <div>
      <span className=" font-bold text-xl text-black">Company</span>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </div>
    <div>
      <span className=" font-bold text-xl text-black">Legal</span>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </div>
    <div>
      {/* <span className="footer-title">Newsletter</span> */}
      <div className="form-control w-80">
        <label className="label">
          <span className="label-text ">
            Enter your email address
          </span>
        </label>
        <div className="relative text-purple-700">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered w-full pr-16"
          />
          <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 right-0 rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
   
   
  </footer>
   <div className="bg-white text-black text-center pb-6 text-sm py-3">
   <p className='p-2 '>Copyright &copy; ProTrack 2022</p>
 </div>
    </div>
  );
};

export default Footer;
