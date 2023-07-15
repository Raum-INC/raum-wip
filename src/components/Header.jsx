import React from "react";
import headerImg from "../assets/under_construction.svg";

const Header = () => {
  return (
    <div className="w-full m-5 py-10 flex flex-col gap-5 lg:flex-row lg:max-w-[1267px] mx-auto justify-center items-center">
      <div className="m-4 w-4/5 lg:w-1/2 flex justify-center">
        <img src={headerImg} alt="under_construction_img" className="w-4/5" />
      </div>

      <div className="lg:w-1/2 flex flex-col gap-[18px] justify-center items-center p-4">
        <h1 className="font-semibold text-3xl lg:text-6xl lg:leading-[68px] text-center lg:text-left">
          <span className="text-[#0000FF] lg:animate-pulse">Raum</span> is
          currently
          <br /> under construction.
        </h1>

        <p className="font-[400] text-base text-justify lg:text-lg leading-6 p-4">
          We're hard at work to bring you an extraordinary online experience.
          Raum is undergoing a transformation to deliver a dynamic platform that
          revolutionizes the housing industry.
          <br />
          <br /> In the meantime, stay connected with us on social media and
          join our mailing list to be the first to know when our brand-new
          website launches. We appreciate your patience and support as we strive
          to create a remarkable online platform that will empower you on your
          housing journey.
        </p>
      </div>
    </div>
  );
};

export default Header;
