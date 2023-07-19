import React from "react";
import { FiSearch } from "react-icons/fi";
import { Animated } from "react-animated-css";

const Perfect = () => {
  return (
    <>
      <div className="py-32 px-16">
        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
          <h1 className="my-6 text-4xl text-center py-8 font-bold">
            Everything you need for a perfect website
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-justify">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl underline mb-4">
                Website Reviews
              </h1>
              <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
                I make sure your website is performing its best by thoroughly
                reviewing it before making any changes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl underline mb-4">
                Business Strategy
              </h1>
              <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
                We discuss what you are trying to achieve and place goals on
                your website planning how to achieve that.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl underline mb-4">
                User Experience Design
              </h1>
              <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
                I design your website to be as easy to use as possible while
                guiding users towards the end goal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl underline mb-4">
                Tailored Development
              </h1>
              <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
                I build with your goals in mind, whether you want a simple
                flexible website, a custom storefront, or a SaaS product.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl underline mb-4">
                Rigorous Testing
              </h1>
              <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
                I ensure your website is of excellent quality by thoroughly
                testing using multiple approaches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl underline mb-4">
                Ongoing Support
              </h1>
              <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
                Your website is always growing. Whether you’re adding new
                features or making improvements, I’m here to help.
              </p>
            </div>
          </div>
        </Animated>
      </div>
    </>
  );
};

export default Perfect;
