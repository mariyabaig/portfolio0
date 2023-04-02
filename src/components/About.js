// // // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import Experience from "./Experience";
// // import Perfect from "./Perfect";

// // const About = () => {
// //   const navigate = useNavigate()
// //   return (
// //     <>
// //       <div className="flex flex-col mx-4 md:mx-16 mb-16">
// //         <div className="text-5xl md:text-7xl mt-8 md:mt-32">
// //           <h1>
// //             <span className="about">about</span>Mar
// //             <span className="italic">i</span>ya
// //           </h1>
// //         </div>
// //         <div className="mx-4 md:mx-0">
// //           <p className="text-lg md:text-xl  leading-8 md:leading-10 mt-8 md:mt-12">
// //             Hi, I'm Mariya Baig. Creating stunning and intuitive web experiences is a true passion of mine. From ideation to execution, I thrive on the process of bringing designs to life and crafting user-friendly interfaces that delight users. With a keen eye for detail and a commitment to excellence, I relish the opportunity to push the boundaries of what's possible and exceed expectations with every project. Whether it's experimenting with cutting-edge design techniques or collaborating with cross-functional teams, I'm always eager to explore new possibilities and take web design to the next level.
// //           </p>
// //           <br />
// //           <p className="text-lg md:text-xl  leading-8 md:leading-10 mt-4 md:mt-8">
// //             When it comes to my approach to development, I firmly believe in a collaborative and iterative process. I love working closely with cross-functional teams to bring ideas to life and am always eager to learn new skills and technologies to stay at the forefront of the industry. Outside of development, I enjoy staying active and love exploring the great outdoors. Whether it's hiking, camping, or cycling, I find that spending time in nature helps me stay centered and focused. I'm also an avid reader and love diving into books on a wide range of topics, from technology and philosophy to history and science. Above all, my ultimate goal as a web developer is to create impactful, user-centric solutions that not only meet but exceed client expectations. I am excited about the opportunity to continue growing and learning in this ever-evolving field and am always eager to take on new challenges and projects.
// //           </p>
// //         </div>
// //       </div>
// //       <div className="bg-black text-white flex flex-col justify-center items-center">
// //         <button className="text-3xl md:text-5xl py-8" onClick={()=>{navigate("/experience")}}>Experience</button>
// //       </div>
// //     </>
// //   );
// // };

// // export default About;
// import React, { useState } from "react";
// import Experience from "./Experience";
// import Perfect from "./Perfect";

// const About = () => {
//   const [isExperienceVisible, setIsExperienceVisible] = useState(false);

//   const handleExperienceClick = () => {
//     setIsExperienceVisible(!isExperienceVisible);
//   };

//   return (
//     <>
//       <div className="flex flex-col mx-4 md:mx-16 mb-16">
//         <div className="text-5xl md:text-7xl mt-8 md:mt-32">
//           <h1>
//             <span className="about">about</span>Mar
//             <span className="italic">i</span>ya
//           </h1>
//         </div>
//         <div className="mx-4 md:mx-0">
//           <p className="text-lg md:text-xl  leading-8 md:leading-10 mt-8 md:mt-12">
//             Hi, I'm Mariya Baig. Creating stunning and intuitive web experiences is a true passion of mine. From ideation to execution, I thrive on the process of bringing designs to life and crafting user-friendly interfaces that delight users. With a keen eye for detail and a commitment to excellence, I relish the opportunity to push the boundaries of what's possible and exceed expectations with every project. Whether it's experimenting with cutting-edge design techniques or collaborating with cross-functional teams, I'm always eager to explore new possibilities and take web design to the next level.
//           </p>
//           <br />
//           <p className="text-lg md:text-xl  leading-8 md:leading-10 mt-4 md:mt-8">
//             When it comes to my approach to development, I firmly believe in a collaborative and iterative process. I love working closely with cross-functional teams to bring ideas to life and am always eager to learn new skills and technologies to stay at the forefront of the industry. Outside of development, I enjoy staying active and love exploring the great outdoors. Whether it's hiking, camping, or cycling, I find that spending time in nature helps me stay centered and focused. I'm also an avid reader and love diving into books on a wide range of topics, from technology and philosophy to history and science. Above all, my ultimate goal as a web developer is to create impactful, user-centric solutions that not only meet but exceed client expectations. I am excited about the opportunity to continue growing and learning in this ever-evolving field and am always eager to take on new challenges and projects.
//           </p>
//         </div>
//       </div>
//       <div className="bg-black text-white flex flex-col justify-center items-center">
//         <button
//           className="text-3xl md:text-5xl py-8"
//           onClick={handleExperienceClick}
//         >
//           Experience
//         </button>
//       </div>
//       <div
//         className={`${
//           isExperienceVisible ? "max-h-screen" : "max-h-0"
//         } overflow-hidden transition-max-height duration-500 ease-in-out`}
//       >
//         <Experience />
//       </div>
//     </>
//   );
// };

// export default About;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Experience from "./Experience";
// import Perfect from "./Perfect";

// const About = () => {
//   const navigate = useNavigate();
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//     setTimeout(() => {
//       const expandedSection = document.getElementById("experience-section");
//       if (expandedSection) {
//         const expandedSectionTop = expandedSection.offsetTop;
//         window.scrollTo({
//           top: expandedSectionTop,
//           behavior: "smooth",
//         });
//       }
//     }, 500); // wait for animation to finish before scrolling down
//   };

//   return (
//     <>
//       <div className="flex flex-col mx-4 md:mx-16 mb-16">
//         <div className="text-5xl md:text-7xl mt-8 md:mt-32">
//           <h1>
//             <span className="about">about</span>Mar
//             <span className="italic">i</span>ya
//           </h1>
//         </div>
//         <div className="mx-4 md:mx-0">
//           <p className="text-lg md:text-xl  leading-8 md:leading-10 mt-8 md:mt-12">
//             Hi, I'm Mariya Baig. Creating stunning and intuitive web experiences is a true passion of mine. From ideation to execution, I thrive on the process of bringing designs to life and crafting user-friendly interfaces that delight users. With a keen eye for detail and a commitment to excellence, I relish the opportunity to push the boundaries of what's possible and exceed expectations with every project. Whether it's experimenting with cutting-edge design techniques or collaborating with cross-functional teams, I'm always eager to explore new possibilities and take web design to the next level.
//           </p>
//           <br />
//           <p className="text-lg md:text-xl  leading-8 md:leading-10 mt-4 md:mt-8">
//             When it comes to my approach to development, I firmly believe in a collaborative and iterative process. I love working closely with cross-functional teams to bring ideas to life and am always eager to learn new skills and technologies to stay at the forefront of the industry. Outside of development, I enjoy staying active and love exploring the great outdoors. Whether it's hiking, camping, or cycling, I find that spending time in nature helps me stay centered and focused. I'm also an avid reader and love diving into books on a wide range of topics, from technology and philosophy to history and science. Above all, my ultimate goal as a web developer is to create impactful, user-centric solutions that not only meet but exceed client expectations. I am excited about the opportunity to continue growing and learning in this ever-evolving field and am always eager to take on new challenges and projects.
//           </p>
//         </div>
//       </div>
//       <div className="bg-black text-white flex flex-col justify-center items-center">
//         {isExpanded ? (
//           <Experience id="experience-section" />
//         ) : (
//           <button
//             className="text-3xl md:text-5xl py-8"
//             onClick={toggleExpanded}
//           >
//             Experience
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default About;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Experience from "./Experience";
import Perfect from "./Perfect";

const About = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        setShowExperience(true);
      }, 500);
    } else {
      setShowExperience(false);
    }
  }, [isExpanded]);

  return (
    <>
      <div className="flex flex-col mx-4 md:mx-16 mb-16 ">
      <div
          className="  font-bold pb-2 pt-20"
          style={{ "font-size": "220px" }}
        >
         {/* Mar<button className="bounce italic" onClick={handleClick}>i</button>ya */}
         {/* <span className="span" ></span><span className="about">about</span>Mar<span className="italic">i</span>ya<span className="span"></span>
        </div> */}
        <h1 className="mariya" style={{ "color":"#FFF4D6" }} ><span className="about">about</span>Mar<span className="bounce italic">i</span>ya<span className="span"></span></h1>
        </div>
        <div className="mx-4 md:mx-0">
          <p className="text-lg md:text-xl  leading-8 md:leading-10 mt-8 md:mt-12">
            Hi, I'm Mariya Baig. Creating stunning and intuitive web experiences is a true passion of mine. From ideation to execution, I thrive on the process of bringing designs to life and crafting user-friendly interfaces that delight users. With a keen eye for detail and a commitment to excellence, I relish the opportunity to push the boundaries of what's possible and exceed expectations with every project. Whether it's experimenting with cutting-edge design techniques or collaborating with cross-functional teams, I'm always eager to explore new possibilities and take web design to the next level.
          </p>
          <br />
          <p className="text-lg md:text-xl  leading-8 md:leading-10 mt-4 md:mt-8">
            When it comes to my approach to development, I firmly believe in a collaborative and iterative process. I love working closely with cross-functional teams to bring ideas to life and am always eager to learn new skills and technologies to stay at the forefront of the industry. Outside of development, I enjoy staying active and love exploring the great outdoors. Whether it's hiking, camping, or cycling, I find that spending time in nature helps me stay centered and focused. I'm also an avid reader and love diving into books on a wide range of topics, from technology and philosophy to history and science. Above all, my ultimate goal as a web developer is to create impactful, user-centric solutions that not only meet but exceed client expectations. I am excited about the opportunity to continue growing and learning in this ever-evolving field and am always eager to take on new challenges and projects.
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        {isExpanded ? (
          <div className={`transition-opacity duration-500 ease-in-out ${showExperience ? "opacity-100" : "opacity-0"}`}>
            <Experience id="experience-section" />
          </div>
        ) : (
          <button
            className="text-3xl md:text-5xl py-8"
            onClick={toggleExpanded}
          >
            Experience
          </button>
        )}
      </div>
    </>
  );
};

export default About;
