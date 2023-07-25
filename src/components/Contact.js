import React from "react";
import { FiMail, FiLinkedin, FiGithub, FiBook } from "react-icons/fi";
import transition from "../transition";
import "../footer.css";

const Contact = () => {
  return (
    <>
      <footer className="py-4 flex flex-col items-center justify-center text-inco font-bold">
        <h1 className="text-3xl md:text-4xl text-red font-borel">
          <a href="https://mariyabaig.com">mariyabaig.com</a>
        </h1>
        <div className="container flex justify-center mt-4">
          <ul className="nav flex flex-wrap justify-center">
            <li className="m-2">
              <a href="https://mariyabaig.com" target="_blank" rel="noopener noreferrer">
                <div className="icon-circle">
                  <FiBook className="icon" />
                </div>
                <div className="title">Blog</div>
              </a>
            </li>
            <li className="m-2">
              <a href="https://github.com/mariyabaig" target="_blank" rel="noopener noreferrer">
                <div className="icon-circle">
                  <FiGithub className="icon" />
                </div>
                <div className="title">GitHub</div>
              </a>
            </li>
            <li className="m-2">
              <a href="https://www.linkedin.com/in/mariya-baig/" target="_blank" rel="noopener noreferrer">
                <div className="icon-circle">
                  <FiLinkedin className="icon" />
                </div>
                <div className="title">LinkedIn</div>
              </a>
            </li>
            <li className="m-2">
              <a href="mailto:mariyabaig0@gmail.com">
                <div className="icon-circle">
                  <FiMail className="icon" />
                </div>
                <div className="title">Email</div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default transition(Contact);
