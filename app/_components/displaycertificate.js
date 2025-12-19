import React from 'react'


const DisplayCertificate = ({ imgSrc, alt, title, link, iconlink, context, badges = [] }) => {
    return (
        <div className='group'>
            <div className='pt-10'>
                <div className="relative md:flex md:items-center bg-slate-900/40 rounded-[24px] p-6 shadow-2xl backdrop-blur-md border border-white/5 transition-all duration-500 hover:border-yellow-400/40 hover:shadow-[0_0_40px_rgba(250,204,21,0.1)] overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-950 md:w-72 lg:w-80 aspect-[4/3]">
                        <img
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                            src={imgSrc}
                            alt={alt}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent pointer-events-none" />
                    </div>

                    <div className="flex flex-col flex-grow pt-6 md:pl-10">
                        <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">
                            {title}
                            {/* 
                            <a href="https://markodenic.com/css-pulse-animation/" className="hover:text-gray-300 transition-colors">
                            </a> */}
                        </h3>

                        <p className="text-gray-500 g-relaxed text-[0.95rem] mb-8 flex-grow md:pr-40">
                            {context}

                        </p>

                        <div className="flex items-center justify-between mt-auto">
                            <a href={link} className="text-white font-semibold flex items-center gap-1 group hover:underline">
                                Read More
                            </a>


                            <a href="https://github.com/ZeekHoft" className="shrink-0 p-2 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all duration-300">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    width="22"
                                    height="22"
                                    alt="github"
                                    className="invert opacity-70 group-hover:opacity-100"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};




export default DisplayCertificate;
