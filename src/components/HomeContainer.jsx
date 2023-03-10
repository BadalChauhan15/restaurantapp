import React from "react";
import Delivery from "../img/delivery.png";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-purple-100 px-4 py-1 rounded-full">
          <p className="text-base text-purple-500 font-semibold">
            Fast Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Order Your Favourite <br />
          <span className="text-purple-600 text-[3rem] lg:text-[5rem]">
            Foods and Fruits...
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          We're glad you're here to order meals and fruit! We provide a large variety of high-quality, fresh products. You can access scrumptious and nourishing options with only a few clicks. We appreciate you choosing us for your fruit and dietary needs.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-purple-400 to-purple-700 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white"
        >
          Order Now
        </button>
      </div>
    </section>
  );
};

export default HomeContainer;