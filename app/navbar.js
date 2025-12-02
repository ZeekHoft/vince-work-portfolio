"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const inactiveClasses = "text-white hover:text-gray-300 hover:border-b-4 hover:border-gray-300 navBarText";
    const activeClasses = "navBarColorActive";

    const getLinkClasses = (href) => {
        const isActive = pathname === href;
        return ` ${isActive ? activeClasses : inactiveClasses}`;
    }


    return (

        <nav className="fixed top-4 w-screen justify-center items-center px-4 navbar-item">
            <div className="flex justify-between items-center w-full max-w-6xl mx-auto  p-3 shadow-lg rounded-lg navBarColor">
                <div className="text-white font-bold" />

                <div className="flex space-x-4">

                    <Link href="/" className={getLinkClasses("/")}>Home</Link>
                    <Link href="/about" className={getLinkClasses("/about")}>About</Link>
                    {/* <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link> */}
                </div>
                <div className="text-white font-bold" />

            </div>
        </nav>






    )

}