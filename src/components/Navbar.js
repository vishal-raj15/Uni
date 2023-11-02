import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-teal-200 p-4 bg-transparent z-10">
            <div className="container mx-auto flex justify-between items-center bg-transparent z-10">
                
                <div className="text-black font-bold text-4xl sm:text-6xl">uni•</div>
                
                {/* Larger Screens */}
                <div className="hidden sm:block">
                    <button className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-xl">
                        Uni Paycheck
                    </button>
                </div>

                {/* Smaller Screens */}
                <div className="sm:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none mr-4">
                        {isOpen ? <i class="fa fa-window-close fa-lg" aria-hidden="true"></i> : <i className="fas fa-bars fa-lg"></i>}
                    </button>

                    {isOpen && (
                        <div className="absolute top-12 left-0 w-full mt-4 bg-black bg-opacity-50 z-10 ">
                            <a href="#" className="block p-2 text-white flex justify-between">
                                Uni Paycheck
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
}

export default Navbar;
