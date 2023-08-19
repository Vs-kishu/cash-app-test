import React from "react";

const Hero = () => {
  return (
    <div className=" h-2/5 w-11/12 xxs:w-1/2  ">
      <img
        src="assests/cube.svg"
        alt="cube"
        className="absolute left-5 sm:left-[12%] lg:left-[15%]  top-[13%] sm:top-[10%] "
      />
      <img
        src="assests/stairs.svg"
        alt="stairs"
        className="absolute right-5 sm:right-[12%] lg:right-[18%]  top-[13%] sm:top-[10%] max-xs:w-24"
      />

      <div className="relative border-0 text-white h-full w-full mx-auto">
        <span className=" absolute  max-xs:left-5 sm:-top-[20%] lg:-top-[40%] lg:-left-[10%] text-[7rem] sm:text-[10rem] lg:text-[13rem] font-extrabold">
          CASH
        </span>
        <img
          className="absolute sm:-top-[20%] lg:-top-[35%] left-14 xs:left-10 sm:left-16 lg:left-8 w-52 sm:w-72 "
          src="assests/intro-phone.svg"
          alt="phone"
        />
        <p className="absolute left-14 xs:left-10 top-[30%] sm:top-[20%] text-[7rem] sm:text-[10rem] lg:text-[13rem] font-extrabold">
          APP
        </p>
      </div>

      <img
        src="assests/cubes.svg"
        className="absolute bottom-[10%] left-5 sm:left-[8%] lg:left-[13%] max-xs:w-32"
        alt="cubes"
      />
      <img
        src="assests/pillor.svg"
        className="absolute bottom-0 right-5 sm:right-[10%] lg:right-[25%] max-xs:w-40"
        alt="pillor"
      />
    </div>
  );
};

export default Hero;
