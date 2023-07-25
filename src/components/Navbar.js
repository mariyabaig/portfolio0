import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed left-0 top-1/2 transform -translate-y-1/2'>
      <ul className="flex flex-col-reverse items-center p-3">
        <li className="py-4">
          <NavLink to="/about" style={{ textOrientation: "sideways", writingMode: "vertical-lr" }}>About</NavLink>
        </li>
        <li className="py-4">
          <NavLink to="/blog" style={{ textOrientation: "sideways", writingMode: "vertical-lr" }}>Blogs</NavLink>
        </li>
        <li className="py-4">
          <NavLink to="/experience" style={{ textOrientation: "sideways", writingMode: "vertical-lr" }}>Experience</NavLink>
        </li>
        <li className="py-4">
          <NavLink to="/skills" style={{ textOrientation: "sideways", writingMode: "vertical-lr" }}>Skills</NavLink>
        </li>
        <li className="py-4">
          <NavLink to="/services" style={{ textOrientation: "sideways", writingMode: "vertical-lr" }}>Services</NavLink>
        </li>
        {/* <li className="py-4">
          <NavLink to="/contact" style={{ textOrientation: "sideways", writingMode: "vertical-lr" }}>Contact</NavLink>
        </li> */}
      </ul>
    </div>
  )
}

export default Navbar;
