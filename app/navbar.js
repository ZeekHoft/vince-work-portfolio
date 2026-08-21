"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import myLocalFont from './_components/globalfont';
import { NavDropDown } from "./_components/animation";
import Magnetic from "@/components/magnetic";
import { motion } from "framer-motion";

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#service", label: "Projects" },
    { href: "#about", label: "About" },
];

export default function Header() {

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="fixed top-6 w-full flex justify-center items-center px-4 z-[100]"
        >
            <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-8 py-4 rounded-full
                border border-white/5 bg-black/20 backdrop-blur-xl shadow-2xl
                transition-all duration-300">

                {/* Logo / Name */}
                <Magnetic strength={0.4}>
                    <Link href="#" className="flex items-center gap-3 group">
                        <span className="h-2 w-2 rounded-full bg-[#f1c604] shadow-[0_0_10px_rgba(241,198,4,0.6)]" />
                        <span className="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-[#f1c604]">
                            Vince
                        </span>
                    </Link>
                </Magnetic>

                {/* Links */}
                <div className="hidden md:flex gap-10 uppercase items-center">
                    {navLinks.map(({ href, label }) => (
                        <Magnetic strength={0.5} key={href}>
                            <Link
                                href={href}
                                className="group relative text-xs font-bold tracking-[0.15em] text-gray-300
                                    transition-all duration-500 hover:text-white text-yellow-400  px-2 py-1"
                            >
                                {label}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#f1c604]
                                    transition-all duration-300 group-hover:w-[10px]" />
                            </Link>
                        </Magnetic>
                    ))}
                </div>

                <Magnetic strength={0.3}>
                    <Link href="#contact" className="text-xs text-yellow-400  font-bold tracking-widest uppercase border border-white/10 bg-white/5 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500">
                        Let's Talk
                    </Link>
                </Magnetic>

            </div>
        </motion.nav>
    );
}