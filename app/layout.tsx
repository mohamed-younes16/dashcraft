import { ReactNode } from "react";
import "./globals.css";

// import { Urbanist } from "next/font/google";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";

// const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Dashcraft",
  description: "Dashcraft design",
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

          <NavBar />

          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
