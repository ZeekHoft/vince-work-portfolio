import React, { useState, useEffect } from 'react';

const CurrentTimeWidget: React.FC = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const time = now.toLocaleTimeString('en-GB', {
        hour: '2-digit', minute: '2-digit', hour12: false,
    });
    const day = now.getDate();
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <div className="flex flex-col items-center justify-center text-center gap-3 font-mono">
            {/* Big time */}
            <span className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-none">
                {time}
            </span>

            {/* Divider */}
            <div className="w-12 h-px bg-yellow-400/40" />

            {/* Day number big */}
            <span className="text-6xl md:text-7xl font-bold text-yellow-400 leading-none">
                {day}
            </span>

            {/* Month */}
            <span className="text-base md:text-lg text-white/60 uppercase tracking-widest">
                {month}
            </span>

            {/* Weekday */}
            <span className="text-xs text-white/30 uppercase tracking-widest">
                {weekday}
            </span>
        </div>
    );
};

export default CurrentTimeWidget;