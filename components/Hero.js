import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Hero = () => {

  return (
    <div className="md:flex justify-center mt-1 mb-1 md:mt-4 md:mb-10 ">
      <div className="flex-0 text-center self-center">
        <Image src="/bannerLogo.png" width={1400} height={700} className="absolute h-[900] w-[1400] object-cover object-right" />
        {/* <Image src="/Rectangle 121.png" width={1400} height={414} className="absolute h-[414] w-[1400] object-cover object-right mx-44 mt-44 sm:mx-72 sm:mt-72" /> */}
      </div>
    </div>
  );
};

export default Hero;
