

import React from 'react'

function DisplaySkills({ title, Icon: Symbol, programlang = [] }) {
    return (
        <div className='bg-gradient-to-r from-neutral-700 to-neutral-700 rounded-sm w-3/3'  >
            <h1 className='h1fontChangeName pl-3 pt-3 pb-3 flex text-xl'>
                {Symbol && <Symbol size={24} />}
                {title}



            </h1>
            <div className='flex flex-wrap gap-2 p-3 '>
                {programlang.map((lang, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: `${lang.bgColor}80`,
                            borderColor: lang.borderColor
                        }}
                        className="flex items-center gap-2 border backdrop-blur-md px-3 py-1 rounded-full transition-transform hover:-translate-y-1"
                    >
                        {/* <span className="text-xs">{lang.icon}</span> */}
                        <span style={{ color: lang.textColor }} className="font-semibold text-[12px] uppercase tracking-wider">
                            {lang.name}
                        </span>

                    </div>
                ))}

            </div>
        </div >
    )
}

export default DisplaySkills

