import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-zinc-950 p-6 rounded-lg shadow-md text-white w-full sm:w-1/3 m-4">
      <div className="flex justify-center mb-4">
        <img src={icon} alt="feature-icon" className="w-16 h-16" />
      </div>
      <h2 className="text-2xl mb-4">{title}</h2>
      <p className="text-base">{description}</p>
    </div>
  );
}

export default FeatureCard;