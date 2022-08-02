import React from "react";

const Introduction = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/tqFYXMP/luis-villasmil-ml-Vb-Mbxf-WI4-unsplash.jpg"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mx-10">
            <h1 className="text-5xl font-bold">
              Make Your Task More Easy With{" "}
            </h1>
            <h1 className="text-5xl font-bold text-primary">Pro-Track</h1>
            <p className="text-2xl">
              Protrack is a web and mobile Task management platform designed to
              help teams organize, track, and manage their task and also helps
              teams move work forward. Collaborate, manage projects, and reach
              new productivity peaks. From high rises to the home office, the
              way your team works is unique—accomplish it all with ProTrack.It
              is produced by Binary Brains.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;