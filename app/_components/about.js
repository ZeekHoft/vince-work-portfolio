
import myLocalFont from './globalfont';
import Animation from './animation';
import { TextAnimation, NameAnimation, BlurAnimation } from './animation';
import DisplaySkills from './displayskills';



import { MdCode, MdPhoneIphone, MdStorage, MdCloud, MdBuild, MdAnalytics, MdSmartToy } from "react-icons/md";
import { SiReact, SiGit } from "react-icons/si";
import { FaGamepad, FaDesktop, FaLayerGroup } from "react-icons/fa";

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
                            <BlurAnimation> Hi I'm</BlurAnimation>

                            <span className="text-2xl md:text-3xl h1fontChangeName font-bold">
                                <BlurAnimation> Francis Vince Jaca,</BlurAnimation>

                            </span>
                        </h1>
                        <br />
                        <BlurAnimation>
                            {/* <TextAnimation> */}
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
                                <h1 className='h1fontChangeName font-bold pb-5 text-lg md:text-xl'> Skills & Tools</h1>
                                <div className='grid grid-cols-3 gap-5 '>
                                    <DisplaySkills
                                        Icon={MdCode}
                                        title={"Languages"}
                                        programlang={[
                                            { name: 'Python', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'JavaScript', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'TypeScript', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Java', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'C#', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Dart', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'HTML & CSS', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },

                                        ]}
                                    />
                                    <DisplaySkills
                                        Icon={SiReact}
                                        title={"Frontend frameworks & UI"}
                                        programlang={[
                                            { name: 'React', bgColor: '#085041', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Next.Js', bgColor: '#085041', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Tailwind CSS', bgColor: '#085041', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'ShadCn/UI', bgColor: '#085041', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Flutter', bgColor: '#085041', borderColor: '#ffffff', textColor: '#ffffff' },

                                        ]}
                                    />
                                    <DisplaySkills
                                        Icon={MdStorage}
                                        title={"Backend & APIs"}
                                        programlang={[
                                            { name: 'Flask', bgColor: '#712B13', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'FastAPI', bgColor: '#712B13', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'BetterAuth', bgColor: '#712B13', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'XAMPP / phpMyAdmin / Apache', bgColor: '#712B13', borderColor: '#ffffff', textColor: '#ffffff' },

                                        ]}
                                    />


                                    <DisplaySkills
                                        Icon={FaLayerGroup}
                                        title={"Databases & ORM"}
                                        programlang={[
                                            { name: 'Supabase', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Neon (PostgreSQL)', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Firebas', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'DrizzelOrm', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },
                                        ]}
                                    />
                                    <DisplaySkills
                                        Icon={MdCloud}
                                        title={"Cloud & deployment"}
                                        programlang={[
                                            { name: 'AWS', bgColor: '#633806', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Vercel', bgColor: '#633806', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Railway', bgColor: '#633806', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Docker', bgColor: '#633806', borderColor: '#ffffff', textColor: '#ffffff' },

                                        ]}
                                    />
                                    <DisplaySkills
                                        Icon={FaGamepad}
                                        title={"Game development"}
                                        programlang={[
                                            { name: 'Pygame', bgColor: '#27500A', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Godot', bgColor: '#27500A', borderColor: '#ffffff', textColor: '#ffffff' },


                                        ]}
                                    />

                                    <DisplaySkills
                                        Icon={FaDesktop}
                                        title={"Desktop & GUI"}
                                        programlang={[
                                            { name: 'Visual Studio', bgColor: '#72243E', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Tkinter', bgColor: '#72243E', borderColor: '#ffffff', textColor: '#ffffff' },

                                        ]}
                                    />

                                    <DisplaySkills
                                        Icon={SiGit}
                                        title={"Dev tools & version control"}
                                        programlang={[
                                            { name: 'Git', bgColor: '#444441', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'GitHub', bgColor: '#444441', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'npm', bgColor: '#444441', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'pnpm', bgColor: '#444441', borderColor: '#ffffff', textColor: '#ffffff' },

                                        ]}
                                    />


                                    <DisplaySkills
                                        Icon={MdAnalytics}
                                        title={"Analytics & SEO"}
                                        programlang={[
                                            { name: 'Google Analytics', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Google Search Console', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Looker Studio', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Ahrefs', bgColor: '#3C3489', borderColor: '#ffffff', textColor: '#ffffff' },

                                        ]}
                                    />

                                    <DisplaySkills
                                        Icon={MdSmartToy}
                                        title={"AI & automation<"}
                                        programlang={[
                                            { name: 'AI image & video recognition', bgColor: '#085041', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'N8N', bgColor: '#085041', borderColor: '#ffffff', textColor: '#ffffff' },

                                        ]}
                                    />
                                    <DisplaySkills
                                        Icon={MdPhoneIphone}
                                        title={"Skill areas"}
                                        programlang={[
                                            { name: 'Web Development', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'App Development', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Game Development', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'System Architecture', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'Software Development', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },
                                            { name: 'AWS Clout Practitioner', bgColor: '#0C447C', borderColor: '#ffffff', textColor: '#ffffff' },

                                        ]}
                                    />
                                </div>


                            </div>
                            {/* </TextAnimation> */}
                        </BlurAnimation>
                    </div>
                </div>
            </div>

        </div>



    );
}