
// // import React from 'react';
// // import l from '../assets/b.png';
// // import la from '../assets/4.png';
// // import h from '../assets/h.png';
// // import t from '../assets/t.png';
// // import t4 from '../assets/t4.png';
// // import t2 from '../assets/t2.png';

// // const Projects = () => {
// //   const images = [l, la, h, t, t4, t2];
// //   const textData = [
// //     {
// //       title: 'Expense Tracker',
// //       description: 'Project description goes here 1.',
// //     },
// //     {
// //       title: 'Result Management',
// //       description: 'Project description goes here 2.',
// //     },
// //     {
// //       title: 'Project Title 3',
// //       description: 'Project description goes here 3.',
// //     },
// //     {
// //       title: 'Project Title 4',
// //       description: 'Project description goes here 4.',
// //     },
// //     {
// //       title: 'Project Title 5',
// //       description: 'Project description goes here 5.',
// //     },
// //     {
// //       title: 'Project Title 6',
// //       description: 'Project description goes here 6.',
// //     },
// //   ];

// //   return (
// //     <div className="grid grid-cols-2 gap-4">
// //       {images.map((image, index) => (
// //         <React.Fragment key={index}>
// //           {index % 2 === 0 ? (
// //             <>
// //               <div className="flex justify-start">
// //                 <img src={image} alt="Project" className="w-full h-full" />
// //               </div>
// //               <div className="flex justify-end">
// //                 <div className="text-left p-4">
// //                   <h2 className="text-2xl font-bold">{textData[index].title}</h2>
// //                   <p className="text-gray-600">{textData[index].description}</p>
// //                 </div>
// //               </div>
// //             </>
// //           ) : (
// //             <>
// //               <div className="flex justify-end">
// //                 <div className="text-right p-4">
// //                   <h2 className="text-2xl font-bold">{textData[index].title}</h2>
// //                   <p className="text-gray-600">{textData[index].description}</p>
// //                 </div>
// //               </div>
// //               <div className="flex justify-start">
// //                 <img src={image} alt="Project" className="w-full h-full" />
// //               </div>
// //             </>
// //           )}
// //         </React.Fragment>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Projects;
 
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import l from '../assets/b.png';
// import la from '../assets/4.png';
// import h from '../assets/h.png';
// import t from '../assets/t.png';
// import t4 from '../assets/t4.png';
// import t2 from '../assets/t2.png';

// const Projects = () => {
//   const images = [l, la, h, t, t4, t2];
//   const textData = [
//     {
//       title: 'Expense Tracker',
//       description: 'Project description goes here 1.',
//     },
//     {
//       title: 'Result Management',
//       description: 'Project description goes here 2.',
//     },
//     {
//       title: 'Project Title 3',
//       description: 'Project description goes here 3.',
//     },
//     {
//       title: 'Project Title 4',
//       description: 'Project description goes here 4.',
//     },
//     {
//       title: 'Project Title 5',
//       description: 'Project description goes here 5.',
//     },
//     {
//       title: 'Project Title 6',
//       description: 'Project description goes here 6.',
//     },
//   ];

//   const [inView, setInView] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isInView = images.map((_, index) => {
//         const element = document.getElementById(`project-${index}`);
//         const rect = element.getBoundingClientRect();
//         return rect.top < window.innerHeight && rect.bottom >= 0;
//       });
//       setInView(isInView);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [images]);

//   const animationVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {images.map((image, index) => (
//         <React.Fragment key={index}>
//           {index % 2 === 0 ? (
//             <>
//               <div className="flex justify-start">
//                 <motion.img
//                   id={`project-${index}`}
//                   src={image}
//                   alt="Project"
//                   className="w-full h-full"
//                   initial="hidden"
//                   animate={inView[index] ? "visible" : "hidden"}
//                   variants={animationVariants}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <motion.div
//                   id={`project-${index}`}
//                   className="text-left p-4"
//                   initial="hidden"
//                   animate={inView[index] ? "visible" : "hidden"}
//                   variants={animationVariants}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <h2 className="text-2xl font-bold">{textData[index].title}</h2>
//                   <p className="text-gray-600">{textData[index].description}</p>
//                 </motion.div>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="flex justify-end">
//                 <motion.div
//                   id={`project-${index}`}
//                   className="text-right p-4"
//                   initial="hidden"
//                   animate={inView[index] ? "visible" : "hidden"}
//                   variants={animationVariants}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <h2 className="text-2xl font-bold">{textData[index].title}</h2>
//                   <p className="text-gray-600">{textData[index].description}</p>
//                 </motion.div>
//               </div>
//               <div className="flex justify-start">
//                 <motion.img
//                   id={`project-${index}`}
//                   src={image}
//                   alt="Project"
//                   className="w-full h-full"
//                   initial="hidden"
//                   animate={inView[index] ? "visible" : "hidden"}
//                   variants={animationVariants}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 />
//               </div>
//             </>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default Projects;
