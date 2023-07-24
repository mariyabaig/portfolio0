import React, { useState } from 'react';
import transition from "../transition";
const Experience = () => {
  const [dropdownState, setDropdownState] = useState({
    showDetails1: false,
    showDetails2: false,
    showDetails3: false,
    showDetails4: false,
    showDetails5: false,
  });

  const toggleDetails = (dropdownName) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
    <>
    <h1 className='text-3xl mt-12'>EXPERIENCE</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-lg font-bold mt-6 mb-2">PROFESSIONAL EXPERIENCE</h2>
        <div
          className={`mb-6 transition-max-height duration-300 ${
            dropdownState.showDetails1 ? 'max-h-64' : 'max-h-16'
          }`}
        >
          <div
            className="flex flex-col items-start cursor-pointer"
            onClick={() => toggleDetails('showDetails1')}
          >
            <p className="font-bold text-xl">Associate Software Developer</p>
            <p className="">Nagarro, Gurgaon, India</p>
            <span className="text-blue-600 p-1 m-1 rounded font-bold">Aug 2022 – Present</span>
          </div>
          {dropdownState.showDetails1 && (
            <div className="ml-6 mt-2">
              <ul className="list-disc list-inside ml-4">
                <li>
                  Built and maintained a large-scale e-commerce website, optimizing performance and
                  scalability through code optimization and the implementation of new features with
                  minimal supervision.
                </li>
                <li>
                  Collaborated with a diverse team of designers, developers, and project managers to
                  efficiently deliver high-quality web applications within specified timeframes and
                  budgets.
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={`mb-6 transition-max-height duration-300 ${
            dropdownState.showDetails2 ? 'max-h-64' : 'max-h-16'
          }`}
        >
          <div
            className="flex flex-col items-start cursor-pointer"
            onClick={() => toggleDetails('showDetails2')}
          >
            <p className="font-bold text-xl">Software Developer Trainee</p>
            <p className="">Nagarro, Gurgaon, India</p>
            <span className="text-blue-600 p-1 m-1 rounded font-bold">Feb 2022 – Aug 2022</span>
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

        {/* Add other professional experiences in a similar format */}
      </div>

      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-lg font-bold mt-6 mb-2">EDUCATIONAL EXPERIENCE</h2>
        <div
          className={`mb-6 transition-max-height duration-300 ${
            dropdownState.showDetails3 ? 'max-h-64' : 'max-h-16'
          }`}
        >
          <div
            className="flex flex-col items-start cursor-pointer"
            onClick={() => toggleDetails('showDetails3')}
          >
            <p className="font-bold text-xl">B.Tech (EC)</p>
            <p className="">Acropolis Institute of Technology and Research – Indore, MP</p>
            <span className="text-blue-600 p-1 m-1 rounded font-bold">2022</span>
          </div>
          {dropdownState.showDetails3 && (
            <div className="ml-6 mt-2">
              <p className="">CGPA: 7.9</p>
            </div>
          )}
        </div>

        <div
          className={`mb-6 transition-max-height duration-300 ${
            dropdownState.showDetails4 ? 'max-h-64' : 'max-h-16'
          }`}
        >
          <div
            className="flex flex-col items-start cursor-pointer"
            onClick={() => toggleDetails('showDetails4')}
          >
            <p className="font-bold text-xl">12th (CBSE)</p>
            <p className="">San Thome Academy – Dewas, MP</p>
            <span className="text-blue-600 p-1 m-1 rounded font-bold">2018</span>
          </div>
          {dropdownState.showDetails4 && (
            <div className="ml-6 mt-2">
              <p className="">CGPA: 7.0</p>
            </div>
          )}
        </div>

        <div
          className={`mb-6 transition-max-height duration-300 ${
            dropdownState.showDetails5 ? 'max-h-64' : 'max-h-16'
          }`}
        >
          <div
            className="flex flex-col items-start cursor-pointer"
            onClick={() => toggleDetails('showDetails5')}
          >
            <p className="font-bold text-xl">10th (CBSE)</p>
            <p className="">San Thome Academy – Dewas, MP</p>
            <span className="text-blue-600 p-1 m-1 rounded font-bold">2018</span>
          </div>
          {dropdownState.showDetails5 && (
            <div className="ml-6 mt-2">
              <p className="">CGPA: 7.2</p>
            </div>
          )}
        </div>

        {/* Add other educational experiences in a similar format */}
      </div>
    </div>
    </>
  );
};

export default transition(Experience);
