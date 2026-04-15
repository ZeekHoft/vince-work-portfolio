
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

                            <p className="pt-5 pb-5 text-lg md:text-xl space-y-4 textGray">
                                During my internship, I had the opportunity to work within a professional development environment across a
                                <span className='h1fontChangeName font-bold'> 3-month engagement</span>.
                                My first project involved building an
                                <span className='h1fontChangeName font-bold'> AI-powered content generation system </span>
                                leveraging automation workflows and large language models to produce SEO and AEO-optimized blog content,
                                with a focus on prompt engineering, Google Search Console integration, and organic search visibility.

                                The latter half of my internship shifted toward
                                <span className='h1fontChangeName font-bold'> data analytics and technical SEO</span>
                                working directly with client websites to extract and visualize performance data using
                                <span className='h1fontChangeName font-bold'> GA4, Looker Studio, and automated reporting pipelines</span>.
                                I also conducted structured backlink audits across multiple client properties, identifying and documenting
                                broken links and remediation strategies using industry-standard SEO tooling.
                            </p>
                            <div>
                                <h1 className='h1fontChangeName font-bold pb-5 text-lg md:text-xl'> Skills & Tools</h1>
                                <div className='grid grid-cols-3 gap-5'>


                                    <DisplaySkills
                                        Icon={SiReact}
                                        title={"Web & App Stack"}
                                        programlang={[
                                            { name: 'React', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'Next.js', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'Tailwind CSS', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'shadcn/ui', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'Flutter', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'Flask', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'FastAPI', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'BetterAuth', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'XAMPP / Apache', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'Supabase', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'Neon (PostgreSQL)', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'Firebase', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                            { name: 'Drizzle ORM', bgColor: '#022C22', borderColor: '#10B981', textColor: '#A7F3D0' },
                                        ]}
                                    />
                                    <DisplaySkills
                                        Icon={MdAnalytics}
                                        title={"Analytics & AI"}
                                        programlang={[
                                            { name: 'Google Analytics', bgColor: '#1a1219', borderColor: '#F43F5E', textColor: '#FECDD3' },
                                            { name: 'Google Search Console', bgColor: '#1a1219', borderColor: '#F43F5E', textColor: '#FECDD3' },
                                            { name: 'Looker Studio', bgColor: '#1a1219', borderColor: '#F43F5E', textColor: '#FECDD3' },
                                            { name: 'Ahrefs', bgColor: '#1a1219', borderColor: '#F43F5E', textColor: '#FECDD3' },
                                            { name: 'AI image & video', bgColor: '#1a1219', borderColor: '#F43F5E', textColor: '#FECDD3' },
                                            { name: 'N8N', bgColor: '#1a1219', borderColor: '#F43F5E', textColor: '#FECDD3' },
                                            { name: 'PyAutoGUI', bgColor: '#1a1219', borderColor: '#F43F5E', textColor: '#FECDD3' },
                                            { name: 'Prompt Engineering', bgColor: '#1a1219', borderColor: '#F43F5E', textColor: '#FECDD3' },
                                            { name: 'Ollama', bgColor: '#1a1219', borderColor: '#F43F5E', textColor: '#FECDD3' },

                                        ]}
                                    />
                                    <DisplaySkills
                                        Icon={FaGamepad}
                                        title={"Other Platforms"}
                                        programlang={[
                                            { name: 'Pygame', bgColor: '#1E1034', borderColor: '#A855F7', textColor: '#E9D5FF' },
                                            { name: 'Godot', bgColor: '#1E1034', borderColor: '#A855F7', textColor: '#E9D5FF' },
                                            { name: 'Textual TUI', bgColor: '#1E1034', borderColor: '#A855F7', textColor: '#E9D5FF' },
                                            { name: 'Tkinter', bgColor: '#1E1034', borderColor: '#A855F7', textColor: '#E9D5FF' },
                                            { name: 'Visual Studio', bgColor: '#1E1034', borderColor: '#A855F7', textColor: '#E9D5FF' },
                                            { name: 'Android Studio', bgColor: '#1E1034', borderColor: '#A855F7', textColor: '#E9D5FF' },
                                            { name: 'Pycharm', bgColor: '#1E1034', borderColor: '#A855F7', textColor: '#E9D5FF' },
                                            { name: 'Jetbrains', bgColor: '#1E1034', borderColor: '#A855F7', textColor: '#E9D5FF' },
                                            { name: 'Google Antigravit', bgColor: '#1E1034', borderColor: '#A855F7', textColor: '#E9D5FF' },


                                        ]}
                                    />

                                    <DisplaySkills
                                        Icon={MdCloud}
                                        title={"DevOps & Tools"}
                                        programlang={[
                                            { name: 'AWS', bgColor: '#1C1917', borderColor: '#F59E0B', textColor: '#FDE68A' },
                                            { name: 'Vercel', bgColor: '#1C1917', borderColor: '#F59E0B', textColor: '#FDE68A' },
                                            { name: 'Railway', bgColor: '#1C1917', borderColor: '#F59E0B', textColor: '#FDE68A' },
                                            { name: 'Docker', bgColor: '#1C1917', borderColor: '#F59E0B', textColor: '#FDE68A' },
                                            { name: 'Git', bgColor: '#1C1917', borderColor: '#F59E0B', textColor: '#FDE68A' },
                                            { name: 'GitHub', bgColor: '#1C1917', borderColor: '#F59E0B', textColor: '#FDE68A' },
                                            { name: 'npm', bgColor: '#1C1917', borderColor: '#F59E0B', textColor: '#FDE68A' },
                                            { name: 'pnpm', bgColor: '#1C1917', borderColor: '#F59E0B', textColor: '#FDE68A' },
                                        ]}
                                    />



                                    <DisplaySkills
                                        Icon={MdCode}
                                        title={"Languages"}
                                        programlang={[
                                            { name: 'Python', bgColor: '#1E1B4B', borderColor: '#4F46E5', textColor: '#C7D2FE' },
                                            { name: 'JavaScript', bgColor: '#1E1B4B', borderColor: '#4F46E5', textColor: '#C7D2FE' },
                                            { name: 'TypeScript', bgColor: '#1E1B4B', borderColor: '#4F46E5', textColor: '#C7D2FE' },
                                            { name: 'Java', bgColor: '#1E1B4B', borderColor: '#4F46E5', textColor: '#C7D2FE' },
                                            { name: 'C#', bgColor: '#1E1B4B', borderColor: '#4F46E5', textColor: '#C7D2FE' },
                                            { name: 'Dart', bgColor: '#1E1B4B', borderColor: '#4F46E5', textColor: '#C7D2FE' },
                                            { name: 'HTML & CSS', bgColor: '#1E1B4B', borderColor: '#4F46E5', textColor: '#C7D2FE' },
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



















