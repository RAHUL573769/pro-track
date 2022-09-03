import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import AddProjectModal from "./AddProjectModal";
import DashboardHome from "./DashboardHome";
import Project from "./Project";
const Projects = () => {

  const [user] = useAuthState(auth);
  const email = user.email;

  
  const {
    data: allProjects,
    isLoading,
    refetch,
  } = useQuery("project", () =>
    fetch(`https://protrackbd.herokuapp.com/projects?email=${email}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  console.log(allProjects);

  if (isLoading) {
    return <Loading />;
  }
  
  refetch();

  console.log(allProjects);

  const handleDelete = (id) => {
    const url = `https://protrackbd.herokuapp.com/projects/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = allProjects.filter((project) => project._id !== id);
        refetch();
      });
  };

  return (
    <section className="lg:p-10 m-5">
      <div className="flex justify-between mb-4">
        <h1 className="lg:text-3xl text-xl font-semibold font-mono mt-5">
          Project list
        </h1>
        <AddProjectModal />
      </div>
      {
        allProjects.length===0 ? <p className="text-yellow-500 text-xl text-center mt-32">You don't have any projects.. Please add a project</p> :
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 justify-items-center overscroll-y-none">
        {allProjects.map((project) => (
          <Project
            key={project._id}
            project={project}
            handleDelete={handleDelete}
          ></Project>
        ))}
      </div> 
      }
      
     
    </section>
  );
};

export default Projects;
