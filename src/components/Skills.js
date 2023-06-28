import React from 'react';

const Skills = () => {
  const frontendSkills = ['JavaScript', 'React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'EJS'];
  const stylingSkills = ['Tailwind CSS', 'Bootstrap', 'Material UI', 'SCSS'];
  const backendSkills = ['Node.js', 'Express.js', 'MongoDB', 'DynamoDB', 'MySQL', 'Firebase'];
  const devOpsSkills = ['AWS EC2 Instance and S3 Bucket', 'Jenkins'];
  const tools = ['Visual Studio Code', 'Postman', 'Eclipse', 'ThunderClient'];
  const versionControl = ['Git', 'GitHub', 'GitLab', 'Bitbucket'];
  const projectManagement = ['Jira'];

  const renderSkills = (skills) => {
    return (
      <ul className="list-disc ml-4">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="skills-container">
      <h2 className="text-2xl font-bold mb-2">Skills</h2>

      <div className="skills-category">
        <h3 className="text-lg font-bold mb-1">Frontend</h3>
        {renderSkills(frontendSkills)}
      </div>

      <div className="skills-category">
        <h3 className="text-lg font-bold mb-1">Styling</h3>
        {renderSkills(stylingSkills)}
      </div>

      <div className="skills-category">
        <h3 className="text-lg font-bold mb-1">Backend</h3>
        {renderSkills(backendSkills)}
      </div>

      <div className="skills-category">
        <h3 className="text-lg font-bold mb-1">DevOps</h3>
        {renderSkills(devOpsSkills)}
      </div>

      <div className="skills-category">
        <h3 className="text-lg font-bold mb-1">Tools</h3>
        {renderSkills(tools)}
      </div>

      <div className="skills-category">
        <h3 className="text-lg font-bold mb-1">Version Control</h3>
        {renderSkills(versionControl)}
      </div>

      <div className="skills-category">
        <h3 className="text-lg font-bold mb-1">Project Management</h3>
        {renderSkills(projectManagement)}
      </div>
    </div>
  );
};

export default Skills;
 