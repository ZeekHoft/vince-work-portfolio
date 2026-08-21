import myLocalFont from './globalfont';
import { BlurAnimation } from './animation';
import DisplaySkills from './displayskills';

import { MdCode, MdAnalytics, MdCloud, MdOutlineDesignServices, MdOutlineScreenSearchDesktop } from "react-icons/md";
import { SiReact } from "react-icons/si";
import { FaGamepad } from "react-icons/fa";

export default function About() {
    return (
        <div className={`w-full tracking-wider flex flex-col items-start ${myLocalFont.className}`}>

            {/* MASSIVE HEADER */}
            <div className="w-full border-b-[8px] border-yellow-400 pb-4 mb-10 overflow-hidden">
                <BlurAnimation>
                    <h1 className="text-zinc-700 font-black text-[12vw] leading-[0.8] tracking-tighter uppercase whitespace-nowrap ">
                        ABOUT <span className="text-yellow-400">ME</span>
                    </h1>
                </BlurAnimation>
                <BlurAnimation>
                    <h2 className="text-white font-black text-[10vw] leading-[0.85] tracking-tighter uppercase mt-2 break-words">
                        FRANCIS VINCE
                        <br />
                        JACA.
                    </h2>
                </BlurAnimation>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* LEFT/TOP: Text content */}
                <div className="lg:col-span-8 flex flex-col space-y-10">

                    <div className="border-[4px] border-white/20 p-6 md:p-10 relative hover:border-yellow-400 transition-colors duration-300">
                        <div className="absolute -top-[14px] left-6 bg-yellow-400 text-black px-3 py-0.5 font-bold text-sm tracking-widest uppercase">
                            Mission Statement
                        </div>
                        <p className="text-xl md:text-4xl font-bold leading-tight text-white/90">
                            I am a Game, Mobile, Software, Web developer, AI prompt engineer and SEO specialist. I love building and creating things
                            that can help business succeed.
                            <span className="text-yellow-400 bg-white/10 px-2 italic">"Good is not enough, I need to be Great."</span>.
                        </p>
                    </div>

                    <div className="border-[4px] border-white/5 p-6 md:p-10 relative">
                        <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed font-bold uppercase tracking-wide">
                            I've spent my career working <span className="text-white">remotely, </span>helping businesses get where they need to go.
                            I'm currently looking for my next challenge—whether that's full-time, part-time, or
                            a specific project. I genuinely love what I do, and I'm looking to bring that energy to a
                            team that's ready to grow. If you need someone who's all-in on making things happen, <span className="text-yellow-400">Let's talk</span>


                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t-[4px] border-zinc-800">
                        <div className="p-8 bg-yellow-400 text-black font-black flex flex-col justify-center">
                            <span className="text-[5rem] leading-none tracking-tighter mb-2">3+</span>
                            <span className="text-2xl leading-tight uppercase">Months Professional Engagement</span>
                        </div>
                        <div className="p-8 border-[4px] border-zinc-800 flex flex-col justify-center text-zinc-300">
                            <p className="text-xl font-bold uppercase tracking-wider leading-snug">
                                Developer, AI-powered content generation, GA4 data analytics, and technical SEO auditing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT/BOTTOM: Image Placeholder shape and stats */}
                <div className="lg:col-span-4 flex flex-col space-y-8">
                    <BlurAnimation>
                        <div className="w-full aspect-[3/4] border-[8px] border-yellow-400 relative overflow-hidden group grayscale hover:grayscale-0 transition-all duration-700">
                            <img src="/me6.jpg" alt="Vince Intro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 border-[8px] border-white/20 mix-blend-overlay"></div>
                            {/* Brutalist tape/tag */}
                            <div className="absolute top-6 -left-12 bg-white text-black px-14 py-1.5 font-black transform -rotate-45 text-sm uppercase tracking-[0.3em] z-10 shadow-[4px_4px_0_0_rgba(250,204,21,1)]">
                                DEVELOPER
                            </div>
                        </div>
                    </BlurAnimation>

                    <div className="border-[4px] border-white/10 p-6 hover:border-yellow-400/50 transition-colors">
                        <p className="text-yellow-400 font-bold text-sm tracking-[0.2em] uppercase mb-4">Achievements / Milestones</p>
                        <ul className="text-white text-lg font-bold flex flex-col space-y-3 uppercase leading-tight tracking-wider">
                            <li className="flex items-start gap-2"><span className="text-yellow-400">►</span> Google Solution Challenge (2024)</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">►</span> Competed in Visayas Solutions (2024)</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">►</span> Competed in Visayas Solutions (2025)</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">►</span> Won the 'Apex' & 'Smart Nutrition' for DAPPLI (2025)</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">►</span> Awarded 2nd Place in Advance Technologies Category (2026)</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">►</span> Grand Champions at the New Energy Nexus Hackathon (2026)</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">►</span> Venture Excellence Award (2026)</li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* SKILLS SECTION */}
            <div className="w-full mt-32 pt-10">
                <BlurAnimation>
                    <h2 className="text-5xl md:text-8xl font-black text-transparent [-webkit-text-stroke:2px_white] hover:[-webkit-text-stroke:2px_#facc15] transition-all uppercase tracking-tighter mb-12">
                        SKILLS_&_TOOLS
                    </h2>
                </BlurAnimation>

                <div className="flex flex-col space-y-6">
                    <DisplaySkills
                        Icon={SiReact}
                        title={"Web & App Stack"}
                        programlang={[
                            { name: 'React', textColor: '#A7F3D0' },
                            { name: 'Next.js', textColor: '#ffffff' },
                            { name: 'Tailwind CSS', textColor: '#38bdf8' },
                            { name: 'shadcn/ui', textColor: '#ffffff' },
                            { name: 'Flutter', textColor: '#027dfd' },
                            { name: 'Flask', textColor: '#ffffff' },
                            { name: 'FastAPI', textColor: '#05998b' },
                            { name: 'BetterAuth', textColor: '#fbbf24' },
                            { name: 'XAMPP / Apache', textColor: '#f97316' },
                            { name: 'Supabase', textColor: '#3ecf8e' },
                            { name: 'Neon (PostgreSQL)', textColor: '#00e599' },
                            { name: 'Firebase', textColor: '#ff9100' },
                            { name: 'Drizzle ORM', textColor: '#c5f200' },
                        ]}
                    />

                    <DisplaySkills
                        Icon={MdAnalytics}
                        title={"Analytics & AI"}
                        programlang={[
                            { name: 'Google Analytics', textColor: '#fca5a5' },
                            { name: 'Google Search Console', textColor: '#fca5a5' },
                            { name: 'Looker Studio', textColor: '#fca5a5' },
                            { name: 'Ahrefs', textColor: '#fca5a5' },
                            { name: 'AI image & video', textColor: '#fca5a5' },
                            { name: 'N8N', textColor: '#fca5a5' },
                            { name: 'PyAutoGUI', textColor: '#fca5a5' },
                            { name: 'Prompt Engineering', textColor: '#fca5a5' },
                            { name: 'Ollama', textColor: '#fca5a5' },
                        ]}
                    />

                    <DisplaySkills
                        Icon={FaGamepad}
                        title={"Other Platforms"}
                        programlang={[
                            { name: 'Pygame', textColor: '#d8b4fe' },
                            { name: 'Godot', textColor: '#d8b4fe' },
                            { name: 'Textual TUI', textColor: '#d8b4fe' },
                            { name: 'Tkinter', textColor: '#d8b4fe' },
                            { name: 'Visual Studio', textColor: '#d8b4fe' },
                            { name: 'Android Studio', textColor: '#d8b4fe' },
                            { name: 'Pycharm', textColor: '#d8b4fe' },
                            { name: 'Jetbrains', textColor: '#d8b4fe' },
                            { name: 'Docker', textColor: '#d8b4fe' },



                        ]}
                    />

                    <DisplaySkills
                        Icon={MdCloud}
                        title={"DevOps & Tools"}
                        programlang={[
                            { name: 'AWS', textColor: '#fcd34d' },
                            { name: 'Vercel', textColor: '#fcd34d' },
                            { name: 'Railway', textColor: '#fcd34d' },
                            { name: 'Git', textColor: '#fcd34d' },
                            { name: 'GitHub', textColor: '#fcd34d' },
                            { name: 'npm', textColor: '#fcd34d' },
                            { name: 'pnpm', textColor: '#fcd34d' },
                            { name: 'Follow Up Boss (FUB)', textColor: '#fcd34d' },

                        ]}
                    />

                    <DisplaySkills
                        Icon={MdCode}
                        title={"Languages"}
                        programlang={[
                            { name: 'Python', textColor: '#93c5fd' },
                            { name: 'JavaScript', textColor: '#fef08a' },
                            { name: 'TypeScript', textColor: '#93c5fd' },
                            { name: 'Java', textColor: '#fca5a5' },
                            { name: 'C#', textColor: '#d8b4fe' },
                            { name: 'Dart', textColor: '#93c5fd' },
                            { name: 'HTML & CSS', textColor: '#93c5fd' },
                        ]}
                    />
                    <DisplaySkills
                        Icon={MdOutlineDesignServices}
                        title={"Graphic Design"}
                        programlang={[
                            { name: 'Canva', textColor: '#4289da' },
                            { name: 'Pinterest', textColor: '#e93f61' },
                            { name: 'Eleven Labs', textColor: '#989898' },
                            { name: 'Blender', textColor: '#e87730' },
                            { name: 'Spline', textColor: '#ff47f0' },
                            { name: 'KlingAI', textColor: '#ff47f0' },



                        ]}
                    />
                    <DisplaySkills
                        Icon={MdOutlineScreenSearchDesktop}
                        title={"SEO"}
                        programlang={[
                            { name: 'SEO Backlinking', textColor: '#42daa2' },
                            { name: 'SEO Profiling', textColor: '#42daa2' },
                            { name: 'SEO Page Optimization', textColor: '#42daa2' },
                            { name: 'SEO Content Creation', textColor: '#42daa2' },


                        ]}
                    />
                </div>
            </div>

        </div>
    );
}

