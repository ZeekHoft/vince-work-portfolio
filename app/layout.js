import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/smoothscroll";
import CustomCursor from "@/components/customcursor";
import './globals.css'



import Navbar from './navbar'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vince Portfolio",
  description: "Work Portfolio of Francis Vince Jaca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {/* add pt-3 or other num to add padding to navbar */}
          <div className="">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
