import React from "react";
import packages from "../../Assets/images/packages.jpg";
import protrack from "../../Assets/images/pro1.jpg";
import discover from "../../Assets/images/discover.jpg";
import { Link } from "react-router-dom";
const Summery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-16 my-16">
      <div className="card max-w-lg bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
              <figure>
                <img src={packages} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold">Discover Pro-Track</h2>
                <p>
                  The productivity tool teams love, paired with the features and
                  security needed for scale.
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card max-w-lg bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
              <figure>
                <img src={protrack} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold">Discover Pro-Track</h2>
                <p>
                  The productivity tool teams love, paired with the features and
                  security needed for scale.
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>           
            <div className="card max-w-lg bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
              <figure>
                <img src={discover} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold">Discover Pro-Track</h2>
                <p>
                  The productivity tool teams love, paired with the features and
                  security needed for scale.
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>


      </div>
  );
};

export default Summery;
