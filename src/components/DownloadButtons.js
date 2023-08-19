import React from "react";

const DownloadButtons = () => {
  return (
    <div className="flex items-center gap-10 xs:gap-40 md:gap-4 xs:ml-10 ">
      <button className="bg-black py-1 px-3 text-xs max-xs:w-40 font-extrabold flex gap-3 items-center border-2  rounded-lg">
        <img src="assests/apple.svg" alt="apple" />
        APP STORE
      </button>
      <button className="bg-black py-1 px-3 text-xs max-xs:w-40 font-extrabold flex gap-3 items-center border-2  rounded-lg">
        <img src="assests/playstore.svg" alt="googleplay" />
        GOOGLE PLAY
      </button>
    </div>
  );
};

export default DownloadButtons;
