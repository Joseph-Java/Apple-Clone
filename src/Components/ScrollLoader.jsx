import { useEffect, useRef, useState } from "react";


import iPhone from './../assets/iphone_picture.png';
import orangeColor from './../assets/colors_orange.jpg';
import blueColor from './../assets/colors_blue.jpg';
import silverColor from './../assets/colors_silver.jpg';
import aluminumImg from './../assets/aluminum_large.jpg';
import vaporImg from './../assets/vapor_chamber_large.jpg';
import ceramicImg from './../assets/ceramic_shield.jpg';
import immersiveDisplayImg from './../assets/immersive_pro_display.jpg';
import cameraImg from './../assets/camera_control.jpg';
import actionImg from './../assets/action_button_large.jpg';
import { CiCirclePlus } from "react-icons/ci";









function ScrollLoader({ children, delay = 1500 }) {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(7).fill(null);
  const [hasLoaded, setHasLoaded] = useState(false);
   const [activeIndex, setActiveIndex] = useState(null)
    const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setLoading(true);

          setTimeout(() => {
            setLoading(false);
            setHasLoaded(true);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, [hasLoaded, delay]);

  const features = [
    { title: "Colors", type: "color", images: [orangeColor, blueColor, silverColor], colors: ["#FF6A00", "#4A4A4A", "#D9D9D9"], icon: null, description: "Colors. Choose from three bold finishes. iPhone 17 Pro shown in Cosmic Orange."},
    { title: "Aluminum unibody", type: "single", image: aluminumImg, icon: <CiCirclePlus />, description: "Aluminum unibody. Optimized for performance and battery. Aluminum alloy is remarkably light and has exceptional thermal conductivity."},
    { title: "Vapor Chamber", type: "single", image: vaporImg, icon: <CiCirclePlus />, description: "Vapor chamber. Deionized water sealed inside moves heat away from the A19 Pro chip, allowing for even higher sustained performance." },
    { title: "Ceramic Shield", type: "single", image: ceramicImg, icon: <CiCirclePlus />, description: "Ceramic Shield. Protects the back of iPhone 17 Pro, making it 4x more resistant to cracks.3 New Ceramic Shield 2 on the front has 3x better scratch resistance."},
    { title: "Immersive pro display", type: "single", image: immersiveDisplayImg, icon: <CiCirclePlus />, description: "Immersive pro display. Our best‑ever 6.3‑inch and 6.9‑inch Super Retina XDR displays.5 Brighter. Better anti‑reflection. ProMotion up to 120Hz." },
    { title: "Camera Control", type: "single", image: cameraImg, icon: <CiCirclePlus />, description: "<b>Camera Control.</b> Instantly take a photo, record video, adjust settings, and more. So you never miss a moment."},
    { title: "Action button", type: "single", image: actionImg, icon: <CiCirclePlus />, description: "<b>Action button.</b> A customizable fast track to your favorite feature. Long press to launch the action you want — Silent mode, Translation, Shortcuts, and more."},
  ];

  // const currentImage = activeIndex === null ? iPhone : features[activeIndex].type === "color" ? features[activeIndex].images[selectedColor] : features[activeIndex].image;

  return (
    <div ref={ref}>
      {loading ? (
        
            <div className="flex gap-14 relative min-h-screen">
                      {/* LEFT NAVIGATION */}
                      
            
                  {/* LEFT FEATURES COLUMN */}
                      
                      <div className="w-full max-w-xs pt-20 ml-24 ">
                        {features.map((feature, index) => (
                          <div key={index} className="mt-3">
                            {activeIndex === index ? (
                          /* BIGGER DIV */
                          <div className="bg-zinc-900 p-6 rounded-3xl shadow-2xl max-w-xs">
                            
            
                            {/* COLORS FEATURE */}
                            
                          </div>
                        ) : (
                          /* SMALL DIV */
                          <div className="bg-zinc-800 pt-6 pb-6 pl-4 pr-8 rounded-full animate-pulse">
                            
                          </div>
                        )}
                      </div>
                    ))}
                    </div>
                    
            
                  {/* RIGHT IMAGE */}
                    <div className="relative flex-1 flex justify-center items-start">
                      {activeIndex !== null && (
                        <button onClick={() => {
                            setActiveIndex(null);
                            setSelectedColor(0);
                          }} className="absolute -top-2 right-4 text-white text-xl bg-zinc-800 rounded-full p-2 cursor-pointer font-bold">
                            
                        </button>
                      )}
            
                    
                  </div>
                  </div>
          
        
        
      ) : (
        children
      )}
    </div>
  );
}

export default ScrollLoader;