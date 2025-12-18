import Image from "next/image";
import Services from "./_components/service";
import { AnimatedBeams } from "./_components/animatedbg";
import myLocalFont from "./_components/globalfont";
import Animation from "./_components/animation";
import { BlurAnimation, TextAnimation } from "./_components/animation";
import Contact from "./_components/contact"



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
          <div className='flex-shrink-0 md:w-1/4'>
            <Animation>
              <ProfilePic imgSrc="/me3.jpg" context="profile picture" />
            </Animation>
          </div>

          <div className="md:w-3/4">
            <div className="text-center pt-5 md:text-left md:pt-10">
              <h1 className="text-2xl md:text-3xl font-bold textGray">
                <BlurAnimation text="Hi I'm" />
                <span className="text-2xl md:text-3xl h1fontChangeName font-bold">
                  <BlurAnimation text=" Francis Vince Jaca," />
                </span>
              </h1>
              <br />
              <TextAnimation>
                <p className="pt-5 pb-5 text-lg md:text-xl space-y-4 textGray">
                  I'm a mobile, software, and web developer, but I mainly focus developing technologies targeting
                  <span className='h1fontChangeName font-bold'> "THE 17 GOALS|Sustainable Development". </span>
                  Currently I'm developing an application for our start-up from the help of
                  <span className='h1fontChangeName font-bold'> "CPUGAD" </span> called
                  <span className='h1fontChangeName font-bold'> "DAPPLI"</span>.
                  Other than application development, I've also joined many hackathons where we were tested on our skills with just a few days of development, pitching, and team-work.
                  <br />
                  Our research had just finished development called
                  <span className='h1fontChangeName font-bold'> "Deception Detector"</span>, a way we fight misinformation within the Philippines. Through this journey, we've competed on google solutions (2024), visayas solutions (2024), and were selected to be one of the top 6 lightning speakers on cebu (2025).
                </p>
              </TextAnimation>
            </div>
          </div>
        </section>

        <section id="contact" className='pt-20 md:pt-5'>
          <Contact />
        </section>
      </div >
    </main >
  );
}
