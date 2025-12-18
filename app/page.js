import Image from "next/image";
import Services from "./_components/service";
import { AnimatedBeams } from "./_components/animatedbg";
import myLocalFont from "./_components/globalfont";
import Animation from "./_components/animation";
import { BlurAnimation, TextAnimation } from "./_components/animation";
import Contact from "./_components/contact"
import About from "./_components/about";


const ProfilePic = ({ imgSrc, context }) => {
  return (

    <div className='flex justify-center md:justify-start pt-20 md:pt-10'>
      <img
        className='shadow-lg w-60 h-60 md:w-80 md:h-80 object-cover rounded-full'
        src={imgSrc}
        alt={context}
      />
    </div>
  );
};
export default function Home() {
  return (


    <main className={myLocalFont.className}>
      <div className="w-screen h-screen relative z-0 ">
        <AnimatedBeams />
      </div>

      <div className='pt-5 md:pt-5'>
        <section id="service" className=" min-h-screen">
          <Services />
        </section>

        <section id="about" className="w-full tracking-wider flex flex-col p-5 md:flex-row md:gap-10 md:pl-20 md:pr-20 md:pt-20 md:pb-10">
          <About />

        </section>

        <section id="contact" className='pt-20 md:pt-5'>
          <Contact />
        </section>
      </div >
    </main >
  );
}
