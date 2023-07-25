// Aboutcard.js

import React from 'react';
import '../AboutCard.css';
import { Link } from 'react-router-dom';

const Aboutcard = ({ cards }) => {
  return (
    <>
      <div className="container flex flex-col md:flex-row justify-center">
        {cards.map((card, index) => (
          <div className="cardabout" key={index}>
            <div className="face face1">
              <div className="content">
                <img src={card.imageSrc} alt={card.title} />
                <h3>{card.title}</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>{card.description}</p>
                {card.linkTo.startsWith('http') ? (
                  <a href={card.linkTo}>Read More</a>
                ) : (
                  <Link to={card.linkTo}>Read More</Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Aboutcard;
