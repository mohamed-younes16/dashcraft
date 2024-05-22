import { ReactNode } from "react";
import "./globals.css";
import { Toaster } from "sonner";
import { Urbanist } from "next/font/google";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import CliComp from "@/components/CliComp";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "DIVA design",
  description: "Diva design",
};
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
    <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <body className=" w-[100dvw]  min-h-screen overflow-x-hidden pt-[100px]   text-white ">
          <Toaster richColors position="top-center" />
         
            <NavBar />
         

          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
