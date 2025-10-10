import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Link href="/" className="navfontChange">Francis Vince Jaca Portfolio</Link>
            <ul>
                <li><Link href="/about" className="navfontChange">About</Link></li>
            </ul>
        </header>
    )

}