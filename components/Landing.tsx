import Image from "next/image";
import GlassMove from "./GlassMove";
import { Button } from "./ui/button";

const Landing = () => {
  const features = [
    "Advanced data analytics for informed decision-making",
    "Streamlined project management to boost productivity",
    "Customizable user interface for personalized experiences",
  ];

  return (
    <div className=" gap-6max-lg:flex mb-10 items-center  ">
      <div className="flex max-lg:px-6 relative z-40  max-lg:min-h-[50vh] flex-wrap w-full">
        <div className="max-lg:w-full flex     flex-col justify-center ">
          {features.map((e, i) => (
            <>
              <div className=" lg:max-w-[450px] max-lg:flex max-lg:items-center mb-16 max-lg:w-full  relative">
                <p className=" max-lg:text-xl  text-3xl font-semibold">
                  {e}
                  {i == 0 && <span className="text-main"> DashCraft? </span>}
                </p>
                <div
                  className={` items-center absolute  h-full  flex inset-0 -z-[2]   `}
                ></div>
              </div>
            </>
          ))}
          <Button className=" bg-main  
          active:shadow-transparent hover:scale-105 
          active:scale-95
              hover:shadow-main/50 transition-all
                 text-2xl font-semibold hover shadow-main shadow-lg">Sign-up</Button>
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
            <p className=" text-main  text-xl ">JHON DOE </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
