import logo from '../../../src/images/protrack.png';

const Footer = () => {
  return (
    <div className='p-10 bg-baseDark'>
      <footer className="footer p-10 text-white">
        <div>
          {/* <span className="footer-title">Services</span> */}
          <img src={logo} alt="" style={{ width: 200 }} />
          <a className="link link-hover p-1">info@protrack.com</a>
          <a className="link link-hover p-1">+8801826668777</a>
          <a className="link link-hover p-1">Dhaka Bangladesh</a>
          {/* <a className="link link-hover">Advertisement</a> */}
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          {/* <span className="footer-title">Newsletter</span> */}
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative text-purple-700">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-baseDark text-white text-center pb-6 text-sm">
        <p>Copyright &copy; ProTrack 2022</p>
      </div>
    </div>
  );
};

export default Footer;
