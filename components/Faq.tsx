"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "./Heading";
import { useState } from "react";
import Image from "next/image";
import {
  Dribbble,
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Faq = () => {
  const [current, setCurrent] = useState("");
  const data = [
    {
      question: "What sort of web services do you provide?",
      answer:
        "We offer a range of web services for your SaaS startup, including hosting, maintenance, and custom development.",
    },
    {
      question:
        "Is there a cap on the number of service requests I can submit?",
      answer:
        "Absolutely not! There's no limit at all. Feel free to send in as many service requests as you'd like.",
    },
    {
      question: "When can I expect my service requests to be completed?",
      answer:
        "The completion time depends on the complexity of the request, but we work efficiently to deliver promptly.",
    },
    {
      question: "What software and tools do you use for your services?",
      answer:
        "We use a variety of industry-standard tools and platforms to ensure efficient and high-quality service delivery.",
    },
    {
      question: "How do I get started with your web services?",
      answer:
        "Getting started is easy! Simply reach out to us, and we'll guide you through the onboarding process for your SaaS startup.",
    },
    {
      question: "What if I don’t like the service provided?",
      answer:
        "If you're not satisfied, we're open to revisions and adjustments until we get it just right for you.",
    },
    {
      question: "What if I only need one specific service?",
      answer:
        "No problem! Whether you have one or multiple service requests, we're here to assist you.",
    },
    {
      question: "Can I get a refund if I’m not satisfied with the service?",
      answer:
        "We aim for your satisfaction, but if there are issues, we can discuss potential solutions or refunds as needed.",
    },
  ];
  const socialLinks = [
    {
      name: "facebook",
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=100070339100609",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/younesmohamed_77",
    },
    {
      name: "Dribble",
      icon: <Twitter />,
      link: "https://twitter.com/younesmed_77",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/mohamed-younes-bettioui-7a07b8271",
    },
  ];
  const dataCards = [
    {
      title: "Works",
      desc: "A design wizard that delivers top-notch masterpieces whenever you crave it!",
      icon: "works.svg",
    },
    {
      title: "Benifits",
      desc: "You'll get stress-free design like magic, delivering consistent quality at a steady price.",
      icon: "benefits.svg",
    },
    {
      title: "Process",
      desc: "You can effortlessly throw in, organize, and keep tabs on all your requests using your very own Trello board.",
      icon: "process.svg",
    },
    {
      title: "Pricing",
      desc: "No shady charges, no unexpected shocks! Stick to one flat fee, month after month.",
      icon: "pricing.svg",
    },
  ];

  return (
    <div id="faq" className=" relative ">
      <div className="flexcenter flex-col gap-2 my-16">
        <Heading
          title="Frequently Asked Questions"
          desc="These questions might not be on everyone's FAQ list, but we've got your 
back in case you were curious."
        />
      </div>
      <div className="max-w-5xl   relative px-6 mx-auto">
        {/* <div className="absolute blur-xl  duration-5000  -bottom-1/2 rounded-[30%_70%_44%_56%_/_18%_63%_37%_82%] w-full opacity-20 left-0 h-full bg-cover bg-main/30"></div>{" "}
        <div className="absolute blur-3xl  duration-5000  -top-1/3 rounded-[30%_70%_44%_56%_/_18%_63%_37%_82%] w-1/2 opacity-20 -right-1/4 h-full bg-cover bg-blue-700/40"></div>{" "} */}
        <div className=" backdrop-blur-xl ">
          {data.map((e, i) => (
            <Accordion
              key={i}
              onValueChange={(e) => setCurrent(e)}
              type="single"
              value={current}
              collapsible
            >
              <AccordionItem
                className="border-b-zinc-200/25 !no-underline"
                value={`${e.question}`}
              >
                <AccordionTrigger
                  className={`text-2xl  max-md:text-lg !no-underline  flex items-center justify-between gap-6`}
                >
                  <div
                    className={` ${current === e.question && "text-second"}`}
                  >
                    0{i + 1}
                  </div>{" "}
                  {e.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-200/90 text-lg pl-6">
                  {e.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <div
        className="w-[700px] blur-2xl left-1/2 rounded-full
       translate-y-12 -translate-x-1/2  absolute h-[800px]  -z-10 opacity-30 bg-[#36bcff]"
      ></div>{" "}
      <div className="flexcenter max-w-md my-6 mx-auto flex-col gap-4">
        <div
          className="h-[60px] max-lg: w-[140px] flexcenter rounded-2xl
        "
        >
          <Image
            alt="logo"
            src={"/assets/logo.svg"}
            height={50}
            width={60}
            className="h-[45px] w-[120px]  "
          />
        </div>
        <p> 
          {" "}
          Our mission is to empower startups with top-notch web services,
          enabling them to focus on growth and innovation. From hosting to
          custom development, we're here to support your journey every step of
          the way.
        </p>
      </div>
      <div
        className="mt-16 relative flex flex-wrap justify-between 
      px-5 py-6 max-w-7xl mx-auto items-center"
      >
        <p className="flexcenter text-center flex-wrap max-md:gap-2 gap-6">
          Copyright © 2024 DASHCRAFT. All rights reserved
          <span className="text-zinc-200/80">Privacy Policy </span>
          <span className="text-zinc-200/80">Terms of Use</span>
        </p>
        <div className=" flexcenter max-sm:w-full   gap-4 py-4">
          {socialLinks.map((e, i) => (
            <Link
              aria-label="social link"
              target={"_blank"}
              href={e.link}
              key={i}
              className="group relative p-2 rounded-full "
            >
              <div className="absolute  z-[2] inset-0 rounded-full bg-main scale-0 transition-all group-hover:scale-100 "></div>
              <div className="relative z-10  transition-all group-hover:text-white">
                {e.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
