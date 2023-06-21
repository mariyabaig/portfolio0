import React, { useState } from 'react';

const Experience = () => {
  const [dropdownState, setDropdownState] = useState({
    showDetails1: false,
    showDetails2: false,
  });

  const toggleDetails = (dropdownName) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
    <div className="container mx-auto bg-teal text-white w-3/4 p-10 m-10">
      {/* <h1 className="text-2xl font-bold mb-4">Mariya Baig</h1>
      <p className="mb-2">
        Indore, India • (+91) 6266929290 • mariyabaig0@gmail.com •{' '}
        <a href="https://www.linkedin.com/in/mariya-baig">linkedin.com/in/mariya-baig</a> •{' '}
        <a href="https://github.com/mariyabaig">github.com/mariyabaig</a>
      </p> */}

      <h2 className="text-lg font-bold mt-6 mb-2">PROFESSIONAL EXPERIENCE</h2>

      <div className="mb-6">
        <div className="flex flex-col items-start cursor-pointer" onClick={() => toggleDetails('showDetails1')}>
          <p className="font-bold text-xl text-peach">Associate Software Developer</p>
          <p className="text-peach">Nagarro, Gurgaon, India</p>
          <span className="bg-peach text-white p-2 rounded font-bold">Aug 2022 – Present</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ml-1 ${dropdownState.showDetails1 ? 'transform rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {dropdownState.showDetails1 && (
          <div className="ml-6 mt-2">
            <ul className="list-disc list-inside ml-4">
              <li>Built and maintained a large-scale e-commerce website, optimizing performance and scalability through code optimization and the implementation of new features with minimal supervision.</li>
              <li>Collaborated with a diverse team of designers, developers, and project managers to efficiently deliver high-quality web applications within specified timeframes and budgets.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex flex-col items-start cursor-pointer" onClick={() => toggleDetails('showDetails2')}>
          <p className="font-bold text-xl text-peach">Software Developer Trainee</p>
          <p className="text-peach">Nagarro, Gurgaon, India</p>
          <span className="bg-peach text-white p-2 rounded font-bold">Feb 2022 – Aug 2022</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ml-1 ${dropdownState.showDetails2 ? 'transform rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {dropdownState.showDetails2 && (
          <div className="ml-6 mt-2">
            <ul className="list-disc list-inside ml-4">
              <li>Acquired knowledge and skills in software development theory and practices through training.</li>
              <li>Developed and maintained small to medium-sized web applications using React, JSX, React Router, Axios, and Material UI.</li>
              <li>Gained familiarity with DynamoDB, TypeScript, Jenkins.</li>
              <li>Deployed applications on AWS using CI/CD pipelines.</li>
              <li>Collaborated with remote team members using Git for version control, code reviews, and bug fixing.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
