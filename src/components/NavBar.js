import React, { useState } from "react";

const NavBar = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };
  return (
    <div className="absolute top-0 flex justify-between mt-2 xs:justify-around items-center mx-auto xs:py-7 w-11/12 xs:w-10/12">
      <img src="assests/logo.svg" alt="doller" onClick={toggleListVisibility} />
      <ul
        className={`${
          isListVisible ? "show" : "max-sm:hidden"
        } max-xs:w-1/2 max-xs:rounded-lg max-xs:shadow-black max-xs:shadow-inner  max-xs: max-xs:items-center max-xs:p-3 max-xs:absolute max-xs:top-12  max-xs:bg-white max-xs:text-black flex max-xs:flex-col flex-row w-full justify-center gap-4 tracking-widest font-extrabold text-xs`}
      >
        <li>SIGN IN </li>
        <li>LEGAL</li>
        <li>LICENSES</li>
        <li>SECURITY</li>
        <li>CAREERS</li>
        <li>PRESS</li>
        <li>SUPPORT</li>
        <li>STATUS</li>
        <li>CODE BLOG</li>
      </ul>
      <img src="assests/eye.svg" alt="eye" />
    </div>
  );
};

export default NavBar;
