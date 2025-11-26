import Link from "next/link";

export default function Header() {
    return (
        // <header>
        //     <Link href="/" className="navfontChange">Francis Vince Jaca Portfolio</Link>
        //     <ul>
        //         <li><Link href="/about" className="navfontChange">About</Link></li>
        //     </ul>
        // </header>

        <nav className="navBackGround p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="hover:text-gray-300 text-xl font-bold">
                    Home
                </Link>
                <div>
                    <Link href="/about" className="mr-4 hover:text-gray-300 text-xl font-bold">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-gray-300 text-xl font-bold">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>




    )

}