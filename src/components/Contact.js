import React from 'react';
import { FiHome, FiCodepen, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../footer.css';

const Contact = () => {
  return (
    <>
      <ul className="nav">
        <li>
          <a href="/" target="_blank">
            <div className="icon-circle">
              <FiHome className="icon" />
            </div>
            <div className="title">Home</div>
          </a>
        </li>

        <li>
          <a href="https://mariyabaig.com" target="_blank">
            <div className="icon-circle">
              <FiCodepen className="icon" />
            </div>
            <div className="title">Blog</div>
          </a>
        </li>

        <li>
          <a href="https://github.com/mariyabaig" target="_blank">
            <div className="icon-circle">
              <FiGithub className="icon" />
            </div>
            <div className="title">Github</div>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/mariya-baig/" target="_blank">
            <div className="icon-circle">
              <FiLinkedin className="icon" />
            </div>
            <div className="title">LinkedIn</div>
          </a>
        </li>

        <li>
          <a href="mailto:mariyabaig0@gmail.com">
            <div className="icon-circle">
              <FiMail className="icon" />
            </div>
            <div className="title">Email</div>
          </a>
        </li>
        <div className='background'/>
      </ul>
    
    </>
  );
};

export default Contact;
