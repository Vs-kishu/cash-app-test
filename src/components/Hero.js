import React from "react";

const Hero = () => {
  return (
    <div className=" h-2/5 w-11/12 xxs:w-1/2  max-xxs:mx-auto ">
      <img
        src="assests/cube.svg"
        alt="cube"
        className="absolute left-5 sm:left-[12%] lg:left-[12%]  top-[13%] sm:top-[15%] "
      />
      <img
        src="assests/stairs.svg"
        alt="stairs"
        className="absolute right-5 sm:right-[12%] lg:right-[15%]  top-[13%] max-xs:w-24"
      />

      <div className="relative border-0 text-white h-full w-full mx-auto">
        <span className=" absolute  max-xs:left-5 sm:-top-[20%] lg:-top-[40%] lg:-left-[10%] text-[7rem] sm:text-[10rem] lg:text-[12rem] font-extrabold">
          CASH
        </span>
        <img
          className="absolute sm:-top-[20%] lg:-top-[35%] left-14 xs:left-10 sm:left-16 lg:left-8 w-52 sm:w-72 md:w-72 lg:w-80 "
          src="assests/intro-phone.svg"
          alt="phone"
        />
        <p className="absolute left-14 xs:left-10 top-[35%] sm:top-[30%] text-[7rem] sm:text-[10rem] lg:text-[12rem] font-extrabold">
          APP
        </p>
      </div>

      <img
        src="assests/cubes.svg"
        className="absolute bottom-[10%] left-5 sm:left-[8%] lg:left-[10%] max-xs:w-32"
        alt="cubes"
      />
      <img
        src="assests/pillor.svg"
        className="absolute bottom-0 right-5 sm:right-[10%] lg:right-[20%] max-xs:w-40"
        alt="pillor"
      />
    </div>
  );
};

export default Hero;
