import Image from 'next/image'


export default function About() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
            <div>
                <img
                    src="/me2.png"
                    alt="Picture of the author"
                    className="rounded-lg shadow-lg w-full h-auto"
                />
            </div>

            <div className="md:w-1/2 w-full text-center md:text-left">
                <h1 className="h1fontChange">Francis Vince Jaca</h1>
                <p className="pfontChange">
                    Got into programming during Covid - 19, started making simple games and later transitioned into web development, got into software
                    development in school but I build my skills on mobile application development.                </p>
            </div>
        </div>


    );
}    