import React from 'react';
import transition from "../transition";
const frontendSkills = [
  { name: 'JavaScript', imageSrc: 'js.jpg' },
  { name: 'React.js', imageSrc: 'react.png' },
  { name: 'Next.js', imageSrc: 'next.jpg' },
  { name: 'Redux', imageSrc: 'redux.png' },
  { name: 'HTML5', imageSrc: 'HTML.png' },
  { name: 'CSS3', imageSrc: 'css.jpg' },
  { name: 'EJS', imageSrc: 'ejs.png' },
];

const stylingSkills = [
  { name: 'Tailwind CSS', imageSrc: 'tailwind.jpg' },
  { name: 'Bootstrap', imageSrc: 'bootstrap.jpg' },
  { name: 'Material UI', imageSrc: 'mui.png' },
];

const backendSkills = [
  { name: 'Node.js', imageSrc: 'node.png' },
  { name: 'Express.js', imageSrc: 'expressjs.png' },
  { name: 'MongoDB', imageSrc: 'mongodb.png' },
  { name: 'DynamoDB', imageSrc: 'dynamodb.png' },
  { name: 'MySQL', imageSrc: 'mysql.png' },
  { name: 'Firebase', imageSrc: 'firebase.png' },
];

const devOpsSkills = [
  { name: 'AWS EC2 Instance and S3 Bucket', imageSrc: 'aws.jpg' },
  { name: 'Jenkins', imageSrc: 'jenkins.png' },
];

const tools = [
  { name: 'Visual Studio Code', imageSrc: 'vsc.png' },
  { name: 'Postman', imageSrc: 'postman.jpg' },
  { name: 'Eclipse', imageSrc: 'eclipse.png' },
  { name: 'ThunderClient', imageSrc: 'thunderclient.png' },
];

const versionControl = [
  { name: 'Git', imageSrc: 'git.png' },
  { name: 'GitHub', imageSrc: 'github.png' },
  { name: 'GitLab', imageSrc: 'gitlab.png' },
  { name: 'Bitbucket', imageSrc: 'bitbucket.png' },
];

const projectManagement = [{ name: 'Jira', imageSrc: 'jira.png' }];

const SkillWithImage = ({ name, imageSrc }) => {
  return (
    <div className="flex items-center p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <img src={imageSrc} alt={name} className="h-16 w-16 mr-3 rounded-full object-cover bg-white p-1" />
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Frontend</h3>
            <div className="grid grid-cols-2 gap-2">
              {frontendSkills.map((skill) => (
                <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Styling</h3>
            <div className="grid grid-cols-2 gap-2">
              {stylingSkills.map((skill) => (
                <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Backend</h3>
            <div className="grid grid-cols-2 gap-2">
              {backendSkills.map((skill) => (
                <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">DevOps</h3>
            <div className="grid grid-cols-2 gap-2">
              {devOpsSkills.map((skill) => (
                <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Tools</h3>
            <div className="grid grid-cols-2 gap-2">
              {tools.map((skill) => (
                <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Version Control</h3>
            <div className="grid grid-cols-2 gap-2">
              {versionControl.map((skill) => (
                <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Project Management</h3>
            <div className="grid grid-cols-2 gap-2">
              {projectManagement.map((skill) => (
                <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(Skills);
