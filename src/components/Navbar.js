import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed top-1/2 transform -translate-y-1/2 left-0' style={{ left: '-50px' }}>
      <ul className="flex flex-col items-center p-2">
        <li className="py-1">
          <NavLink to="/about" style={{ transform: "rotate(180deg)", writingMode: "vertical-lr" }}>About</NavLink>
        </li>
        <li className="py-1">
          <NavLink to="/blog" style={{ transform: "rotate(180deg)", writingMode: "vertical-lr" }}>Blogs</NavLink>
        </li>
        <li className="py-1">
          <NavLink to="/experience" style={{ transform: "rotate(180deg)", writingMode: "vertical-lr" }}>Experience</NavLink>
        </li>
        <li className="py-1">
          <NavLink to="/skills" style={{ transform: "rotate(180deg)", writingMode: "vertical-lr" }}>Skills</NavLink>
        </li>
        <li className="py-1">
          <NavLink to="/services" style={{ transform: "rotate(180deg)", writingMode: "vertical-lr" }}>Services</NavLink>
        </li>
        <li className="py-1">
          <NavLink to="/contact" style={{ transform: "rotate(180deg)", writingMode: "vertical-lr" }}>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
