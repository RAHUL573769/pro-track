import React from 'react';


const Inbox = () => {
    return (
        <div className='flex p-3'>
            <div className='flex-auto w-32'>
                <h1 className='text-center'>user</h1>
            </div>
            <div className='flex-auto w-64'>
                <h1 className='text-center'>Conversation</h1>
            </div>
        </div>
    );
};

export default Inbox;