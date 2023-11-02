import React, { useState} from 'react';
import Navbar from './Navbar';

const FrontPage = () => {
    const [isChecked, setIsChecked] = useState(false);
  return (

    <>
    <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
                <source src="https://www.uni.cards/videos/nxt_wave_bg.mp4" type="video/mp4" />
            </video>


    <div className='min-h-screen flex flex-col bg-transparent z-10 w-full h-full'>
        <Navbar />
    <div className="min-h-screen flex flex-col sm:flex-row bg-transparent z-10">
        
    {/* Right container - It'll stack on top when screen is small */}
    <div className="flex-2 bg-transparent z-10 p-4 order-1 sm:order-2 w-full sm:w-1/2">
        <div className='justify-center items-center z-10'>
        <img src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png" className="w-[200px] h-[200px] m-4 sm:w-[400px] sm:h-[400px]"/></div>
    </div>

    {/* Left container */}
    <div className="flex-3 bg-blue-200 p-4 order-2 sm:order-1 w-full sm:w-1/2 bg-transparent z-10">
    <div className="bg-transparent z-10 p-8 rounded  m-6 ">
                    <p className=" text-5xl pt-4 "> <span className='font-bold'>NX Wave.</span> The next-gen credit card for those who love rewards.</p>

                    <p className=" text-md pt-4 mt-4"> 1% Cashback5x RewardsZero Forex Markup</p>

                    <div className="hidden md:flex mt-8 w-full sm:w-2/3 bg-black bg-opacity-70 p-2 rounded-lg flex flex-row  space-y-2  justify-between">
    <input type="text" className="flex-1 bg-transparent rounded-lg" placeholder="Enter phone number" />
    <button className="bg-yellow-400 text-black p-2 rounded-lg">Apply now</button>

</div>

                <div className="bg-transparent z-10 flex items-center mt-4 text-xs w-full sm:w-2/3 hidden md:block">
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
            />
            <span style={{ fontSize: '0.5rem' }}>You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</span>
        </div>

                
                </div>
    </div>
</div></div>

</>

 


);
}

export default FrontPage;


{/* <div className="min-h-screen bg-teal-100 flex justify-center items-center">
<div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl">
  <h1 className="text-2xl font-bold mb-4">NX Wave. The next-gen credit card for those who love rewards.</h1>
  <div className="mb-4">
    <span className="text-xl font-medium">1% Cashback</span> + <span className="text-xl font-medium">5x Rewards</span> + <span className="text-xl font-medium">Zero Forex Markup</span>
  </div>
  <div className="mb-4">
    <input type="text" placeholder="Enter Phone Number" className="border rounded-md px-3 py-2 w-full"/>
  </div>
  <button className="bg-teal-600 text-white py-2 px-6 rounded-md">Apply Now</button>
  <div className="text-sm mt-3">
    <input type="checkbox" className="mr-2"/>
    You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.
  </div>
</div>
</div> */}