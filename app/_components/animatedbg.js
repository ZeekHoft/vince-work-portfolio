"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Boxes } from "@/components/ui/shadcn-io/background-boxes/index"
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";
import { TextAnimation } from "./animation";
import { TextSplit } from "./animation";
import { PreassureText } from "./animation";


const slideUp = {
    initial: { y: "100%" },
    open: (i) => ({ y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 + i * 0.1 } }),
    closed: { y: "100%", transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
};


export function AnimatedBeams() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);

    return (
        <div >
            <section
                ref={container}
                className="relative h-screen flex flex-col justify-end pb-[10vh] px-4 md:px-12 lg:px-20 overflow-hidden"
            >
                <div className="absolute top-1/3 lg:right-32 right-10 flex flex-col items-end z-10">
                    <div className="overflow-hidden pt-2">
                        <motion.p variants={slideUp} custom={2} initial="initial" animate="open" className="text-gray-400 text-lg md:text-2xl font-light tracking-wide text-right">
                            Freelance
                        </motion.p>
                    </div>
                    <div className="overflow-hidden pt-2">
                        <motion.p variants={slideUp} custom={3} initial="initial" animate="open" className="text-white text-xl md:text-3xl font-medium tracking-widest text-right uppercase">
                            Creative Developer
                        </motion.p>
                    </div>
                </div>

                <motion.div style={{ y }} className="w-full flex justify-between items-end z-20">
                    <div className="flex flex-col text-[#f4f4f5] leading-[0.85]">
                        <div className="overflow-hidden">
                            <motion.h1
                                variants={slideUp} custom={0} initial="initial" animate="open"
                                className="text-[14vw] lg:text-[12vw] font-bold tracking-tighter m-0 p-0"
                            >
                                FRANCIS
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden -mt-[2%]">
                            <motion.h1
                                variants={slideUp} custom={1} initial="initial" animate="open"
                                className="text-[14vw] lg:text-[12vw] font-bold tracking-tighter text-[#f1c604] m-0 p-0"
                            >
                                VINCE JACA
                            </motion.h1>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 right-10 flex flex-col items-center gap-3 z-20"
                >
                    <div className="w-[1px] h-16 bg-gray-800 overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 w-full h-full bg-[#f1c604]"
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />

                    </div>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 [writing-mode:vertical-lr] rotate-180">Scroll</span>

                    <div className="w-[1px] h-16 bg-gray-800 overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 w-full h-full bg-[#f1c604]"
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />

                    </div>

                </motion.div>
            </section>
        </div>
    );
}









export default AnimatedBeams