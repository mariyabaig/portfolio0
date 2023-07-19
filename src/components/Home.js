import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Experience from "./Experience";
import Perfect from "./Perfect";
import Projects from "./Projects";
import { Animated } from "react-animated-css";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CiLinkedin } from "react-icons/ci";
import Second from "./Second";

const SplashScreen = ({ onAnimationComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete();
    }, 2000); // Set the duration for the splash screen animation in milliseconds
  }, [onAnimationComplete]);

  return (
    <div
      className={`h-screen flex justify-center items-center fixed top-0 left-0 w-full ${
        isAnimating ? "bg-white" : "hidden"
      }`}
      style={{
        transition: isAnimating ? "transform 0.5s ease-in-out" : "",
        transform: isAnimating ? "translateY(0)" : "translateY(-100%)",
        zIndex: 9999,
      }}
    >
      {/* Add your splash screen content here */}
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    navigate("/about");
  };

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <SplashScreen onAnimationComplete={handleAnimationComplete} />
      {!isLoading && (
        <>
          <div className="h-screen flex flex-col justify-center px-6 sm:px-16">
            <div
              className="pb-2 font-freehand"
              style={{ fontSize: "clamp(6rem, 22vw, 22rem)" }}
            >
              <h1 className="mariya">
                <span className="about">about</span>
                Mar
                <button className="italic text-red" onClick={handleClick}>
                  i
                </button>
                ya.
              </h1>
            </div>

            {/* Add the rest of your home page content here */}
            <div className="flex flex-col sm:flex-row justify-between ">
              <Animated
                animationIn="slideInUp"
                animationOut="fadeOut"
                isVisible={true}
              >
                <span className="flex flex-col justify-between px-2 py-2">
                  <a
                    className="font-semibold px-2 py-2 text-red text-md"
                    href="mailto:mariyabaig0@gmail.com"
                  >
                    mariyabaig0@gmail.com
                  </a>
                  <span className="text-3xl font-bold">
                    <h1>Full-Stack Developer</h1>
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
                    <h1 className="px-2 py-2text-red">
                      18+ months development experience. <br />
                      Based in Indore, India. <br />
                      Get in touch for availability.
                    </h1>
                  </span>
                </Animated>
                <span
                  className="connect flex justify-between px-2 py-2"
                  style={{ color: "#FFFFFF" }}
                >
                  <a
                    href="https://in.linkedin.com/in/mariya-baig-8a5b69217"
                    className="flex flex-row items-center"
                  >
                    <CiLinkedin size={24} />
                    Linkedin
                  </a>
                  <a
                    href="https://https://github.com/mariyabaig"
                    className="flex flex-row items-center"
                  >
                    <FiGithub size={20} /> GitHub
                  </a>
                  <span className="flex flex-row items-center">
                    <HiOutlineDevicePhoneMobile size={20} />
                    +91 6266929290
                  </span>
                </span>
              </div>
            </div>
          </div>
          <Second />
          <Projects />
          <Perfect />
          <Contact />
        </>
      )}
    </>
  );
};

export default Home;
