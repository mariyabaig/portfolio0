import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row'>
      <ul className="fixed left-0 bottom-0 flex flex-col p-3 transform -translate-y-1/2 rotate-180">
        <li  className="py-4"style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>
          <a href="/about">About</a>
        </li>
        <li  className="py-4"style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>
          <a href="/experience">Experience</a>
        </li>
        <li  className="py-4"style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>
          <a href="/skills">Skills</a>
        </li>
        <li   className="py-4"style={{textOrientation: "sideways", writingMode: "vertical-lr"}}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
