import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Experience from "./Experience";
import i1 from "../assets/i1.jpeg";
import i2 from "../assets/i2.jpeg";
import i3 from "../assets/i3.jpeg";
import transition from "../transition";
import Skills from "./Skills";

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
      <div className="flex flex-col pt-24 h-screen px-14">
      
        {/* <div className="py-20">
          <h1>
         
            <div className="pb-2">
              <h1>
              <span className="about">about</span>
                <span className="mariya font-borel"></span>
                 Mar
                <span className="italic">i</span>ya.
                <span className="span"></span>
              </h1>
            </div>
          </h1>
        </div> */}
        <div
              style={{ fontSize: "3vw" }} className="pt-16"
            >
           
              <h1 className="mariya font-borel">
              <span className="about font-inco text-red font-bold">about</span> 
                Mar
                <button className="italic" >
                  i
                </button>
                ya.
              </h1>
            </div>

        <div className="image-container flex justify-center items-center">
          <img className="about-image h-72" src={i3} alt=""></img>
          <img className="about-image h-72" src={i1} alt=""></img>
          <img className="about-image h-72" src={i2} alt=""></img>
        </div>

        <div className="px-32 md:mx-0 font-inco">
          <p className="text-lg md:text-xl leading-8 md:leading-10 mt-8 md:mt-12 ">
            Creating stunning and intuitive web experiences
            is a true passion of mine. From ideation to execution, I thrive on
            the process of bringing designs to life and crafting user-friendly
            interfaces that delight users. With a keen eye for detail and a
            commitment to excellence, I relish the opportunity to push the
            boundaries of what's possible and exceed expectations with every
            project. Whether it's experimenting with cutting-edge design
            techniques or collaborating with cross-functional teams, I'm always
            eager to explore new possibilities and take web design to the next
            level.
          </p>
          <br />
          <p className="text-lg md:text-xl leading-8 md:leading-10 mt-4 md:mt-8 ">
            When it comes to my approach to development, I firmly believe in a
            collaborative and iterative process. I love working closely with
            cross-functional teams to bring ideas to life and am always eager to
            learn new skills and technologies to stay at the forefront of the
            industry. Outside of development, I enjoy staying active and love
            exploring the great outdoors. Whether it's hiking, camping, or
            cycling, I find that spending time in nature helps me stay centered
            and focused. I'm also an avid reader and love diving into books on a
            wide range of topics, from technology and philosophy to history and
            science. 
          </p>
          <a href="https://mariyabaig.com" target="_blank" rel="noopener noreferrer" className="block">
  <div className="card bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-4">
    <h3 className="text-3xl font-semibold text-center mb-4">Technical Blog</h3>
    <span className="block text-center text-lg">Read more about what I write</span>
  </div>
</a>

         
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center">
        {isExpanded ? (
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              showExperience ? "opacity-100" : "opacity-0"
            }`}
          >
            <Experience id="experience-section" />
          </div>
        ) : (
          <button className="text-3xl md:text-5xl py-8" onClick={toggleExpanded}>
            Experience
          </button>
        )}
      </div> */}
    </>
  );
};

export default transition(About);
