import React from 'react'
import '../AboutCard.css'
import { Link } from 'react-router-dom'

const Aboutcard = () => {
  return (
   <>
   
    <div className="container flex flex-row justify-center">
        <div className="cardabout">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>
                    <h3>Skills</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Expertise in a wide range of technologies and tools, including HTML, CSS, JavaScript, React.js, Redux, Node.js, Express.js, SQL and NoSQL databases, and Git</p>
                        <Link to="/skills">View all</Link>
                </div>
            </div>
        </div>
        <div className="cardabout">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>
                    <h3>Services</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <Link to="/services">Read More</Link>
                </div>
            </div>
        </div>
        <div className="cardabout">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>
                    <h3>Blog</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <Link to="/experience">Read More</Link>
                </div>
            </div>
        </div>
        <div className="cardabout">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
                    <h3>Experience</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <Link to="/experience">Read More</Link>
                </div>
            </div>
        </div>
    </div>

   </>
  )
}

export default Aboutcard
