import React from "react";
import { FaEnvelope, FaLinkedin, FaWordpress, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <footer className="py-4">
        <h1 className="text-center text-3xl font-bold">mariyabaig.com</h1>
        <div className="container flex justify-center">
          <ul className="flex space-x-4 m-2">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="container flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <a href="mailto:example@example.com">
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://wordpress.com/">
                <FaWordpress />
              </a>
            </li>
            <li>
              <a href="https://github.com/">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Contact;
