import React, { useState, useEffect } from 'react';

const CurrentTime: React.FC = () => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString(
                'en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }
            ));
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return <div> {time}</div>;
};

export default CurrentTime;
