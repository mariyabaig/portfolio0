import React from 'react';

const Skills = () => {
  const frontendSkills = ['JavaScript', 'React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'EJS'];
  const stylingSkills = ['Tailwind CSS', 'Bootstrap', 'Material UI', 'SCSS'];
  const backendSkills = ['Node.js', 'Express.js', 'MongoDB', 'DynamoDB', 'MySQL', 'Firebase'];
  const devOpsSkills = ['AWS EC2 Instance and S3 Bucket', 'Jenkins'];
  const tools = ['Visual Studio Code', 'Postman', 'Eclipse', 'ThunderClient'];
  const versionControl = ['Git', 'GitHub', 'GitLab', 'Bitbucket'];
  const projectManagement = ['Jira'];

  const renderSkillsTable = (category, skills) => {
    return (
      <React.Fragment key={category}>
        <h3 className="text-lg font-bold mb-2">{category}</h3>
        <table className="table-fixed w-full mx-auto mb-4">
          <tbody>
            {skills.map((skill) => (
              <tr key={skill}>
                <td className="border px-4 py-2">{skill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  };
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      {renderSkillsTable('Frontend', frontendSkills)}
      {renderSkillsTable('Styling', stylingSkills)}
      {renderSkillsTable('Backend', backendSkills)}
      {renderSkillsTable('DevOps', devOpsSkills)}
      {renderSkillsTable('Tools', tools)}
      {renderSkillsTable('Version Control', versionControl)}
      {renderSkillsTable('Project Management', projectManagement)}
    </div>
  );
};

export default Skills;
