import React, { useEffect, useState } from "react";
import { GrAdd } from 'react-icons/gr'
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AddProjectModal from "./AddProjectModal";
import Project from "./Project";
const Projects = () => {

  const { data: allProjects, isLoading, refetch } = useQuery('project', () => fetch('http://localhost:5001/projects', {
    method: 'GET',
  }).then(res => res.json()));
  if (isLoading) {
    return <Loading />
  }
  refetch();
  return (
    <section className="p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold font-mono">Project list</h1>
        <AddProjectModal />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 justify-items-center overscroll-y-none">
        {
          allProjects.map(project => <Project key={project._id} project={project}></Project>)
        }
      </div>

    </section>
  );
};

export default Projects;
