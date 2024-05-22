"use client";
import { useMediaQuery } from "usehooks-ts";
import { memo, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { lazy } from "react";
import { useStore } from "@/lib/store";

const GlassMove = () => {
  const { isReady, setIsReady } = useStore();
  const [visible, setIs] = useState(false);
  const matches = useMediaQuery("(min-width: 1024px)");
  const Spline = lazy(() => import("@splinetool/react-spline"));

  useEffect(() => setIsReady(true), []);
  return isReady ? (
    <div className="absolute flexcenter  lg:z-[1] w-full max-lg:h-[50dvh] h-full">
      {matches && (
        <>
          <Suspense
            fallback={
              <div>
                <Loader2 className=" animate-spin text-neutral-600 opacity-70 w-10 h-10" />
              </div>
            }
          >
            <Spline
              onLoad={() => setIs(true)}
              className={`${!visible && "opacity-0"} xl:min-w-[65dvw] `}
              suppressHydrationWarning
              scene="https://prod.spline.design/3l1vmtJypE30JSPt/scene.splinecode"
            />
          </Suspense>
        </>
      )}
    </div>
  ) : null;
};
export default memo(GlassMove);
