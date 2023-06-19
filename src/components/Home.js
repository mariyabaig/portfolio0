// import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import Contact from "./Contact";
// import Experience from "./Experience";
// import Perfect from "./Perfect";
// import Projects from "./Projects";
// import {Animated} from "react-animated-css";
 
// const Home = () => {
//     const navigate = useNavigate()
    
//     const handleClick =()=>{
//         navigate("/about")


//     }
//   return (
//     <>
    
//       <div className=" h-screen flex flex-col justify-center px-16   ">
//         <div
//           className="  font-bold pb-2"
//           style={{ "font-size": "220px"}}
//         >
//          {/* Mar<button className="bounce italic" onClick={handleClick}>i</button>ya */}
//          <h1 className="mariya" style={{ "color":"#FFF4D6" }} ><span className="span"></span>Mar<button className="bounce italic" onClick={handleClick}>i</button>ya<span className="span"></span></h1>
//         </div>
      
//         <div className=" flex flex-row justify-between ">
//         <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
//           <span className=" flex flex-col justify-between px-2 py-2">
//             <a className="font-semibold px-2 py-2 underline text-md" href="mailto:mariyabaig0@gmail.com">mariyabaig0@gmail.com</a>
//             <span className="text-3xl font-bold" >
//               <h1>/Front-End Developer</h1>
//               <h1>/Full-Stack Developer</h1>
//             </span>
//           </span>
//        </Animated>
//           <div className=" mr-8 font-semibold px-2 py-2">
//           <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
//             <span >
//               <h1 className="px-2 py-2">
//                 12+ months development experience. <br />
//                 Based in Indore, India. <br />
//                 Get in touch for availability.
//               </h1>
//             </span>
//             </Animated>
//             <span className=" flex justify-between px-2 py-2"style={{ "color":"#FFF4D6" }}>
//               <a href="https://in.linkedin.com/in/mariya-baig-8a5b69217">
                
//                 Linkedin
//               </a>
//               <a href="https://https://github.com/mariyabaig"> GitHub</a>
//               <span>+91 6266929290</span>
//             </span>
//           </div>
//         </div>
//       </div>
     
//       <Projects/>
//       <Perfect/>
//       <Contact/>
      
//     </>
//   );
// };

// export default Home;
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Experience from "./Experience";
import Perfect from "./Perfect";
import Projects from "./Projects";
import { Animated } from "react-animated-css";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import {HiOutlineDevicePhoneMobile} from "react-icons/hi2"
import {CiLinkedin} from "react-icons/ci"
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <>
    
      <div className="h-screen flex flex-col justify-center px-6 sm:px-16 ">
        
        <div
          className="font-bold pb-2"
          style={{ fontSize: "clamp(6rem, 22vw, 22rem)" }}
        >
          <h1 className="mariya" style={{ color: "#FFF4D6" }}>
            <span className="span"></span>
            Mar<button className="bounce italic" onClick={handleClick}>
              i
            </button>ya
            <span className="span"></span>
            
          </h1>
        </div>
        {/* <div className="circle"></div> */}
        <div className="flex flex-col sm:flex-row justify-between ">
          <Animated
            animationIn="slideInUp"
            animationOut="fadeOut"
            isVisible={true}
          >
            <span className="flex flex-col justify-between px-2 py-2">
              <a
                className="font-semibold px-2 py-2 underline text-md"
                href="mailto:mariyabaig0@gmail.com"
              >
                mariyabaig0@gmail.com
              </a>
              <span className="text-3xl font-bold">
                <h1>Front-End Developer</h1>
                <h1>/Full-Stack Developer</h1>
              </span>
            </span>
          </Animated>
          <div className="sm:mr-8 font-semibold px-2 py-2">
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
            >
              <span>
                <h1 className="px-2 py-2">
                  18+ months development experience. <br />
                  Based in Indore, India. <br />
                  Get in touch for availability.
                </h1>
              </span>
            </Animated>
            <span
              className="connect flex justify-between px-2 py-2"
              style={{ color: "#FFF4D6" }}
            >
              <a href="https://in.linkedin.com/in/mariya-baig-8a5b69217" className="flex flex-row  items-center">
              <CiLinkedin size={24}/>Linkedin
              </a>
              <a href="https://https://github.com/mariyabaig" className="flex flex-row  items-center"><FiGithub size={20}/> GitHub</a>
              <span className="flex flex-row  items-center"><HiOutlineDevicePhoneMobile size={20}/>+91 6266929290</span>
            </span>
          </div>
        </div>
      </div>

      <Projects />
      <Perfect />
      <Contact />
    </>
  );
};

export default Home;
