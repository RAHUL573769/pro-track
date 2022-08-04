import React from 'react';
import { GrScheduleNew } from 'react-icons/gr';
import {BiTask } from 'react-icons/bi';
import {GiProgression } from 'react-icons/gi';
import {RiTeamFill } from 'react-icons/ri';
import {GiTimeBomb } from 'react-icons/gi';

const FeaturesSection = () => {
    return (
        <div className='my-24 text-center'>
            <h1 className='text-5xl mx-10 font-bold'>Main feature of <span className='text-blue'>ProTrack</span> - project management software</h1>
            <div className='flex gap-10 justify-center my-8 text-xl'>
                <div>
                    <GrScheduleNew className='ml-14 mb-4'/>
                    <p>Resource Scheduling</p>
                </div>
                <div>
                    <BiTask className='ml-14 mb-4'/>
                    <p>Assigning Task</p>
                </div>
                <div>
                    <GiProgression className='ml-14 mb-4'/>
                    <p>Progress Evaluation</p>
                </div>
                <div>
                    <RiTeamFill className='ml-14 mb-4'/>
                    <p>Team Creation</p>
                </div>
                <div>
                    <GiTimeBomb className='ml-14 mb-4'/>
                    <p>Time Management</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;