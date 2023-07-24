// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex flex-row'>
//       <ul className="fixed left-0 bottom-0 flex flex-col p-3 transform -translate-y-1/2 rotate-180">
//         <li  className="py-4"style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>
//           <a href="/about">About</a>
//         </li>
//         <li  className="py-4"style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>
//           <a href="/experience">Experience</a>
//         </li>
//         <li  className="py-4"style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>
//           <a href="/skills">Skills</a>
//         </li>
//         <li   className="py-4"style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>
//           <a href="/perfect">Services</a>
//         </li>
//         <li   className="py-4"style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>
//           <a href="/contact">Contact</a>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-row'>
      <ul className="fixed left-0 bottom-0 flex  p-3 transform -translate-y-1/2 rotate-180 flex-col-reverse items-center">
        <li className="py-4">
          <NavLink to="/about"   style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>About</NavLink>
        </li>
        <li className="py-4">
          <NavLink to="/blog"  style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>Blogs</NavLink>
        </li>
        <li className="py-4">
          <NavLink to="/experience"  style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>Experience</NavLink>
        </li>
        <li className="py-4">
          <NavLink to="/skills"  style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>Skills</NavLink>
        </li>
        <li className="py-4">
          <NavLink to="/services"  style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>Services</NavLink>
        </li>
        {/* <li className="py-4">
          <NavLink to="/contact"  style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>Contact</NavLink>
        </li> */}
      </ul>
    </div>
  )
}

export default Navbar;
