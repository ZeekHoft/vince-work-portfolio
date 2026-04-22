import React from 'react'

function DisplaySkills({ title, Icon: Symbol, programlang = [] }) {
    return (
        <div className="w-full flex flex-col md:flex-row border-[4px] border-zinc-800 bg-zinc-950 group hover:border-yellow-400 transition-colors duration-300">
            {/* Title / Icon Section */}
            <div className="md:w-1/3 md:border-r-[4px] border-zinc-800 p-6 md:p-8 flex items-center gap-6 group-hover:bg-yellow-400 transition-colors duration-300">
                <div className="text-zinc-600 group-hover:text-black transition-colors duration-300">
                    {Symbol && <Symbol size={48} />}
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-black transition-colors duration-300 leading-none">
                    {title}
                </h3>
            </div>
            
            {/* Skills Tag Section */}
            <div className="md:w-2/3 p-6 md:p-8 flex flex-wrap gap-4 items-start content-start border-t-[4px] md:border-t-0 border-zinc-800">
                {programlang.map((lang, index) => (
                    <div
                        key={index}
                        className="border-[2px] border-white/20 px-4 py-2 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all font-bold text-sm tracking-widest uppercase shadow-[2px_2px_0_0_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_0_0_rgba(250,204,21,1)] hover:-translate-y-1"
                        style={{ color: lang.textColor || '#fff' }}
                    >
                        {lang.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DisplaySkills
