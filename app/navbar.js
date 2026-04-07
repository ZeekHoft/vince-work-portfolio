"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import myLocalFont from './_components/globalfont';
import { NavDropDown, } from "./_components/animation";
export default function Header() {
    const pathname = usePathname();
    const inactiveClasses = " relative text-3xl text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]  navBarText";
    const activeClasses = "navBarColorActive";

    const getLinkClasses = (href) => {
        const isActive = pathname === href;
        return ` ${isActive ? activeClasses : inactiveClasses}`;
    }


    return (
        <NavDropDown
        >
            {/* during animation the contents overlaps the navbar by adding the z-50, it pushes them below */}

            <nav className={` ${myLocalFont.className} fixed top-4 w-screen justify-center items-center px-4 navbar-item z-100 `}>
                <div className="flex justify-between items-center w-full max-w-6xl mx-auto  p-3 shadow-lg rounded-lg navBarColor">
                    <div className="textGray font-bold" />

                    <div className=" flex gap-9 uppercase">

                        <Link href="#" className={` transition duration-300 ease-in-out transform hover:-translate-y-1 ${inactiveClasses}`}>Home</Link>
                        <Link href="#service" className={` transition duration-300 ease-in-out transform hover:-translate-y-1 ${inactiveClasses}`}>SKILLS</Link>

                        <Link href="#about" className={` transition duration-300 ease-in-out transform hover:-translate-y-1 ${inactiveClasses}`}>About</Link>
                        {/* <Link href="#contact" className={inactiveClasses}>Contact</Link> */}
                    </div>
                    <div className="textGrayfont-bold" />

                </div>
            </nav>



        </NavDropDown>






    )

}