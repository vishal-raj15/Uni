import React, { useState} from 'react';

const Lower3 = () => {
  return (

    <>

    <div className='flex flex-col sm:flex-row bg-transparent z-10 w-full'>
   
        
    {/* Right container - It'll stack on top when screen is small */}
    <div className="flex-2 bg-white z-10 p-4 order-2 sm:order-1 w-full sm:w-1/2">
        <div className='justify-center items-center z-10'>
        <img src="https://www.uni.cards/images/five_x_rewards.png" className="w-[300px] h-[300px] m-4 sm:w-[400px] sm:h-[400px]"/></div>
    </div>

    {/* Left container */}
    <div className="flex-3 bg-blue-200 p-4 order-1 sm:order-2 w-full sm:w-1/2 bg-transparent z-10">
    <div className="bg-transparent z-10 p-8 rounded  m-6 ">
                    <p className=" text-5xl pt-4 "><span className='font-bold'>5x more value than your cashback, </span><span className='text-slate-400'>only at the Uni Store.</span></p>
  
    </div>
                
                </div>

</div>

</>

 


);
}

export default Lower3;

