import React from "react";
import {BiCopyright} from "react-icons/bi"

const Contact = () => {
  return (
    <>
      <div className=" flex flex-col justify-between"
      //</> style={{ "backgroundColor":"#7d776c","color":"#070831" }}
      >
        <div className="mx-16">
          <h1 className="text-6xl bold my-7 ">Get In Touch</h1>
          <a
            className="font-semibold px-2 text-2xl py-16 mb-6"
            href="mailto:mariyabaig0@gmail.com"
          >
            MARIYABAIG0@GMAIL.COM
          </a>
          <div className="font-semibold px-2 py-2 mt-12">
            <span className="flex justify-evenly px-2 py-2"style={{ "color":"#FFF4D6" }}>
              <a href="https://in.linkedin.com/in/mariya-baig-8a5b69217">
                Linkedin
              </a>
              <a href="https://https://github.com/mariyabaig"> GitHub</a>
              <span>+91 6266929290</span>
            </span>
          </div>
          <h1 className="my-15 py-12 flex flex-row items-center px-5 "><BiCopyright/> Mariya Baig. All Rights Reserved</h1>
        </div>
       
      </div>
    </>
  );
};

export default Contact;
