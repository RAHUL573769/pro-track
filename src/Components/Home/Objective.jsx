import React from "react";
import objective from "../../Assets/images/objective.jpg";

const Objective = () => {
  return (
    <section className="my-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center bg-slate-300">
        <div class="card drop-shadow-2xl w-60 h-80 lg:ml-52 bg-base-100 shadow-xl top-40">
         <div className="border-solid border-8 border-t-sky-500 border-r-indigo-700 border-l-sky-500 border-b-indigo-700 border rounded-lg h-80 my-3 mx-3 text-center">
         <div class="card-body">
            <h2 class="text-2xl font-bold mt-10">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
         </div>
        </div>
        <div class="card w-60 drop-shadow-2xl h-80 bg-base-100 shadow-xl top-40">
          <div className="border-solid border-8 border-t-cyan-500 border-r-emerald-400 border-l-cyan-500 border-b-emerald-400 border rounded-lg h-80 my-3 mx-3 text-center">
          <div class="card-body">
            <h2 class="text-2xl font-bold mt-10">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          </div>
        </div>
        <div class="card w-60 h-80 drop-shadow-2xl bg-base-100 lg:mr-52 shadow-xl top-40">
         <div className="border-solid border-8 border-t-teal-300 border-r-lime-300 border-l-teal-300 border-b-lime-300 border rounded-lg h-80 my-3 mx-3 text-center">
         <div class="card-body">
            <h2 class="text-2xl font-bold mt-10">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
         </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-sky-400 to-lime-300 h-[300px] ">
      </div>
    </section>
  );
};

export default Objective;
