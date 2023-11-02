import React, { useState} from 'react';

const Lower6 = () => {
  return (

    <>

    <div className='flex flex-col sm:flex-row bg-zinc-950 z-10 w-full'>
   
        
    {/* Right container - It'll stack on top when screen is small */}
    <div className="flex-2 bg-zinc-950 z-10 p-4 order-1 sm:order-2 w-full sm:w-1/2">
        <div className='justify-center items-center z-10'>
        <img src="/app_screen_2.webp" className="w-[300px] h-[300px] m-4 sm:w-[400px] sm:h-[600px]"/></div>
    </div>

    {/* Left container */}
    <div className="flex-3 bg-zinc-950 p-4 order-2 sm:order-1 w-full sm:w-1/2 bg-transparent z-10">
    <div className="bg-transparent z-10 p-8 rounded  m-6 ">
                    <p className=" text-5xl pt-4 "><span className='font-bold text-white'>With Uni </span><span className='text-slate-400'>you’re always in control.</span></p>

                    <p className=' mt-10 text-xl text-slate-200'>Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.</p>
           </div>
                </div>

</div>




</>

 


);
}

export default Lower6;

