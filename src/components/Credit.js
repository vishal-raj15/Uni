import React from 'react';

const CreditBanner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[75vh] bg-slate-800">
            <h1 className=" text-center text-4xl font-bold w-3/4 text-white">
                At Uni, we’re committed to delivering an unmatched credit experience for millions of Indians.
            </h1>
            <p className=" text-center text-lg mb-8 mt-10 text-white">
                On this mission, we’ve partnered with some of the best in the business.
            </p>
            <div className="text-xl font-semibold items-center justify-center">
                <span className=" text-center">Smart Banking by</span>
                <span className=" text-yellow-400">SBM bank</span>
            </div>
        </div>
    );
}

export default CreditBanner;