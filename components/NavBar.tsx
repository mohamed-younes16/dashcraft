"use client";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMediaQuery } from "usehooks-ts";
import { Menu } from "lucide-react";
import CliComp from "./CliComp";
import { useState } from "react";

const NavBar = () => {
  const [open,setOpen] = useState<boolean>(false)
  const links = [
    { name: "Introduction", id: "Introduction" },
    { name: "Benifits", id: "benifits" },
    { name: "Pricing", id: "pricing" },
    { name: "FAQ", id: "faq" },
  ];

  const isBigScreen = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className=" backdrop-blur-md  rounded-xl left-1/2 -translate-x-1/2
     h-[80px] max-md:h-[75px] px-7 bg-neutral-800/30 
      border-b-[1px] border-neutral-500/60 z-50 
      flexcenter gap-4 max-md:gap-2 max-md:px-3 max-lg:justify-between min-w-[90%] fixed  top-2 "
    >
      {" "}
      <Image
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        alt="logo"
        src={"/assets/logo.svg"}
        height={50}
        width={60}
        className="h-[45px]  cursor-pointer w-[150px]  "
      />{" "}
      <div className="flexcenter max-lg:hidden">
        <>
          {links.map((e) => (
            <div
              key={e.id}
              onClick={() => {
                document
                  .getElementById(e.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="md:text-lg cursor-pointer text-white 
          font-medium
            bg-clip-text bg-gradient-to-r from-main
             to-[#00ff9d]  transition-all group 
             relative overflow-hidden hover:text-transparent
              hover:text-red-600 py-8 max-md:px-4 max-sm:px-2 px-6"
            >
              {e.name}
              <div className="absolute h-[2px] bg-gradient-to-r from-main to-[#00ff9d]  transition-all w-full bottom-4  -left-[120%] group-hover:left-0" />
            </div>
          ))}
        </>
      </div>
      <div className="lg:hidden flexcenter">
        <CliComp>
          {" "}
          <Sheet onOpenChange={setOpen} open={open}>
            <SheetTrigger>
              <Menu className=" w-12 h-12" />
            </SheetTrigger>
            <SheetContent>
              <Image
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                alt="logo"
                src={"/assets/logo.svg"}
                height={50}
                width={60}
                className="h-[45px]  cursor-pointer w-[150px]  "
              />{" "}
              <div className="flexcenter flex-col ">
                <>
                  {links.map((e) => (
                    <div
                      key={e.id}
                      onClick={() => {
                        document
                          .getElementById(e.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                          setOpen(false)
                      }}
                      className="md:text-lg cursor-pointer text-white 
          font-medium
            bg-clip-text bg-gradient-to-r from-main
             to-[#00ff9d]  transition-all group 
             relative overflow-hidden hover:text-transparent
              hover:text-red-600 py-8 max-md:px-4 max-sm:px-2 px-6"
                    >
                      {e.name}
                      <div className="absolute h-[2px] bg-gradient-to-r from-main to-[#00ff9d]  transition-all w-full bottom-4  -left-[120%] group-hover:left-0" />
                    </div>
                  ))}
                </>
              </div>
            </SheetContent>
          </Sheet>{" "}
        </CliComp>
      </div>
    </div>
  );
};

export default NavBar;
