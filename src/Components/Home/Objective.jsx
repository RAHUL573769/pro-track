import React from "react";
import objective from "../../Assets/images/objective.jpg";

const Objective = () => {
  return (
    <div className=" hero my-14 bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={objective}
          alt=" "
          className="max-w-lg rounded-lg shadow-2xl mx-10"
        />
        <div>
          <h1 className="text-5xl font-bold">Our Goal and Objectives</h1>
          <p className="py-6 text-2xl ">
            Our objective is As an important part of project planning, it
            includes identifying, planning, monitoring, and following up on the
            various activities involved in completing a particular job.
            Unofficially, however, task management can refer to any system that:
            Helps you achieve your individual goals .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objective;
