// widgethackathon.tsx
import React from 'react'
import ListHackathon from './listhackathon'
import CurrentTimeWidget from '@/components/ui/current-time-widget'

export default function WidgetHackathon() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-8 w-full place-items-center  md:m-10 lg:m-20">

            {/* 4 app icons fill the left 2 columns in a 2x2 grid */}
            <div className="col-span-2 grid grid-cols-2 gap-4 w-full place-items-center">
                <ListHackathon />
            </div>

            {/* Clock widget — tall rectangle on the right */}
            <div className="hidden md:flex col-span-1 w-full self-stretch rounded-[2rem] 
                bg-zinc-900/80 backdrop-blur-sm border border-white/10 
                hover:border-yellow-400/20 transition-colors
                items-center justify-center p-6 min-h-[300px]">
                <CurrentTimeWidget />
            </div>

            {/* Clock widget — shown below on mobile */}
            <div className="md:hidden col-span-2 w-full rounded-[2rem] 
                bg-zinc-900/80 backdrop-blur-sm border border-white/10 
                hover:border-yellow-400/20 transition-colors
                flex items-center justify-center p-6 h-32">
                <CurrentTimeWidget />
            </div>

        </div>
    )
}