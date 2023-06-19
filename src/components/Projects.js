
import React from 'react';
import l from '../assets/b.png';
import la from '../assets/4.png';
import h from '../assets/h.png';
import t from '../assets/t.png';
import t4 from '../assets/t4.png';
import t2 from '../assets/t2.png';

const Projects = () => {
  const images = [l, la, h, t, t4, t2];
  const textData = [
    {
      title: 'Project Title 1',
      description: 'Project description goes here 1.',
    },
    {
      title: 'Project Title 2',
      description: 'Project description goes here 2.',
    },
    {
      title: 'Project Title 3',
      description: 'Project description goes here 3.',
    },
    {
      title: 'Project Title 4',
      description: 'Project description goes here 4.',
    },
    {
      title: 'Project Title 5',
      description: 'Project description goes here 5.',
    },
    {
      title: 'Project Title 6',
      description: 'Project description goes here 6.',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="flex justify-start">
                <img src={image} alt="Project" className="w-full h-full" />
              </div>
              <div className="flex justify-end">
                <div className="text-left p-4">
                  <h2 className="text-2xl font-bold">{textData[index].title}</h2>
                  <p className="text-gray-600">{textData[index].description}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-end">
                <div className="text-right p-4">
                  <h2 className="text-2xl font-bold">{textData[index].title}</h2>
                  <p className="text-gray-600">{textData[index].description}</p>
                </div>
              </div>
              <div className="flex justify-start">
                <img src={image} alt="Project" className="w-full h-full" />
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
 
