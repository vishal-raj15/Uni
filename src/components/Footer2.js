import React from 'react'

const Footer2 = () => {
  return (
    <div className="bg-black text-white p-8 h-[60vh]">
            <h1 className="text-4xl font-bold mb-6">Uni<span className="text-green-500">•</span></h1>
            
            <address className="mb-6">
                Indiqube Sigma No.3/B, Nexus<br />
                Koramangala 3rd Block SBI Colony,<br />
                Koramangala, Bengaluru, Karnataka<br />
                560034<br />
                <br />
                Contact Us: <a href="tel:08068216821" className="text-green-500">080 68216821</a><br />
                Email: <a href="mailto:care@uni.club" className="text-green-500">care@uni.club</a>
            </address>
            
            <hr className="mb-6 border-gray-600" />
            
            <p className="mb-6">
                Grievance Redressal Mechanism - SBI Bank India
            </p>
            
            <hr className="mb-6 border-gray-600" />
            
            <div className="flex justify-between">
                <a href="#" className="text-green-500 hover:underline">Instagram</a>
                <a href="#" className="text-green-500 hover:underline">LinkedIn</a>
                <a href="#" className="text-green-500 hover:underline">Twitter</a>
                <a href="#" className="text-green-500 hover:underline">Facebook</a>
                <a href="#" className="text-green-500 hover:underline">Careers</a>
                <a href="#" className="text-green-500 hover:underline">Credit Card KFS</a>
                <a href="#" className="text-green-500 hover:underline">Credit Card T&Cs</a>
                <a href="#" className="text-green-500 hover:underline">Uni T&Cs</a>
                <a href="#" className="text-green-500 hover:underline">Lending Partner TnCs</a>
            </div>
        </div>

  )
}

export default Footer2
