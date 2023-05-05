import React, { useState, useEffect } from 'react';

const titles = ['Audio Visual Technician', 'Web Developer', 'Full-Stack Developer'];

function Title() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((index + 1) % titles.length);
        }, 3000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="mb-5 text-2xl" id="about-me">
            {titles[index]}
        </div>
    );
}

export default Title;