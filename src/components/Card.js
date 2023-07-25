// import React from 'react'
// import paw from "../assets/paw.jpg";


// const Card = () => {
//   return (
//    <>
//    <article className="card">
//   <img
//     className="card__background"
//     src={paw}
//     alt="paw"
//     width="800"
//     height="800"
//   />
//   <div className="card__content | flow">
//   <h2 className="card__title font-borel ">Technical Blog</h2>
//     <div className="card__content--container | flow">
//       <h3 className="card__title font-borel ">Mariya Baig</h3>
//       <p className="card__description font-spartan">
//       Come join me on this exciting journey where we learn & explore web development together. I’ll share insights, experiences, and industry knowledge in a way that’s easy to understand.
//       </p>
//     </div>
//     <a href="https://mariyabaig.com" target="_blank" rel="noopener noreferrer">
//             <button className="card__button font-spartan">Read more</button>
//           </a>
    
//   </div>
// </article>
//    </>
//   )
// }

// export default Card
import React from 'react';
import paw from '../assets/paw.jpg';
import '../Card.css'; // Create a separate CSS file for styling the card

const Card = () => {
  return (
    <>
      <article className="card">
        <img className="card__background" src={paw} alt="paw" width="800" height="800" />
        <div className="card__content flow">
          <h2 className="card__title font-borel">Technical Blog</h2>
          <div className="card__content--container flow">
            <h3 className="card__author font-borel">Mariya Baig</h3>
            <p className="card__description font-spartan">
              Come join me on this exciting journey where we learn & explore web development
              together. I’ll share insights, experiences, and industry knowledge in a way that’s
              easy to understand.
            </p>
          </div>
          <a href="https://mariyabaig.com" target="_blank" rel="noopener noreferrer">
            <button className="card__button font-spartan">Read more</button>
          </a>
        </div>
      </article>
    </>
  );
};

export default Card;
