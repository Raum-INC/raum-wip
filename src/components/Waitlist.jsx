import React from "react";

const Waitlist = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center m-4 mx-auto py-20 gap-16 md:gap-28">
      <div className="flex flex-col gap-6 md:gap-11">
        <h1 className="font-semibold text-3xl md:text-5xl lg:text-8xl md:leading-[108px] text-center">
          The Future of
          <br /> Sustainable Living
        </h1>
        <p className="font-[400] text-sm text-center md:text-lg leading-6 p-4">
          Join our waitlist and be part of the dawn of a new era in Health.
        </p>
      </div>
      <div className="w-full" id="mc_embed_signup">
        <form
          action="https://gmail.us13.list-manage.com/subscribe/post?u=946cfc9cb47b3cdfcec580292&amp;id=e2b8a86ef0&amp;f_id=00228ae5f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          className="max-w-[1129px] mx-auto flex flex-col p-8 outline-none"
        >
          <div className="flex flex-col gap-5 md:gap-14">
            <div className="flex flex-col md:flex-row gap-5 md:gap-16">
              <input
                type="text"
                name="FNAME"
                placeholder="First Name"
                id="mce-FNAME"
                value=""
                className="bg-transparent outline-none text-lg font-normal text-[#666] p-2 border-b-[1px] border-b-[#777] md:w-[532px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="LNAME"
                id="mce-LNAME"
                value=""
                className="bg-transparent outline-none text-lg font-normal text-[#666] p-2 border-b-[1px] border-b-[#777] md:w-[532px]"
              />
            </div>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required=""
              value=""
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

      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>

      {/* <script type="text/javascript">
        function($) {window.fnames = new Array(); 
        window.ftypes = new Array();
        fnames[0]=EMAIL;
        ftypes[0]=merge;,
        fnames[1]=FNAME;ftypes[1]=merge;,fnames[2]=LNAME;ftypes[2]=merge;,fnames[3]=ADDRESS;ftypes[3]=merge;,fnames[4]=PHONE;ftypes[4]=merge;,fnames[5]=BIRTHDAY;ftypes[5]=merge;false}(jQuery));
        let $mcj = jQuery.noConflict(true)}
      </script> */}
    </div>
  );
};

export default Waitlist;
