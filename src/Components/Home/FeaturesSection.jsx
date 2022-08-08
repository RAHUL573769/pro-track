import React from 'react';
import { GrScheduleNew } from 'react-icons/gr';
import { BiTask } from 'react-icons/bi';
import { GiProgression } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';

const FeaturesSection = () => {
    return (
        <section className='flex justify-center'>
            <div className='card bg-base-100  rounded-none drop-shadow-2xl p-10 gap-5  grid grid-cols-1 lg:grid-cols-4' style={{'width': '800px'}}> 
                    <div>
                        <GrScheduleNew  />
                        <h1 className='font-bold text-sm'>Resource Scheduling</h1>
                        <p className='text-sm'>In our software team leaders can allocate and assign people tasks without over (or under) allocating their schedules.</p>
                    </div>

                    <div>
                        <BiTask />
                        <p className='font-bold text-sm'>Assigning Task</p>
                    </div>
                
                    <div>
                        <GiProgression />
                        <p className='font-bold text-sm'>Progress Evaluation</p>
                    </div>
               
                    <div>
                        <RiTeamFill />
                        <h1 className='font-bold text-sm'>Team Creation</h1>
                        <p className='text-sm'>In ou application user can create a team. So that the team can be assigned to varoius projects.</p>
                    </div>
              
            </div>
        </section>
    );
};

export default FeaturesSection;

