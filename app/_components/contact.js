"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/magnetic";

export default function Contact() {
    return (
        <div className="w-full flex flex-col justify-between px-4 md:px-20 pt-20">
            <div className="w-full flex flex-col items-center justify-center pt-20">
                <div
                    className="flex flex-col items-center group cursor-pointer"
                    onClick={() => window.location.href = 'mailto:francisvincecj@gmail.com'}
                >
                    <motion.div
                        className="flex items-center gap-4 md:gap-10"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-white uppercase text-center m-0 p-0 leading-[0.85]">
                            LET'S WORK
                        </h1>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-4 md:gap-10 -mt-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-[#f1c604] uppercase text-center m-0 p-0 leading-[0.85]">
                            TOGETHER
                        </h1>
                    </motion.div>
                </div>

                <p className="mt-10 text-gray-400 text-lg md:text-xl font-light text-center max-w-2xl px-4">
                    I'm always open to new opportunities and love collaborating with people who are passionate about their craft and has a clear goal of their future.
                </p>

                <div className="mt-16">
                    <Magnetic strength={1}>
                        <a
                            href="mailto:francisvincecj@gmail.com"
                            className="bg-[#f1c604] text-black rounded-full px-10 py-5 text-sm md:text-lg font-bold tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-500 inline-block"
                        >
                            Get in touch
                        </a>
                    </Magnetic>


                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-32 border-t border-white/10 pt-10 text-gray-500 font-light text-[10px] md:text-xs uppercase tracking-widest gap-4 md:gap-0">
                <div className="flex gap-6 md:gap-10">
                    <Magnetic strength={0.5}><a href="https://www.linkedin.com/in/francis-vince-jaca-359532305" target="_blank" rel="noopener noreferrer" className="group relative text-sm tracking-widest text-yellow-400
                                    drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]
                                    transition-all duration-300 hover:-translate-y-0.5">
                        LinkedIn</a></Magnetic>
                    <Magnetic strength={0.5}><a href="https://www.facebook.com/francisvince.jaca" target="_blank" rel="noopener noreferrer" className="group relative text-sm tracking-widest text-yellow-400
                                    drop-shadow-[0_0_5px_rgba(250,204,21,0.4)] 
                                    transition-all duration-300 hover:-translate-y-0.5">
                        Facebook</a></Magnetic>
                    <Magnetic strength={0.5}><a href="mailto:francisvincecj@gmail.com" className="group relative text-sm tracking-widest text-yellow-400
                                    drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]
                                    transition-all duration-300 hover:-translate-y-0.5">Email</a></Magnetic>
                </div>
                <p className="group relative text-sm  tracking-widest text-yellow-400
                                    drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]
                                    transition-all duration-300 hover:-translate-y-0.5">© {new Date().getFullYear()} Francis Vince Jaca</p>
            </div>
        </div>
    );
}