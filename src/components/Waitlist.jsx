import React, { useState } from "react";
import axios from "axios";

const Waitlist = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://gmail.us13.list-manage.com/subscribe/post?u=946cfc9cb47b3cdfcec580292&id=e2b8a86ef0&f_id=00228ae5f0",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
        }
      );

      if (response.status === 200) {
        setMessage("You have succeeded bro");
      }
    } catch (error) {
      setMessage("You have not succeeded bro");
      console.error(error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center m-4 mx-auto py-0 lg:py-20 gap-16">
      <div className="flex flex-col gap-6 md:gap-11">
        <h1
          className="font-semibold text-3xl  lg:text-6xl md:leading-[108px] text-center"
          style={{ lineHeight: "1" }}
        >
          The Future of
          <br /> Sustainable Living
        </h1>
        <p className="font-[400] text-sm text-center md:text-lg leading-6 p-4">
          Join our waitlist and be part of the dawn of a new era in Health.
        </p>
      </div>
      <div className="w-full" id="mc_embed_signup">
        <form
          onSubmit={handleSubmit}
          target="_blank"
          className="max-w-[1129px] mx-auto flex flex-col p-8 outline-none"
        >
          <div className="flex flex-col gap-5 md:gap-14">
            <div className="flex flex-col md:flex-row gap-5 md:gap-16">
              <input
                type="text"
                name="FNAME"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                id="mce-FNAME"
                className="bg-transparent outline-none text-lg font-normal text-[#666] p-2 border-b-[1px] border-b-[#777] md:w-[532px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="LNAME"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="mce-LNAME"
                className="bg-transparent outline-none text-lg font-normal text-[#666] p-2 border-b-[1px] border-b-[#777] md:w-[532px]"
              />
            </div>
            <input
              type="email"
              name="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="mce-EMAIL"
              required=""
              placeholder="Email"
              className="bg-transparent outline-none w-full text-lg font-normal text-[#666] p-2 border-b-[1px] border-b-[#777]"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            name="submit"
            id="mc-embedded-subscribe"
            className="mt-[60px] bg-[#0000FF] rounded-full p-2 md:p-4 w-full md:w-[715px] mx-auto"
          />
        </form>
      </div>

      {/* Move the script tags outside of the component */}
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>

      {/* Display the message */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Waitlist;
