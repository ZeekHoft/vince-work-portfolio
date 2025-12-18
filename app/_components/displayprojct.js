import React from 'react'


const Displayprojct = ({ imgSrc, title, link, context, badges = [] }) => {
    return (
        <div className="max-w-xl bg-white rounded-2xl overflow-hidden border border-zinc-800 p-1 shadow-2xl">
            {/* 1. Project Screenshot Area */}
            <div className="relative rounded-t-xl overflow-hidden bg-white aspect-video">
                {/* Replace src with your actual project image path */}
                <img
                    src={imgSrc}
                    alt="Preview Image..."
                    className="h-full w-full object-contain"
                />
            </div>

            {/* 2. Project Details Area */}
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-black tracking-tight">
                        {title}
                    </h2>
                    {/* External Link Icon */}
                    <a href={link} className="text-zinc-400 hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>

                {/* 3. Technology Badges */}
                <div className="flex flex-wrap gap-3 max-w-xl  ">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: badge.bgColor, borderColor: badge.borderColor }}
                            className="flex items-left gap-2 border px-3 py-1 rounded-md"
                        >
                            <span style={{ color: badge.textColor }} className="text-xs font-bold">
                                {badge.icon}
                            </span>
                            <span style={{ color: badge.textColor }} className="font-medium text-sm">
                                {badge.name}
                            </span>
                        </div>
                    ))}

                </div>

                {/* 4. Separator Line */}
                <hr className="border-zinc-800" />

                {/* 5. Description */}
                <p className="text-gray-500 text-lg leading-relaxed">
                    {context}
                </p>
            </div>
        </div>

    )
};




export default Displayprojct;
