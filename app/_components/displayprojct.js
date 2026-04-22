import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function Displayprojct({ imgSrc, title, link, context, badges = [] }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="group cursor-pointer flex flex-col items-center gap-2 w-[80px]  ">
                    <div className="w-[72px] h-[72px] md:w-[110px] md:h-[110px] rounded-[16px] overflow-hidden 
                        border border-white/10 shadow-lg shadow-black/30
                        transition-all duration-200  
                        group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-yellow-400/20
                        group-active:scale-95  " >
                        <img src={imgSrc} className="w-full h-full object-cover " />
                    </div>
                    <span className="text-[11px] text-center text-white/80 leading-tight max-w-[72px] truncate">
                        {title}
                    </span>
                </div>
            </DialogTrigger>

            <DialogContent
                showCloseButton={false}
                className="p-0 border-yellow-400/20 bg-transparent shadow-none overflow-hidden
                    w-[95vw] max-w-[95vw] 
                    md:w-[85vw] md:max-w-[85vw]"
            >
                <DialogTitle className="sr-only">{title}</DialogTitle>

                {/* Phone layout: stacked | Tablet/Desktop: landscape side by side */}
                <div className="group flex flex-col md:flex-row bg-zinc-950 rounded-2xl overflow-hidden 
                    border border-white/5 hover:border-yellow-400/30 
                    shadow-2xl hover:shadow-[0_0_40px_rgba(250,204,21,0.08)]
                    transition-all duration-500">

                    {/* Image — full width on phone, left half on tablet */}
                    <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[400px] bg-zinc-900/50 overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/5 transition-colors duration-500 z-10" />
                        <img
                            src={imgSrc}
                            alt={title}
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Yellow accent line on left edge (tablet only) */}
                        <div className="hidden md:block absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent" />
                    </div>

                    {/* Content — right side on tablet */}
                    <div className="flex flex-col justify-between p-6 md:p-8 w-full md:w-1/2 overflow-y-auto max-h-[60vh] md:max-h-none"
                        style={{ scrollbarWidth: 'none' }}>

                        {/* Header */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-yellow-500/70 font-bold mb-1 block">
                                        Project
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-yellow-400 transition-colors">
                                        {title}
                                    </h2>
                                </div>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/5 border border-white/10 
                                        hover:border-yellow-400/50 hover:bg-yellow-400/10 
                                        transition-all duration-300 flex-shrink-0 ml-4"
                                >
                                    <img
                                        src="./arrow.jpg"
                                        width="20"
                                        height="20"
                                        alt="visit project"
                                        className="invert opacity-70"
                                    />
                                </a>
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                                {badges.map((badge, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: `${badge.bgColor}80`,
                                            borderColor: badge.borderColor
                                        }}
                                        className="flex items-center gap-1.5 border backdrop-blur-md px-2.5 py-1 rounded-full transition-transform hover:-translate-y-0.5"
                                    >
                                        <span className="text-xs">{badge.icon}</span>
                                        <span style={{ color: badge.textColor }} className="font-semibold text-[11px] uppercase tracking-wider">
                                            {badge.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-white/5 group-hover:border-yellow-400/20 transition-colors" />

                            <p className="text-zinc-400 text-sm md:text-xl leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {context}
                            </p>
                        </div>

                        {/* Bottom yellow bar */}
                        <div className="pt-6 mt-4">
                            <div className="h-px w-0 bg-yellow-400 rounded-full transition-all duration-700 group-hover:w-full opacity-60" />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Displayprojct;