import Faq from "@/components/Faq";
import InfoGraphic from "@/components/InfoGraphic";
import Introduction from "@/components/Introduction";
import Landing from "@/components/Landing";
import Pricing from "@/components/Pricing";

export default async function Home() {
  return (
    <div className="">
      <div className="px-8 overflow-x-visible  max-md:px-0  max-w-7xl mx-auto">
        <Landing />
      </div>
      <Introduction />
      <div className="px-8 overflow-hidden max-md:px-6 max-w-7xl mx-auto">
        <InfoGraphic />
        <Pricing />
        <Faq />
      </div>
    </div>
  );
}
