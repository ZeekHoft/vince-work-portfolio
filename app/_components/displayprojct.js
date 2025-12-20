import React from 'react'

const Displayprojct = ({ imgSrc, title, link, context, badges = [] }) => {
    return (
        <div className="group max-w-xl bg-slate-900/40 rounded-2xl overflow-hidden border border-white/5 p-1 shadow-2xl transition-all
        duration-500 hover:bg-slate-900/80 hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]">

            {/* Image Container with a subtle yellow overlay on hover */}
            <div className="relative rounded-t-xl overflow-hidden bg-slate-900/50 aspect-video">
                <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/5 transition-colors duration-500 z-10" />
                <img
                    src={imgSrc}
                    alt="Preview Image..."
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <div>
                        {/* Decorative Tag */}
                        {/* <span className="text-[10px] uppercase tracking-widest text-yellow-500 font-bold mb-1 block">Project Case Study</span> */}
                        <h2 className="text-3xl font-bold text-white tracking-tight transition-colors group-hover:text-yellow-400">
                            {title}
                        </h2>
                    </div>

                    <a href={link} className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            width="24"
                            height="24"
                            alt="github logo"
                            className="invert opacity-80 group-hover:opacity-100"
                        />
                    </a>
                </div>

                {/* Badges Section */}
                <div className="flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: `${badge.bgColor}80`, // Adding 80 for 50% transparency
                                borderColor: badge.borderColor
                            }}
                            className="flex items-center gap-2 border backdrop-blur-md px-3 py-1 rounded-full transition-transform hover:-translate-y-1"
                        >
                            <span className="text-xs">{badge.icon}</span>
                            <span style={{ color: badge.textColor }} className="font-semibold text-[12px] uppercase tracking-wider">
                                {badge.name}
                            </span>
                        </div>
                    ))}
                </div>

                <hr className="border-white/5 group-hover:border-yellow-400/20 transition-colors" />

                <p className="text-zinc-400 text-md leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {context}
                </p>

                {/* Bottom Interactive Element */}
                <div className="pt-2">
                    <div className="h-1 w-0 bg-yellow-400 rounded-full transition-all duration-500 group-hover:w-full opacity-50" />
                </div>
            </div>
        </div>
    );
};

export default Displayprojct;