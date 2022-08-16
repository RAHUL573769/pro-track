import React, { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import AddProjectModal from "./AddProjectModal";
const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch(`https://protrackbd.herokuapp.com/projects`)
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  }, []);

  return (
    <section className="p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold font-mono">Project list</h1>
        <AddProjectModal />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 justify-items-center overscroll-y-none">
        {allProjects.map((project) => (
          <div className="card lg:max-w-lg bg-seaBlue border-l-8 border-blue text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
            <div className="card-body">
              <h2 className="card-title">{project.projectName}</h2>
              <p>
                <small className="font-semibold">{project.ownerName}</small>
              </p>
              <div className="flex justify-between font-semibold">
                <p>
                  <small>Start date: {project.startDate}</small>
                </p>
                <p>
                  <small>End date: {project.endDate}</small>
                </p>
              </div>
              <p>Tasks: {project.task}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
