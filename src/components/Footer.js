import React from "react";
import DownloadButtons from "./DownloadButtons";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="absolute -bottom-80  xs-bottom-64 max-md:p-3  md:bottom-4 lg:left-5  flex flex-col md:flex-row  w-full lg:w-11/12 items-center justify-between max-xs:gap-5">
      <DownloadButtons />
      <div className="rounded-full p-4 px-5 bg-black ">
        <img src="assests/downarrow.svg" alt="arrow" />
      </div>
      <section className="flex md:flex-row flex-col items-center justify-end w- gap-5">
        <p className="w-10/12 xs:w-3/4 md:w-[400px]  text-xs font-bold text-[#B6B6B6] leading-4">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
        <SocialMedia />
      </section>
    </div>
  );
};

export default Footer;
