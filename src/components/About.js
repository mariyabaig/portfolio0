import React, { useState, useEffect } from "react";

import i1 from "../assets/i1.jpeg";
import i2 from "../assets/i2.jpeg";
import i3 from "../assets/i3.jpeg";

import transition from "../transition";

import Aboutcard from "./Aboutcard";

const About = () => {
  const aboutCards = [
    {
      imageSrc: 'https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true',
      title: 'Skills',
      description: 'Expertise in a wide range of technologies and tools, including HTML, CSS, JavaScript, React.js, Redux, Node.js, Express.js, SQL and NoSQL databases, and Git',
      linkTo: '/skills',
    },
    {
      imageSrc: 'https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true',
      title: 'Services',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.',
      linkTo: '/services',
    },
    {
      imageSrc: 'https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true',
      title: 'Blog',
      description: 'Come join me on this exciting journey where we learn & explore web development together. I’ll share insights, experiences, and industry knowledge in a way that’s easy to understand.',
      linkTo: 'https://mariyabaig.com',
    },
    {
      imageSrc:                  "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true",
      title: 'Experience',
      description: 'Come join me on this exciting journey where we learn & explore web development together. I’ll share insights, experiences, and industry knowledge in a way that’s easy to understand.',
      linkTo: '/experience',
    },
   
  ];

  return (
    <>
      <div className="flex flex-col pt-24 h-screen px-14">
        <div style={{ fontSize: "3vw" }} className="pt-16">
          <h1 className="mariya font-borel">
            <span
              className="about font-inco text-red font-bold"
              style={{ fontSize: "3rem" }}
            >
              about
            </span>
            Mar
            <button className="italic text-red">i</button>
            ya.
          </h1>
        </div>

        <div className="image-container flex justify-center items-center">
          <img className="about-image h-72" src={i3} alt=""></img>
          <img className="about-image h-72" src={i1} alt=""></img>
          <img className="about-image h-72" src={i2} alt=""></img>
        </div>

        <div className="px-32 md:mx-0 font-spartan">
          <p className="text-lg md:text-xl leading-8 md:leading-10 mt-8 md:mt-12 ">
            Creating stunning and intuitive web experiences is a true passion of
            mine. From ideation to execution, I thrive on the process of
            bringing designs to life and crafting user-friendly interfaces that
            delight users. With a keen eye for detail and a commitment to
            excellence, I relish the opportunity to push the boundaries of
            what's possible and exceed expectations with every project. Whether
            it's experimenting with cutting-edge design techniques or
            collaborating with cross-functional teams, I'm always eager to
            explore new possibilities and take web design to the next level.
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
          <Aboutcard cards={aboutCards} />
        </div>
      </div>
    </>
  );
};

export default transition(About);
