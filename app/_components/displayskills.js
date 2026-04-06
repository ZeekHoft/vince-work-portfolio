

import React from 'react'

function DisplaySkills({ title, Icon: Symbol, programlang = [] }) {
    return (
        <div className='bg-gradient-to-r from-neutral-700 to-neutral-700 rounded-sm w-3/3'  >
            <h1 className=' p-3 flex text-xl'>
                <div className='pr-2 h1fontChangeName'>
                    {Symbol && <Symbol size={26} />}

                </div>
                <div className=' text-white'>

                    {title}

                </div>



            </h1>
            <div className='flex flex-wrap gap-2 pl-3 pb-5 '>
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

