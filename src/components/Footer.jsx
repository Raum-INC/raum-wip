import React from "react";
import logo from "../assets/raum_logo.svg";
import { siteLinks } from "./links";

const Footer = () => {
  return (
    <>
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between gap-y-6 p-8">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-x-12 gap-y-8">
          {siteLinks.map((siteLink, index) => (
            <div
              key={index}
              className="md:w-[205px] flex flex-col gap-6 md:gap-10"
            >
              <h4 className="font-bold text-xl text-[#767676] leading-6">
                {siteLink.title}
              </h4>
              <div className="flex flex-col gap-3 md:gap-10">
                {siteLink.links.map((link, index) => (
                  <a
                    href="#"
                    key={index}
                    className="font-normal text-base leading-6"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full h-[115px] border-t-[1px] border-t-[#0000ff33] mt-6 py-3 text-[#585858] text-center text-sm md:text-xl font-normal leading-6">
        Copyright © 2023 Raum. All rights reserved.
        <br className="md:hidden" /> Privacy Policy | Terms of Service | Contact
        Us
      </div> */}
    </>
  );
};

export default Footer;
