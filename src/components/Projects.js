// import React, { useState } from "react";
// import SideMenu from "./SideMenu";

// const images = [
//   "https://via.placeholder.com/600x400/FFC300/000000",
//   "https://via.placeholder.com/600x400/FF5733/000000",
//   "https://via.placeholder.com/600x400/C70039/000000",
//   "https://via.placeholder.com/600x400/900C3F/000000",
// ];

// const Projects = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <>
//       <div
//         className="flex flex-col items-center"
//         style={{ backgroundColor: "#070831" }}
//       >
//         {/* Image */}
//         <div
//           className="relative rounded-3xl border-8 border-gray-800 overflow-hidden my-8"
//           style={{
//             boxShadow:
//               "5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 5px rgba(255, 255, 255, 0.1)",
//           }}
//         >
//           <img src={images[activeIndex]} alt="" className="w-full" />
//         </div>

//         {/* Dots */}
//         <div className="flex mb-4">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`h-4 w-4 rounded-full mx-2 ${
//                 activeIndex === index ? "bg-gray-500" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;
import React, { useState, useEffect } from "react";
import SideMenu from "./SideMenu";

const images = [
  "https://via.placeholder.com/600x400/FFC300/000000",
  "https://via.placeholder.com/600x400/FF5733/000000",
  "https://via.placeholder.com/600x400/C70039/000000",
  "https://via.placeholder.com/600x400/900C3F/000000",
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
   
      <div
        className="flex flex-col items-center py-14 "
        //style={{ backgroundColor: "#070831" }}
      >  <a href="/about" className="fixed left-0 bottom-0 p-3 transform -translate-y-1/2 text-white rotate-180" style={{textOrientation: "sideways", writingMode: "vertical-lr", zIndex: "50"}}>
      About
    </a>
        {/* Image */}
        <div
          className="relative rounded-3xl border-8 border-black overflow-hidden my-8"
          style={{
            "boxShadow": "0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.05)"
          }}
          
        >
          <img src={images[activeIndex]} alt="" className="w-full" />
        </div>

        {/* Dots */}
        <div className="flex mb-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-4 w-4 rounded-full mx-2 ${
                activeIndex === index ? "bg-gray-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
