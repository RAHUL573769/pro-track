import React from "react";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import { useQuery } from "react-query";
import animationData from '../../lotttie/99549-review-ratings.json'
import Loading from "../Shared/Loading";

const Feedback = () => {

  const {
    register,
    handleSubmit,
    loading,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const url = `https://protrackbd.herokuapp.com/feedback`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
      });
    event.preventDefault()
  };

  if(loading){
    return <Loading/>
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row lg:gap-20">
    <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      <div >
      <div class="mx-auto w-full max-w-lg">
    <h1 class="text-4xl font-medium">Feedback</h1>
    <p class="mt-3">Email us at help@domain.com or give feedbacks here:</p>

    <form class="mt-10" onSubmit={handleSubmit(onSubmit)}>  
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="relative z-0">
          <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " {...register("name")} />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div class="relative z-0">
          <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " {...register("email")} />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div class="relative z-0 col-span-2">
          <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " {...register("message")}></textarea>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Feedback</label>
        </div>
      </div>
      <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Send</button>
    </form>
  </div>
      </div>
    </div>
  </div>
  );
};

export default Feedback;
