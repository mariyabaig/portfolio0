import React from 'react';
import Draggable from 'react-draggable';

const Second = () => {
  return (
    <>
      <h1 className="text-darkblue">Things I have written about</h1>
      <div className="h-screen bg-peach grid grid-cols-2 gap-0">
        <Draggable>
          <div className="bg-white h-60 w-3/4 rounded-md  box flex flex-col group relative">
            <a href="https://baigmariya.wordpress.com/2023/06/26/how-to-use-git-like-a-pro-a-gen-zs-guide/" target="_blank" rel="noopener noreferrer">
              <h1 className="font-bold relative z-10">
                How to use Git like a Pro: A GenZ's guide
              </h1>
            </a>
            <span className="px-3">
              Mastering Git is essential for Gen Z coders looking to level up their skills. In this guide, we'll simplify
              Git's complexities and empower you to collaborate like a pro. From setting up your repository to branching,
              merging, and resolving conflicts, get ready to shine in the coding world. Embrace Git's power and conquer your
              coding dreams. Let's slay Git together!
            </span>
          </div>
        </Draggable>
        <Draggable>
          <div className="bg-white h-60 w-3/4 rounded-md  box">2</div>
        </Draggable>
        <Draggable>
          <div className="bg-white h-60 w-3/4 rounded-md  box">2</div>
        </Draggable>
        <Draggable>
          <div className="bg-white h-60 w-3/4 rounded-md  box">2</div>
        </Draggable>
      </div>
    </>
  );
};

export default Second;
