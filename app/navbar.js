"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import myLocalFont from './_components/globalfont';
import { NavDropDown } from "./_components/animation";

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#service", label: "Skills" },
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
                    <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase
                        drop-shadow-[0_0_6px_rgba(250,204,21,0.4)]">
                        FVJ
                    </span>

                    {/* Links */}
                    <div className="flex gap-8 uppercase">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="group relative text-sm font-bold tracking-widest text-yellow-400
                                    drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]
                                    transition-all duration-300 hover:-translate-y-0.5"
                            >
                                {label}

                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r
                                    from-transparent via-yellow-400 to-transparent
                                    transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-yellow-400/40 text-xs tracking-widest uppercase">
                            Available
                        </span>
                    </div>

                </div>
            </nav>
        </NavDropDown>
    );
}