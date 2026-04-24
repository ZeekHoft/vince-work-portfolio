"use client";
// import { motion } from "framer-motion"

import * as motion from "motion/react-client"
import React from 'react'
import TypingText from "@/components/ui/shadcn-io/typing-text";
import BlurText from "@/components/ui/shadcn-io/blur-text";
import TextPressure from "@/components/ui/shadcn-io/text-pressure";
import { useMediaQuery } from "use-media-query-react";
import { SplittingText } from "@/components/ui/shadcn-io/splitting-text";



function Animation({ children }) {
    const [rotate, setRotate] = React.useState(false);
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, ease: "anticipate" }}

        // Animation duration of 0.8 seconds
        >
            {children}
        </motion.div>
    )
}


export function NameAnimation({ children }) {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "anticipate" }}

        >
            {children}
        </motion.div>)
}


export function TextAnimation({ children }) {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0, ease: "anticipate" }}

        >
            {children}
        </motion.div>)
}
export function NavDropDown({ children }) {
    return (
        <motion.div
            className="relative z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "anticipate" }}

        >
            {children}
        </motion.div>)
}


export function TypingAnimation({ children }) {
    return (
        <TypingText
            text={["Active Listening👂", "Open to Change🔄", "Self-Motivating💪", "Self-Awareness🤔", "Adaptive💡", "Social Skills🗣️"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className=" text-3xl md:text-4xl font-bold h-10 w-80 h-30 md:w-100 md:h-10 pt-10 "
            textColors={['#f1c604', '#1d2435', '#E0E0E0']}
            variableSpeed={{ min: 50, max: 120 }}
        >
        </TypingText>
    )
}


export function BlurAnimation({ children }) {
    const containerVariants = {
        hidden: { opacity: 0, filter: 'blur(30px)', y: 20 },
        visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, delay: 0.2 } },
    };

    return (
        <div className="font-bold">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >

                {children}
            </motion.div>
        </div>
    );
}
export function ComponentBlurAnimation({ children }) {
    // Define your animation properties (e.g., initial blur, final state)\
    // Note to self gotta learn more abt variants
    const containerVariants = {
        hidden: { opacity: 0, filter: 'blur(30px)', y: 20 },
        visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, delay: 0.2 } },
    };

    return (
        // Use a motion component to wrap the children
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // while in view only happends when the content is on screen
        >
            {children}
        </motion.div>
    );
}


export function PreassureText({ children }) {


    return (
        <div className="flex items-center justify-center min-h-screen w-full p-4 sm:p-8 
             text-5xl 
             md:text-9xl">
            <div className="relative w-full flex items-center justify-center px-4 sm:px-12">
                <TextPressure
                    text={"Francis\u00A0Vince\u00A0Jaca"} //Unicode non-breaking space character \u00A0. This forces the 
                    // engine to treat the space as a character that takes up width.
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={false}
                    weight={true}
                    italic={false}
                    textColor="currentColor"
                    // minFontSize={maxFontSize}
                    className="text-foreground"
                />
            </div>
        </div>
    );
}


export function TextSplit({ text, type, delay }) {
    return (
        <SplittingText
            text={text}
            type={type}
            inView={true}
            delay={delay}
            motionVariants={{
                initial: { opacity: 0, x: 100 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5 },
                stagger: 0.1
            }}
        />

    )
}


export function TabletBootAnimation({ children }) {
    const [isBooting, setIsBooting] = React.useState(true);
    const [showLogo, setShowLogo] = React.useState(false);
    const [hastStarted, setHasStarted] = React.useState(false);
    const containerVariants = {
        hidden: { opacity: 0, filter: 'blur(30px)', y: 20 },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: { duration: 0.8, delay: 0.2 }
        },
    };
    const startBootSequence = () => {
        if (hastStarted) return;
        setHasStarted(true);
        setTimeout(() => setShowLogo(true), 300);
        setTimeout(() => setShowLogo(false), 2000);
        setTimeout(() => setIsBooting(false), 2600);

    };


    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            onViewportEnter={startBootSequence}
            variants={containerVariants}
        >
            <div
                className="relative w-full h-full flex flex-col min-h-[400px]">
                {/* We render the children always so they maintain the tablet width/height */}
                <div className={`w-full h-full flex-grow transition-opacity duration-700 ${isBooting ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-in fade-in zoom-in-95'}`}>
                    {children}
                </div>

                {isBooting && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black rounded-b-[24px]">
                        <div className={`transition-all duration-1000 ease-in-out transform flex flex-col items-center ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                            <h1 className="text-7xl font-extrabold text-white tracking-widest mb-10 h1fontChangeName"
                                style={{
                                    textShadow: '0 0 40px rgba(250,204,21,0.5), 0 0 80px rgba(255,255,255,0.2)'
                                }}>
                                Welcome FVJ.
                            </h1>
                            <div className="w-40 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 rounded-full transition-all duration-[2000ms] ease-out"
                                    style={{ width: showLogo ? '100%' : '0%' }}
                                />
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </motion.div>


    );
};

export default Animation



