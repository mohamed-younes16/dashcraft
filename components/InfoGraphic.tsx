"use client";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const InfoGraphic = () => {
  const isBigScreen = useMediaQuery("(min-width: 1024px)");
  const infographicData: InfographicData[] = [
    {
      class: "data",
      data: [
        {
          icon: "dollar.svg",
          title: "Financial Planning",
          text: "Effective financial planning involves budgeting, saving, and investing wisely to achieve long-term goals and ensure financial security.",
        },
        {
          icon: "lightbulb.svg",
          title: "Innovative Solutions",
          text: "Innovation drives progress. Implementing creative solutions to problems can lead to significant improvements and breakthroughs in any field.",
        },
        {
          icon: "speedometer.svg",
          title: "Performance Optimization",
          text: "Optimizing performance ensures that resources are used efficiently, processes are streamlined, and results are maximized.",
        },
      ],
    },

    { class: "timeline", data: null },

    {
      class: "data",
      data: [
        {
          icon: "checkmark.svg",
          title: "Quality Assurance",
          text: "Quality assurance guarantees that products and services meet certain standards and satisfy customer expectations consistently.",
        },
        {
          icon: "clock.svg",
          title: "Time Management",
          text: "Effective time management involves prioritizing tasks, setting deadlines, and using time efficiently to maximize productivity.",
        },
        {
          icon: "shield.svg",
          title: "Security Measures",
          text: "Implementing robust security measures protects sensitive data, prevents unauthorized access, and ensures the integrity and confidentiality of information.",
        },
      ],
    },
  ];

  return (
    <div id="benifits">
      <div className="flex max-lg:flex-col max-lg:gap-24 relative max-lg:items-center justify-center mt-24 ">
      <div
                    
                    className="absolute animate-pulse 
                    bg-cyan-400/20 opacity-20 blur-3xl
                    duration-5000  top-1/2 right-10
                    -z-10 h-[500px] w-[500px] rounded-full skew-y-12 "
                  /> 
            <div
                    
                    className="absolute animate-pulse 
                    bg-cyan-400/20   duration-5000  opacity-20 blur-3xl  top-0 left-10
                    -z-10 h-[500px] w-[500px] rounded-full skew-y-12 "
                  /> 
            {infographicData.map((e, i) => {
          if (e.class === "data" && e.data) {
            const topLevelDelay = i * 0.6; // Improved delay calculation

            return ( 
              <m.div
                key={`data-${i}`}
                variants={{ first: { y: 20 }, second: { y: -20 } }}
                whileInView={(() => {
                  if (isBigScreen) {
                    return i === 0 ? "first" : i === 2 ? "second" : "";
                  } else if (!isBigScreen) return "";
                })()}
                viewport={{ amount: "some" }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: topLevelDelay,
                }}
                className="flex max-w-[400px] relative flex-col gap-16"
              >
                 
                {e.data.map(({ icon, text, title }, index) => {
                  const nestedDelay = isBigScreen ? index * 0.2 + i * 0.8 : index * 0.2 ;

                  return (
                    <m.div
                      key={`item-${i}-${index}`}
                      viewport={{ once: true, amount: "some" }}
                      initial={{ x: i === 0 ? -50 : i === 2 ? 50 : 0 }}
                      whileInView={{ x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: nestedDelay,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="p-6 relative min-h-[275px] text-center border-main border rounded-xl"
                    >
                      <div className="absolute gradient-move-cards  !from-red-500 !to-slate-700 flexcenter top-0 -translate-y-1/2 left-1/2 h-16 w-16 -translate-x-1/2 bg-main rounded-xl rotate-45">
                        <Image
                          src={`/assets/${icon}`}
                          alt={`${icon.slice(0, icon.length - 4)}`}
                          height={40}
                          width={50}
                          className=" h-12 w-12 object-contain  -rotate-45"
                        />
                      </div>
                      <p className="mt-6 text-xl text-main font-bold">
                        {title}
                      </p>
                      <p className="text-neutral-400 mt-4">{text}</p>
                    </m.div>
                  );
                })}
              </m.div>
            );
          } else if (e.class === "timeline") {
            return (
              <div className="flexcenter max-lg:hidden w-[75px]">
                <div
                  key={`timeline-${i}`}
                  className="bg-main rounded-full min-h-full w-[5px] relative"
                >
                  {Array.from({
                    length: infographicData[0].data?.length || 3,
                  }).map((_, i) => {
                    return (
                      <>
                        <div
                          style={{ top: 250 * i + 150 }}
                          key={i}
                          className={`absolute w-[75px] gap-[5px] flex left-1/2 -translate-x-1/2 h-10 `}
                        >
                          <div className="flex flex-1  self-start items-center ">
                            <div className="bg-main rounded-full h-[15px] w-[15px]"></div>
                            <div className="bg-main h-1 w-[20px]"></div>
                          </div>

                          <div className="flex flex-1 self-end items-center ">
                            <div className="bg-main h-1 w-[20px]"></div>
                            <div className="bg-main rounded-full h-[15px] w-[15px]"></div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default InfoGraphic;
