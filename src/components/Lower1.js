import React, { useState, useEffect, useRef } from 'react';
import ArrowIcon from './Arrow';
function AnimatedHeaders() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [arrow , setArrow] = useState(false)

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible1(true);

                setTimeout(() => {
                    setIsVisible2(true);
                }, 300); // Delay for second h1

                setTimeout(() => {
                    setIsVisible3(true);
                }, 600); // Delay for third h1

                setTimeout(() => {
                    setIsVisible4(true)
                },900)

                setTimeout(() => {
                    setArrow(true)
                }, 2000)
            }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="space-y-4 sm:space-y-6 md:space-y-8 ml-4 mr-4 flex flex-col items-center justify-center h-screen">
            <p className={`text-xl sm:text-2xl md:text-4xl transform transition-transform duration-1000 ${isVisible1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
           <span className='font-bold'> Earn 1% assured cashback</span>  on your spends. Get <span  className='font-bold'>5X</span>
            </p>
            <p className={`text-xl sm:text-2xl md:text-4xl transform transition-transform duration-1000 ${isVisible2 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <span  className='font-bold'>more value than cashback</span> at the Uni Store. Enjo
            </p>
            <p className={`text-xl sm:text-2xl md:text-4xl transform transition-transform duration-1000 ${isVisible3 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            round the clock <span className='font-bold'>Whatsapp support.</span> And it's
            </p>
            <p className={`text-xl sm:text-2xl md:text-4xl transform transition-transform duration-1000 ${isVisible4 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
           <span  className='font-bold'>lifetime free;</span>  no joining fee, no annual charges.
            </p>

            <div className="flex  sm:justify-center">
                <div className={` transform transition-transform duration-1000 ${arrow ? 'translate-y-20 opacity-100' : '-translate-y-0 opacity-0'}`}><ArrowIcon /></div>
            

            </div>

        </div>
    );
}

export default AnimatedHeaders;
