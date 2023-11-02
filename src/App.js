import React, { useState, useEffect} from "react"
import FrontPage from "./components/FrontPage"
import Navbar from "./components/Navbar"
import Lower1 from "./components/Lower1"
import Lower2 from "./components/Lower2"
import Lower3 from "./components/Lower3"
import Lower4 from "./components/Lower4"
import Lower5 from "./components/Lower5"
import Lower6 from "./components/Lower6"
import Footer from "./components/Footer"
import Footer2 from "./components/Footer2"
const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      // Display the element once the user has scrolled a full screen height
      if (scrolled > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    {show && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black z-20">
          <div className="max-w-md mx-auto flex justify-between items-center bg-white p-4 rounded-md shadow-md">
            <input
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter Phone Number"
            />
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">
              Apply Now
            </button>
          </div>
          <p className="text-white mt-2 text-center">
            You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.
          </p>
        </div>
      )}
      <FrontPage />
      <Lower1 />
      <Lower2 />
      <Lower3 />
      <Lower4 />
      <Lower5 />
      <Lower6 />
      <Footer />
      <Footer2 />
    </>
  )
}

export default App
// https://www.uni.cards/images/nx-wave/nx_wave_hero.png
// video - https://www.uni.cards/videos/nxt_wave_bg.mp4