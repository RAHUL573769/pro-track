import React from "react";

import resource from "../../Assets/images/schedule.png";
import evaluation from "../../Assets/images/evaluation.png";
import assign from "../../Assets/images/assignment.png";

const FeaturesSection = () => {
  return (
    <section className="rounded-xl">
      <div className=" bg-background rounded-xl drop-shadow-2xl p-14 gap-5  grid grid-cols-1 lg:grid-cols-3  ">
        <div className="p-10">
          <h1 className="text-5xl text-header">Explore what we offer</h1>
          <button className="btn btn-active btn-clr-Primary  w-40 mt-5">
            Explore more
          </button>
        </div>
        <div className="p-10">
          <p className="text-paragraph">
            ProTrack is issue tracking website for the modern developers. Here this website is much flexible and easier to use for the every developers. Even freshers can also work here as a team easily. All the required things we managed here so easily that it will be too much helpful for all the developers.
          </p>
        </div>
        <div className="p-10">
          <p className="text-paragraph">
            Team work is a most important part for the developers. They develop many projects for the clients. Here every developers can work as a team member. In a team member they can provide their roles in the team. Their will be one leader who will lead the team. The leader will check all the process and assign the task to members.
          </p>
        </div>

        <div className=" bg-white rounded-xl drop-shadow-2xl p-10">
          <img className="w-16" src={resource} alt="" />
          <h1 className="font-bold text-2xl text-header mt-2">
            Resource Scheduling
          </h1>
          <p className="text-sm  font-bold text-paragraph">
            In our software team leaders can allocate and assign people tasks
            without over (or under) allocating their schedules. They can see their task in their dashboard with all the required information.
          </p>
        </div>

        <div className="bg-white rounded-xl drop-shadow-2xl p-10">
          <img className="w-16" src={assign} alt="" />
          <h1 className="font-bold text-2xl text-header mt-2">
            Assigning Task
          </h1>
          <p className="font-bold text-sm text-paragraph">
            ProTrack is a software where developers are checking their process. The leader can here assign task to the team members and the members can see their assigned and will complete the task as follows.
          </p>
        </div>

        <div className="bg-white rounded-xl drop-shadow-2xl p-10">
          <img className="w-16" src={evaluation} alt="" />
          <h1 className="font-bold text-2xl text-header mt-2">
            Progress E valuation
          </h1>
          <p className="font-bold text-sm text-paragraph">
            Using the protrack the leaders can evaluate their team members and all the assigning task. Here every members can be evaluate easily and check all the working process here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
