import React from "react";
import { FiSearch } from "react-icons/fi";
import { Animated } from "react-animated-css";
import transition from "../transition";
const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl underline mb-4">
        {title}
      </h1>
      <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
        {description}
      </p>
    </div>
  );
};

const Perfect = () => {
  const data = [
    {
      title: "Website Reviews",
      description: "I make sure your website is performing its best by thoroughly reviewing it before making any changes.",
    },
    {
      title: "Business Strategy",
      description: "We discuss what you are trying to achieve and place goals on your website planning how to achieve that.",
    },
    {
      title: "User Experience Design",
      description: "I design your website to be as easy to use as possible while guiding users towards the end goal.",
    },
    {
      title: "Tailored Development",
      description: "I build with your goals in mind, whether you want a simple flexible website, a custom storefront, or a SaaS product.",
    },
    {
      title: "Rigorous Testing",
      description: "I ensure your website is of excellent quality by thoroughly testing using multiple approaches.",
    },
    {
      title: "Ongoing Support",
      description: "Your website is always growing. Whether you’re adding new features or making improvements, I’m here to help.",
    },
  ];

  return (
    <>
      <div className="py-12 px-16">
        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <h2 className="text-2xl font-bold mb-4 text-center">
            Everything you need for a perfect website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-justify">
            {data.map((item, index) => (
              <Card key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </Animated>
      </div>
    </>
  );
};

export default transition(Perfect);
