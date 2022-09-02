import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
import Task from "./Task";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyTasks = () => {

  const [status, setStatus] = useState();
  const [user] = useAuthState(auth)


  const { data: myTask, isLoading, refetch } = useQuery('task', () => fetch(`https://protrackbd.herokuapp.commyIssues?email=${user?.email}`, {
    method: 'GET',
  }).then(res => res.json()));

  console.log(myTask);


  if (isLoading) {
    return <Loading />
  }
  refetch()

  return (
    <div className="mx-3">
      <h2 className="text-4xl font-bold p-2 text-violet-700">My Tasks</h2>
     
        {
          myTask.map(task => <Task key={task._id} task={task}></Task>)
        }
      
    </div>
  );
};

export default MyTasks;
