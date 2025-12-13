"use client";
// import { motion } from "framer-motion"

import * as motion from "motion/react-client"
import React from 'react'
import TypingText from "@/components/ui/shadcn-io/typing-text";
import BlurText from "@/components/ui/shadcn-io/blur-text";

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
            {children}
        </TypingText>
    )
}


export function BlurAnimation({ text, children }) {
    const containerVariants = {
        hidden: { opacity: 0, filter: 'blur(30px)', y: 20 },
        visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, delay: 0.2 } },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
        >
            {children}
        </motion.div>
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


export default Animation



