
import Contact from './contact';
import myLocalFont from './globalfont';
import Animation from './animation';
import { TextAnimation, NameAnimation, BlurAnimation } from './animation';
import { TypingAnimation } from './animation';


const ProfilePic = ({ imgSrc, context }) => {
    return (

        <div className='flex justify-center md:justify-start pt-20 md:pt-10 '>
            <img
                className=" shadow-lg  relative md:flex md:items-center bg-slate-900/40 rounded-[24px] p-6 shadow-2xl backdrop-blur-md border border-white/10
                rounded-full transition-all duration-500 hover:bg-slate-900/80 hover:border-yellow-400/40 hover:shadow-[0_0_80px_rgba(250,250,250,0.1)] overflow-hidden"

                src={imgSrc}
                alt={context}
            />
        </div>
    );
};
export default function About() {
    return (
        <div>
            <div className={`w-full tracking-wider flex flex-col p-5 md:flex-row md:gap-10 md:pl-20 md:pr-20 md:pt-20 md:pb-10 ${myLocalFont.className}`}>

                <div className='flex-shrink-0 md:w-1/4'>
                    <Animation>
                        <ProfilePic imgSrc="/me6.jpg" context="profile picture" />
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
                                I am a game, mobile, software, and web developer with a core mission: building technology that targets the
                                <span className='h1fontChangeName font-bold'> "THE 17 GOALS | Sustainable Development"</span>.

                                Currently, I am developing a startup application called
                                <span className='h1fontChangeName font-bold'> "DAPPLI"</span>,
                                proudly affiliated with and supported by <span className='h1fontChangeName font-bold'>DOST TBI</span> through
                                <span className='h1fontChangeName font-bold'> "CPUGAD"</span>.

                                Beyond core development, I thrive in high-pressure environments like hackathons, which have sharpened my skills in rapid prototyping, pitching, and teamwork. My team also recently completed
                                <span className='h1fontChangeName font-bold'> "Deception Detector"</span>,
                                a research-driven project designed to combat misinformation in the Philippines. This project led us to compete in the Google Solution Challenge (2024) and Visayas Solutions (2024), and most recently, I was selected as one of the Top 6 Lightning Speakers in Cebu (2025).


                            </p>
                            <div>
                                <h1 className='h1fontChangeName font-bold pb-5 text-lg md:text-xl'> Langauges | Tools | Platforms </h1>
                                <div className='flex flex-row gap-x-2 gap-y-2 flex-wrap justify-center md:justify-start '>

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height={35} width={35} alt="python logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height={35} width={35} alt="csharp logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height={35} width={35} alt="javascript logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height={35} width={35} alt="react logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height={35} width={35} alt="tailwindcss logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height={35} width={35} alt="html5 logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height={35} width={35} alt="css logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" height={35} width={35} alt="dart logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" height={35} width={35} alt="flutter logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height={35} width={35} alt="nextjs logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height={35} width={35} alt="flask logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" height={35} width={35} alt="vercel logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg" height={35} width={35} alt="amazonwebservices logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height={35} width={35} alt="firebase logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height={35} width={35} alt="git logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height={35} width={35} alt="github logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" height={35} width={35} alt="visualstudio logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height={35} width={35} alt="vscode logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" height={35} width={35} alt="androidstudio logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" height={35} width={35} alt="pycharm logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" height={35} width={35} alt="godot logo" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height={35} width={35} alt="docker logo" />
                                </div>
                            </div>
                        </TextAnimation>
                    </div>
                </div>
            </div>

        </div>



    );
}