import React from 'react';
import Draggable from 'react-draggable';

const Second = () => {
  return (
    <div className='h-screen bg-peach'>
      <Draggable>
        <div className='bg-white h-32 w-1/3 rounded-md m-8'>2</div>
      </Draggable>
      <Draggable>
        <div className='bg-white h-32 w-1/3 rounded-md m-8'>2</div>
      </Draggable>
      <Draggable>
        <div className='bg-white h-32 w-1/3 rounded-md m-8'>2</div>
      </Draggable>
    </div>
  );
};

export default Second;
