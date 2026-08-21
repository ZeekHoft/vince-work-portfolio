import Image from "next/image";
import Services from "./_components/service";
import { AnimatedBeams } from "./_components/animatedbg";
import myLocalFont from "./_components/globalfont";
import Animation from "./_components/animation";
import { BlurAnimation, TextAnimation } from "./_components/animation";
import Contact from "./_components/contact"
import About from "./_components/about";
import AmazingImages from "./_components/images";

export default function Home() {
  return (


    <main className={myLocalFont.className}>
      <div className="w-screen h-screen relative z-0 ">
        <AnimatedBeams />
      </div>

      <div className='pt-5 md:pt-5'>

        <section id="service" className=" min-h-screen">
          <Services />
          <AmazingImages />

        </section>

        <section id="about" className="w-full tracking-wider flex flex-col p-5 md:flex-row md:gap-10 md:pl-20 md:pr-20 md:pt-20 md:pb-10">
          <About />
        </section>
        <section id="images" className="w-full max-w-7xl mx-auto   ">

        </section>

        <section id="contact" className='py-32 lg:py-40 border-t border-white/5'>
          <Contact />
        </section>
      </div >
    </main >
  );
}
