"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import myLocalFont from './_components/globalfont';
import { NavDropDown } from "./_components/animation";
import Magnetic from "@/components/magnetic";

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#service", label: "Tablet" },
    { href: "#about", label: "About" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <NavDropDown>
            <nav className={`${myLocalFont.className} fixed top-4 w-screen flex justify-center items-center px-4 z-100`}>
                <div className="flex justify-between items-center w-full max-w-5xl mx-auto px-6 py-3 rounded-2xl
                    border border-yellow-400/10 bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(241,198,4,0.05)]
                    transition-all duration-300">

                    {/* Logo / Name */}
                    <Magnetic strength={0.4}>

                        <Link href="#" className="flex items-center gap-3 group">
                            <span className="h-2 w-2 rounded-full bg-[#f1c604] shadow-[0_0_10px_rgba(241,198,4,0.6)]" />
                            <span className="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-white">
                                FVJ
                            </span>
                        </Link>
                    </Magnetic>

                    {/* Links */}
                    <div className="flex gap-8 uppercase ">
                        {navLinks.map(({ href, label }) => (
                            <Magnetic strength={0.4}>

                                <Link
                                    href={href}
                                    className="group relative text-sm font-bold tracking-widest text-yellow-400
                                    drop-shadow-[0_0_5px_rgba(250,204,21,0.4)] hover:text-white
                                    transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    {label}

                                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r
                                    from-transparent via-yellow-400 to-transparent
                                    transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </Magnetic>

                        ))}
                    </div>

                    <div className="flex items-center  gap-1.5 text-xs font-bold tracking-widest uppercase border border-white/10 bg-white/5 px-6 py-3 rounded-full transition-all duration-500 text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-yellow-400  animate-pulse drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]text-xs tracking-widest uppercase">

                            Available
                        </span>

                    </div>

                </div>
            </nav>
        </NavDropDown>
    );
}