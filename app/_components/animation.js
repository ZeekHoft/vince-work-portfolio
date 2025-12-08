"use client";
// import { motion } from "framer-motion"

import * as motion from "motion/react-client"
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




export default Animation



