import React from "react";
import "./hero.css";
import hero from '../../Assets/hero.svg';


const Hero = () => {
  return (
    <div>
      <div class="zero hero pt-12 min-h-screen bg-base-100 border-b border-neutral">
        <div class="hero-content p-0 flex-col-reverse lg:flex-row-reverse">
          <img className="lg:w-5/12 m-12" src={hero} />
          <div className="w-7/12 m-12">
            <h1 class="text-5xl text-white font-bold font-poppins drop-shadow-lg text-center lg:text-left">ProTrack</h1>

            <p class="py-6 font-sans text-2xl text-center lg:text-left">
              "ProTrack is an Issue Tracking website for the developers. Here developers can create their team and work as many days they want with their team with many projects."
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;