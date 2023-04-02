// // import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import Contact from "./Contact";
// import Experience from "./Experience";
// import Perfect from "./Perfect";
// import Projects from "./Projects";

// const Home = () => {
//   const navigate = useNavigate();
    
//   const handleClick = () => {
//     navigate("/about");
//   }

//   return (
//     <>
//       <div className="h-screen flex flex-col justify-center mx-4 md:mx-16 lg:mx-32">
//         <div className="font-bold pb-2 text-center md:text-left" style={{ "fontSize": "clamp(6rem, 15vw, 22rem)" }}>
//           <h1 className="mariya">
//             <span className="span"></span>Mar
//             <button className="bounce italic" onClick={handleClick}>i</button>ya
//             <span className="span"></span>
//           </h1>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between">
//           <span className="flex flex-col justify-between px-2 py-2">
//             <a className="font-semibold px-2 py-2 underline text-md" href="mailto:mariyabaig0@gmail.com">mariyabaig0@gmail.com</a>
//             <span className="text-3xl font-bold">
//               <h1>/Front-End Developer</h1>
//               <h1>/Full-Stack Developer</h1>
//             </span>
//           </span>

//           <div className="mr-8 font-semibold px-2 py-2">
//             <span>
//               <h1 className="px-2 py-2 text-sm md:text-xl lg:text-2xl">
//                 12+ months development experience. <br />
//                 Based in Indore, India. <br />
//                 Get in touch for availability.
//               </h1>
//             </span>

//             <span className="text-gray-400 flex flex-col md:flex-row justify-between px-2 py-2 text-sm md:text-base lg:text-lg">
//               <a href="https://in.linkedin.com/in/mariya-baig-8a5b69217" target="_blank" rel="noreferrer">
//                 Linkedin
//               </a>

//               <a href="https://https://github.com/mariyabaig" target="_blank" rel="noreferrer">
//                 GitHub
//               </a>

//               <a href="tel:+916266929290">+91 6266929290</a>
//             </span>
//           </div>
//         </div>
//       </div>

//       <Projects />
//       <Perfect />
//       <Contact />
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
const Home = () => {
    const navigate = useNavigate()
    
    const handleClick =()=>{
        navigate("/about")


    }
  return (
    <>
    
      <div className=" h-screen flex flex-col justify-center px-16   ">
        <div
          className="  font-bold pb-2"
          style={{ "font-size": "220px"}}
        >
         {/* Mar<button className="bounce italic" onClick={handleClick}>i</button>ya */}
         <h1 className="mariya" style={{ "color":"#FFF4D6" }} ><span className="span"></span>Mar<button className="bounce italic" onClick={handleClick}>i</button>ya<span className="span"></span></h1>
        </div>

        <div className=" flex flex-row justify-between ">
          <span className=" flex flex-col justify-between px-2 py-2">
            <a className="font-semibold px-2 py-2 underline text-md" href="mailto:mariyabaig0@gmail.com">mariyabaig0@gmail.com</a>
            <span className="text-3xl font-bold" >
              <h1>/Front-End Developer</h1>
              <h1>/Full-Stack Developer</h1>
            </span>
          </span>
          <div className=" mr-8 font-semibold px-2 py-2">
            <span >
              <h1 className="px-2 py-2">
                12+ months development experience. <br />
                Based in Indore, India. <br />
                Get in touch for availability.
              </h1>
            </span>
            <span className=" flex justify-between px-2 py-2"style={{ "color":"#FFF4D6" }}>
              <a href="https://in.linkedin.com/in/mariya-baig-8a5b69217">
                
                Linkedin
              </a>
              <a href="https://https://github.com/mariyabaig"> GitHub</a>
              <span>+91 6266929290</span>
            </span>
          </div>
        </div>
      </div>
     
      <Projects/>
      <Perfect/>
      <Contact/>
      
    </>
  );
};

export default Home;
