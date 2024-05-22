import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import StarsComp from "./StarsComp";

const Introduction = () => {
  const logos = ["gpay", "master-card", "visa", "security", "awards", "lock"];
  return (
    <div id="Introduction" className=" relative px-8 
    max-md:px-6 max-sm:overflow-x-hidden py-2  ">
      <div
        className="absolute flexcenter  w-[800px] 
      h-[800px] right-0  translate-y-1/4 translate-x-[40%] top-0"
      >
        <div className="h-[80%] absolute -z-10 w-[80%] animate-pulse opacity-30 bg-main/50 blur-2xl rounded-full"></div>
        <div
          className="     
         h-[60px] max-lg: w-[140px] flexcenter rounded-2xl
          z-10 "
        >
          <Image
            alt="logo"
            src={"/assets/logo.svg"}
            height={50}
            width={60}
            className="h-[90px] w-[200px]  "
          />
        </div>
        <Image src={"/assets/circle.svg"} alt="circles Image" fill />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative   bg-black flexcenter  max-w-xl  rounded-2xl">
          <div
            className="absolute 
        from-neutral-700 to-main bg-gradient-to-r
         h-[60px] max-lg: w-[140px] flexcenter rounded-2xl
         top-0 right-0  z-10 lg:translate-x-full"
          >
            <Image
              alt="logo"
              src={"/assets/logo.svg"}
              height={50}
              width={60}
              className="h-[45px] w-[120px]  "
            />
          </div>
          <div className="absolute  gradient-move -z-10 h-[101%] w-[101%] rounded-2xl "></div>
          <div className=" space-y-7  max-md:p-8 p-16">
            <p>
              de <span className="line-through  text-2xl">R$387,00</span> por
            </p>
            <p className="text-xl">12X</p>
            <p className="text-8xl max-md:text-5xl font-bold text-main">
              R$23,25
            </p>
            <div className="text-xl">Á vista R$279,00</div>
            <div className="relative group  ">
              <div
                className="absolute animate-pulse group-hover:animate-none 
              bg-cyan-400/50 blur-xl z-[0] h-[70%] w-full rounded-lg "
              />
              <Button className="relative w-full text-3xl max-md:py-6 py-8 max-md:text-xl   bg-main  rounded-lg">
                Explore all the prizes
              </Button>
            </div>
            <div className="flex justify-center gap-2  flex-wrap my-2">
              {logos.map((e) => (
                <div className="grayscale hover:grayscale-0 transition-all relative object-cover ">
                  <Image
                    src={`/assets/${e}.svg`}
                    alt="logo for features"
                    className="object-contain h-[45px] max-md:w-[110px] w-[140px] "
                    width={100}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex my-16 flex-wrap gap-10 items-center">
          <div className="flex-1 flex flex-col justify-center min-h-[50dvh] relative">
            <div className="absolute  -z-10 top-0 h-full flex justify-end w-full items-start">
              <p
                className=" bg-clip-text flex self-center  from-transparent from-[30%]
            text-transparent to-second/80 bg-gradient-to-t font-extrabold text-[440px] !font-ubuntu"
              >
                7
              </p>
            </div>
            <p className="text-6xl bg-g font-bold">DAYS OF GUARANTEE</p>
            <StarsComp />
          </div>
          <div className="flex-1 min-w-[20rem] relative">
            <div className="absolute right-0 w-2/3 h-36 lg:h-52  rounded-full blur-3xl  animate-pulse duration-5000 -skew-y-12 bg-second/30 -z-10 top-10"></div>
            <p className="text-xl font-semibold ">
              If you're not satisfied with the course, you have 7 days to
              request a full refund.
            </p>
            <p className="text-lg my-6 text-neutral-300">
              Our aim is to provide high-quality content and we stand behind our
              training.{" "}
            </p>
            <p className="text-lg">
              No questions asked, you can get your money back within the first 7
              days if the course doesn't meet your expectations.
            </p>
          </div>
        </div>
        <div className="flex max-lg:items-center max-lg:flex-col gap-2 ">
          <div className="lg:flex-1 relative">
            <div className="absolute left-0 w-2/3 h-52 rounded-full duration-5000 blur-3xl skew-y-12 animate-pulse  bg-main/30 -z-10 top-10"></div>
            <p className="text-xl font-semibold max-w-sm">
              Leader in Online Courses
              <br />
              <span className=" text-main">Enroll Now!</span>
            </p>
            <div className="mt-12 space-y-4">
              <p className="text-lg">
                Our courses are designed to help you master Dashcraft, a
                powerful automated testing tool. With practical,
                straightforward, and effective teaching methods, you will learn
                quickly and efficiently.
              </p>
              <p className="text-lg">
                Transform your test automation skills with the leader in online
                courses. Fernando Papini is a certified professional with over
                06 years of experience in DashCraft.
              </p>
              <p className="text-lg">
                Learn essential and advanced DashCraft concepts with
                high-quality materials and dedicated support. Join thousands of
                satisfied students who have already transformed their careers.
              </p>
            </div>
          </div>
          <div className="lg:flex-1 w-fit  max-w-lg ">
            <Image
              src={"/assets/results.png"}
              className=" h- w-full "
              alt="illustration"
              height={50}
              width={100}
            />
            <div className="flex p-2 gap-3 w-[calc(100%_-_30px)] rounded-xl backdrop-blur-md bg-neutral-300/30 -translate-y-8 border-[1px] border-main">
              <Image
                alt="logo"
                src={"/assets/logo.svg"}
                height={50}
                width={60}
                className="h-[50px] w-[110px]  "
              />
              <p className="  text-lg  max-md:text-sm  ">
                DashCraft Professional for 06 years{" "}
                <br className="max-sm:hidden" /> Microsoft Certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
