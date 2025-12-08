"use client";
// import { motion } from "framer-motion"

import * as motion from "motion/react-client"
import TypingText from "@/components/ui/shadcn-io/typing-text";
import React from 'react'



function Animation({ children }) {
    const [rotate, setRotate] = React.useState(false);
    return (
        <motion.div

            initial={{ opacity: 0, y: 50, marginBottom: -50 }}
            animate={{ opacity: 1, y: 0, marginBottom: 0 }}
            transition={{ duration: 1.0, ease: "anticipate" }}

        // Animation duration of 0.8 seconds
        >
            {children}
        </motion.div>
    )
}


export function NameAnimation({ children }) {
    return (
        <motion.div

            initial={{ opacity: 0, y: 100, marginBottom: 100 }}
            animate={{ opacity: 1, y: 0, marginBottom: 0 }}
            transition={{ duration: 1.0, ease: "anticipate" }}

        >
            {children}
        </motion.div>)
}


export function TextAnimation({ children }) {
    return (
        <motion.div

            initial={{ opacity: 0, y: 50, marginBottom: -50 }}
            animate={{ opacity: 1, y: 0, marginBottom: 0 }}
            transition={{ duration: 1.0, ease: "anticipate" }}

        >
            {children}
        </motion.div>)
}
export function NavDropDown({ children }) {
    return (
        <motion.div

            initial={{ opacity: 0, y: 50, marginBottom: -50 }}
            animate={{ opacity: 1, y: 0, marginBottom: 0 }}
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





export default Animation



