import React from "react";
import logo from "../assets/raum_logo.png";
import { siteLinks } from "./links";

const Footer = () => {
  return (
    <div className="w-full md:max-w-[1267px] mx-auto flex flex-col md:flex-row justify-between gap-y-6 p-8">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
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
        {/* <div className="md:w-[205px]">
          Products
          <div>
            <a href="#">Raum Bue</a>
          </div>
          <div>
            <a href="#">Raum Bue</a>
          </div>
          <div>
            <a href="#">Raum Bue</a>
          </div>
          <div>
            <a href="#">Raum Bue</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
