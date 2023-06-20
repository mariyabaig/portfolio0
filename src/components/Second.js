import React from 'react';
import Draggable from 'react-draggable';

const Second = () => {
  return (
    <div className='h-screen bg-peach'>
        <h1 className='text-darkblue'>Things I have written about</h1>
      <Draggable>
        <div className='bg-white h-60 w-1/3 rounded-md m-8 box'>2</div>
      </Draggable>
      <Draggable> 
        <div className='bg-white h-60 w-1/3 rounded-md m-8 box'>2</div>
      </Draggable>
      <Draggable>
        <div className='bg-white h-60 w-1/3 rounded-md m-8 box'>2</div>
      </Draggable>
    </div>
  );
};

export default Second;
