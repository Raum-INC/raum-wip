import React from "react";

const Waitlist = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10 gap-16 md:gap-28">
      <div className="flex flex-col gap-6 md:gap-11">
        <h1 className="font-semibold text-4xl md:text-8xl md:leading-[108px] text-center">
          The Future of
          <br /> Sustainable Living
        </h1>
        <p className="font-[400] text-sm text-center md:text-lg leading-6 p-4">
          Join our waitlist and be part of the dawn of a new era in Health.
        </p>
      </div>
      <form className="w-full max-w-[1129px] flex flex-col p-8 outline-none">
        <div className="flex flex-col gap-5 md:gap-14">
          <div className="flex flex-col md:flex-row gap-5 md:gap-16">
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent outline-none text-lg font-normal text-[#666] p-2 border-b-[1px] border-b-[#777] md:w-[532px]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-transparent outline-none text-lg font-normal text-[#666] p-2 border-b-[1px] border-b-[#777] md:w-[532px]"
            />
          </div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="bg-transparent outline-none w-full text-lg font-normal text-[#666] p-2 border-b-[1px] border-b-[#777]"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-[60px] bg-[#0000FF] rounded-full p-2 md:p-4 w-full md:w-[715px] mx-auto"
        />
      </form>
    </div>
  );
};

export default Waitlist;
