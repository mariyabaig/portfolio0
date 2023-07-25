import React from "react";
import Draggable from "react-draggable";
import transition from "../transition";
const Second = () => {
  const notes = [
    {
      title: "Essential Git Commands: A Cheat Sheet",
      content:
        "Mastering Git is essential for Gen Z coders looking to level up their skills. In this guide, we'll simplify Git's complexities and empower you to collaborate like a pro. From setting up your repository to branching, merging, and resolving conflicts, get ready to shine in the coding world. Embrace Git's power and conquer your coding dreams. Let's slay Git together!",
      link: "https://mariyabaig.com/essential-git-commands-a-cheat-sheet/",
    },
    {
      title: "Single Responsibility Principle in React",
      content:
        "Among the various approaches available, Single Responsibility Principle in React is one of the most encouraged principles. It helps in establishing a well-organized codebase and enhances productivity, collaboration, and long-term code maintenance. Learn how to apply this principle effectively to improve your React projects.",
      link:
        "https://mariyabaig.com/single-responsibility-principle-in-react/",
    },
    {
      title: "ES2023: New JavaScript Features",
      content:
        "ES2023, the 14th and current version of JavaScript, brings a host of new features and enhancements. Whether you’re a seasoned developer or just starting out, this version aims to elevate your JavaScript development experience to new heights. Explore the latest features and make your coding adventures more efficient, powerful, and enjoyable.",
      link:
        "https://mariyabaig.com/new-features-and-enhancements-in-javascript-es2023/",
    },
    {
      title: "Virtual DOM and Its Working",
      content:
        "Virtual DOM is a fundamental concept in web development that has significantly transformed the approach to building and optimizing modern web applications. Learn how Virtual DOM helps in updating pages quicker by minimizing unnecessary rendering and optimizing performance.",
      link: "https://mariyabaig.com/virtual-dom-and-its-working/",
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen py-12 flex flex-col">
       <h2 className="text-2xl font-bold mb-4 text-center">
          Things I Have Written About
        </h2>
      <div className="container mx-auto px-4">
   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((note, index) => (
            <Draggable key={index}>
              <div className="notepad bg-white rounded-lg p-4 shadow-md">
                <div className="top"></div>
                <div className="paper" contentEditable="true"></div>
                <div className="mt-4">
                  <a
                    href={note.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="text-xl font-bold">{note.title}</h1>
                  </a>
                  <p className="mt-2">{note.content}</p>
                  <p className="mt-2">
                    <a
                      href={note.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 font-bold hover:underline cursor-pointer"
                    >
                      Continue reading
                    </a>
                  </p>
                </div>
              </div>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default transition(Second);