import React from 'react';

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
    <div className="flex flex-col items-center justify-center mx-4">
      <img src={imageSrc} alt={name} className="h-16 w-16 mb-2" />
      <span className="text-sm">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      <h3 className="text-lg font-bold mb-2">Frontend</h3>
      <div className="flex flex-wrap">
        {frontendSkills.map((skill) => (
          <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>

      <h3 className="text-lg font-bold mb-2">Styling</h3>
      <div className="flex flex-wrap">
        {stylingSkills.map((skill) => (
          <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>

      <h3 className="text-lg font-bold mb-2">Backend</h3>
      <div className="flex flex-wrap">
        {backendSkills.map((skill) => (
          <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>

      <h3 className="text-lg font-bold mb-2">DevOps</h3>
      <div className="flex flex-wrap">
        {devOpsSkills.map((skill) => (
          <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>

      <h3 className="text-lg font-bold mb-2">Tools</h3>
      <div className="flex flex-wrap">
        {tools.map((skill) => (
          <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>

      <h3 className="text-lg font-bold mb-2">Version Control</h3>
      <div className="flex flex-wrap">
        {versionControl.map((skill) => (
          <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>

      <h3 className="text-lg font-bold mb-2">Project Management</h3>
      <div className="flex flex-wrap">
        {projectManagement.map((skill) => (
          <SkillWithImage key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
