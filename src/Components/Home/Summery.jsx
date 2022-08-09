import React from "react";
import packages from "../../Assets/images/packages.jpg";
import protrack from "../../Assets/images/pro1.jpg";
import discover from "../../Assets/images/discover.jpg";
import { Link } from "react-router-dom";
const Summery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-16  my-16 justify-items-center">
      <div className="card max-w-lg bg-[#eaf2d7] shadow-xl transform transition duration-500 hover:scale-110">
              <figure>
               
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold">Track Problem</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magni vitae velit nobis sint est, laudantium adipisci vero facilis voluptas esse iure nemo atque commodi illo, fuga aperiam ratione nostrum?
                  Saepe, ea. Cumque ratione modi explicabo, expedita adipisci minus commodi repellat. A porro unde dignissimos ab nobis possimus? Similique rerum dolorum et quasi inventore pariatur dolore vitae. Reprehenderit, quas eum?

                </p>
                <div className="card-actions">
                  
                </div>
              </div>
            </div>
            <div className="card max-w-lg bg-[#f6efe9] shadow-xl transform transition duration-500 hover:scale-110">
              <figure>
               
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold">Solution</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus aspernatur officia blanditiis alias voluptas magnam in dolorem quod. Exercitationem magni obcaecati nisi! Molestias impedit, iste nam fugit iure voluptas!
                  A beatae, qui dicta fugiat possimus praesentium eaque labore suscipit facilis earum dolore facere. Suscipit, aliquam vel. Dolores modi facere, rem maxime, praesentium laboriosam veniam beatae ullam similique voluptatibus quas?
                </p>
                <div className="card-actions">
               
                </div>
              </div>
            </div>           
          
      </div>
  );
};

export default Summery;
