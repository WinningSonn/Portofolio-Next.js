"use client"
import React, { useEffect, useState } from 'react'

const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    // Animation 5-10 seconds
    animationDuration: `${Math.random() * 5 + 5}s`
})

const FireFLiesBackground = () => {

    const [fireflies, setFireflies] = useState([])

    useEffect(() => {
      
        const addFireflyPeriodically = () => {
            const newFirefly = createFirefly();
            setFireflies(currentFireflies =>
                [
                    ...currentFireflies.slice(-14),
                    newFirefly
                ]
            )
        }

        const interval = setInterval(addFireflyPeriodically, 1000);

        return () => clearInterval(interval)
    }, [])
    

    return (
        <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
            {
                fireflies.map((firefly) => {
                    return (
                        <div 
                            key={firefly.id}
                            className='absolute rounded-full bg-accent w-[5px] h-[5px] bg-firefly-radial'
                            style={{
                                top: firefly.top,
                                left: firefly.left,
                                animation: `move ${firefly.animationDuration} infinite alternate`,
                                boxShadow: '0 0 10px 2px rgba(253, 255, 80, 0.5), 0 0 20px 4px rgba(253, 255, 80, 0.5), 0 0 30px 6px rgba(253, 255, 80, 0.5)'
                            }}
                        ></div>
                    );
                })
            }
        </div>
    );
}

export default FireFLiesBackground;
