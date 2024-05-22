"use client";

import Image from "next/image";
import { motion as m } from "framer-motion";

import { EmblaOptionsType } from "embla-carousel";
import GlassMove from "./GlassMove";
export const OPTIONS: EmblaOptionsType = {
  loop: true,
  skipSnaps: true,
  duration: 20,
  dragFree: true,
};
const Landing = () => {
  const features = [
    "Advanced data analytics for informed decision-making",
    "Streamlined project management to boost productivity",
    "Customizable user interface for personalized experiences",
  ];

  return (
    <div className=" gap-6  max-lg:flex items-center  ">

         
          <div className="flex max-lg:px-6 relative max-lg:min-h-[50vh] flex-wrap w-full">
            <div className="max-lg:w-full flex  flex-col justify-center ">
              {features.map((e, i) => (
                <>
                  <div className=" lg:max-w-[450px] max-lg:flex max-lg:items-center mb-16 max-lg:w-full  relative">
                    <p className=" max-lg:text-lg max-md:text-base text-3xl font-semibold">
                      {e}
                      {i == 0 && (
                        <span className="text-main"> DashCraft? </span>
                      )}
                    </p>
                    <div
                      className={` items-center absolute  h-full  flex inset-0 -z-[2]   `}
                    >
                      {/* <m.div
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        initial={{ x: -50 }}
                        whileInView={{ x: 0, width: "80px" }}
                        className="bg-main  h-[50px] w-[50px] shadow-[-10px_0px_9px_0px_#00ff6657  rounded-xl"
                      /> */}
                      {/* <div className="w-full  h-1 mt-auto bg-[linear-gradient(90deg,transparent_30%,#0AE662)]"></div> */}
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div
              className="lg:flex-1  max-lg:-z-10 max-lg:absolute 
            lg:h-screen  max-lg:inset-0 relative flex items-center flex-col justify-between"
            >
              <GlassMove />
              <div className="absolute top-1/4 max-lg:hidden z-50  border right-10 rounded-xl  border-neutral-300 flexcenter gap-6 px-4 py-2">
                <div className="w-24 -rotate-45 h-[3px] rounded-l-full absolute translate-y-full -translate-x-full bottom-[-30px] left-[16px] from-white to-main bg-gradient-to-r"></div>
                <Image
                  width={50}
                  height={30}
                  alt="logo"
                  className="h-[50px] w-[120px]  "
                  src={"/assets/logo.svg"}
                />
                <p className=" text-main  text-xl ">Fernando dipinrio</p>
              </div>
            </div>
    
        </div>

      {/* <div className="flexcenter">
        {Array.from({ length: 3 }).map((e, i) => (
          <>
            <div key={i} className=" h-36 flex-1  relative ">
              Lorem ipsum dolor sit amet consectetur. Porttitor sed ultrices
              semper porttitor amet morbi lorem sed adipiscing.
            </div>
          </>
        ))}
      </div> */}
    </div>
  );
};

export default Landing;
