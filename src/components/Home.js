import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Experience from "./Experience";
import Projects from "./Projects";
const Home = () => {
    const navigate = useNavigate()
    
    const handleClick =()=>{
        navigate("/about")


    }
  return (
    <>
    
      <div className=" h-screen flex flex-col justify-center mx-16  ">
        <div
          className="  font-bold pb-2"
          style={{ "font-size": "220px" }}
        >
         Mar<button className="bounce italic" onClick={handleClick}>i</button>ya
        </div>

        <div className=" flex flex-row justify-between ">
          <span className=" flex flex-col justify-between px-2 py-2">
            <a className="font-semibold px-2 py-2 underline text-md" href="mailto:mariyabaig0@gmail.com">mariyabaig0@gmail.com</a>
            <span className="text-3xl font-bold">
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
            <span className="text-gray-400 flex justify-between px-2 py-2">
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
  <Experience/>
    </>
  );
};

export default Home;
