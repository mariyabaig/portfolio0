import React from "react";
import SideMenu from "./SideMenu";

const Projects = () => {
  //const src = "https://www.youtube.com/embed/d15DP5zqnYE";
  return (
    <>
    <SideMenu/>
    <div className="h-screen ">
      <ul className="flex flex-col justify-center items-end mx-8">
        <li >
          
          
    <iframe className=" border-black border-4 drop-shadow-xl rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/RcPldR7SV5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <span>Lorem Ipsum</span>
        </li>
        <li >
          
          
          <iframe className="border-black border-4 shadow-2xl rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/RcPldR7SV5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <span>Lorem Ipsum</span>
              </li>
              <li >
          
          
          <iframe className="border-black border-4 shadow-2xl rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/RcPldR7SV5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <span>Lorem Ipsum</span>
              </li>
       
      </ul>
    </div>
    </>
  );
};

export default Projects;
