
import React from 'react';
import FeatureCard from './Card';
import CreditBanner from './Credit';

const Footer = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row sm:w-full bg-zinc-950">
      <FeatureCard
        icon="/whatsapp_bubble.webp"
        title="Help, just a WhatsApp away."
        description="During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime."
      />
      <FeatureCard
        icon="/whatsapp_bubble.webp"
        title="No hidden charges, no last minute surprises."
        description="100% money back guarantee if a charge is applied without your knowledge."
      />
      <FeatureCard
        icon="/whatsapp_bubble.webp"
        title="Super secure. Because we care about your money."
        description=""
      />
    </div>
    <div className='bg-slate-400'> <CreditBanner /></div>
   

    </>
  );
}

export default Footer;