import React, { useEffect, useRef, useState } from 'react'
// import mobileIcon from './../assetconst sectionRef = useRef(null)s/17pro_mobile.png';
import desktopIcon from './../assets/hero_desktop.png';
import mobileIcon from './../assets/hero_mobile.png';
import section1Desktop from './../assets/Iphonesidebyside.png';
import A19Pro from './../assets/A19.jpg';
import bgImage from './../assets/sliderBg1.jpg';
import bgImage2 from './../assets/sliderBg2.jpg';
import section5Desktop from './../assets/sliderImage.png';
import section6Desktop from './../assets/sliderImage2.png';
import FadeInLeft from '../Components/FadeInLeft';
import FadeInTop from '../Components/FadeInTop.jsx';
import sectionDesktop from './../assets/sectionDesktop.png';
import sectionMobile from './../assets/sectionMobileeeee.png';
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
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";


import { CiCirclePlus } from "react-icons/ci";
import ScrollLoader from '../Components/ScrollLoader.jsx';








function IPhone17Pro() {
  const sectionRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setShowHeader(entry.isIntersecting)
        },
        {
          root: null,
          threshold: 0,
        }
      )

      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }

      const pointRef = sectionRef.current

      return () => {
        if (pointRef) {
        observer.unobserve(pointRef)
      }
      }
  }, [])

  const containerRef = useRef(null)

// This function scrolls a horizontally scrollable container to a specific section based on its index.
  const scrollToSection = (index) => {
  const container = containerRef.current;
// clientWidth gives the visible width of the container (excluding scrollbar)
  const sectionWidth = container.clientWidth;

  container.scrollTo({
    left: sectionWidth * index,
    behavior: "smooth",
  });
  };

  
  const features = [
  { title: "Colors", type: "color", images: [orangeColor, blueColor, silverColor], colors: ["#FF6A00", "#4A4A4A", "#D9D9D9"], icon: null, description: "Colors. Choose from three bold finishes. iPhone 17 Pro shown in Cosmic Orange."},
  { title: "Aluminum unibody", type: "single", image: aluminumImg, icon: <CiCirclePlus />, description: "Aluminum unibody. Optimized for performance and battery. Aluminum alloy is remarkably light and has exceptional thermal conductivity."},
  { title: "Vapor Chamber", type: "single", image: vaporImg, icon: <CiCirclePlus />, description: "Vapor chamber. Deionized water sealed inside moves heat away from the A19 Pro chip, allowing for even higher sustained performance." },
  { title: "Ceramic Shield", type: "single", image: ceramicImg, icon: <CiCirclePlus />, description: "Ceramic Shield. Protects the back of iPhone 17 Pro, making it 4x more resistant to cracks.3 New Ceramic Shield 2 on the front has 3x better scratch resistance."},
  { title: "Immersive pro display", type: "single", image: immersiveDisplayImg, icon: <CiCirclePlus />, description: "Immersive pro display. Our best‑ever 6.3‑inch and 6.9‑inch Super Retina XDR displays.5 Brighter. Better anti‑reflection. ProMotion up to 120Hz." },
  { title: "Camera Control", type: "single", image: cameraImg, icon: <CiCirclePlus />, description: "<b>Camera Control.</b> Instantly take a photo, record video, adjust settings, and more. So you never miss a moment."},
  { title: "Action button", type: "single", image: actionImg, icon: <CiCirclePlus />, description: "<b>Action button.</b> A customizable fast track to your favorite feature. Long press to launch the action you want — Silent mode, Translation, Shortcuts, and more."},
];

// This code determines which image should display on the right
const currentImage = activeIndex === null ? iPhone : features[activeIndex].type === "color" ? features[activeIndex].images[selectedColor] : features[activeIndex].image;

  return (
        <div className="w-full">

        {/* Hero Section */}
          <div className="bg-black w-full pt-10 relative">
              <div className="max-w-7xl mx-auto">
                <picture>
                  <source media="(min-width: 768px)" srcSet={desktopIcon} />
                  <img src={mobileIcon} alt="Hero" className="w-full max-w-3xl mx-auto object-cover px-20 md:max-w-5xl" />
                </picture>
              </div>

              <div className=" absolute left-1/2 -translate-x-1/2 bottom-0 md:bottom-10 w-full md:w-auto h-15 md:h-auto bg-zinc-900/50 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none flex items-center justify-center " >   
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors cursor-pointer">
                  Find a Store
                </button>
              </div>
          </div>


    {/* This header is where we are observing when it gets to this div beneath it and then it displays */}
        <div ref={sectionRef}>

          {showHeader &&  ( 
            <div className='sticky top-0 left-0 bg-zinc-900/50 backdrop-blur-xl w-full  max-w-5xl rounded-2xl mx-auto '>
              <header className=' flex items-center justify-between h-14 px-6'>
                <h1 className='text-white font-semibold text-xl'> iPhone 17 Pro</h1>
                <div className='flex items-center gap-2'>
                  <button className="text-white border-white px-3 py-1 border rounded-full cursor-pointer hover:text-gray-300">
                    Explore
                  </button>
                  <button className='bg-blue-600 text-white px-3 py-1 rounded-full font-medium hover:bg-blue-500 transition-colors cursor-pointer'>
                    Find a store
                  </button>
                </div>
              </header>
          </div>
          )}

          <div className="bg-zinc-800 w-full py-18 " >

            <div className='mx-6 md:ml-16 overflow-hidden'>

            <div className='my-20'>
              <FadeInTop>
              <h1 className='text-white text-2xl sm:text-2xl font-semibold md:text-[55px] '> Get the highlights. </h1>
              </FadeInTop>
            </div>

          
          <div className='flex overflow-x-auto scroll-smooth scrollbar-none overflow-auto snap-x snap-mandatory ' ref={containerRef}>
          
          {/* First Section in the slider  */}
            <section className='bg-black w-full h-full py-8 rounded-3xl max-w-5xl shrink-0 overflow-hidden snap-start'> 
              <div className='px-6'>
                <FadeInLeft>
                <h2 className='text-white text-center font-semibold text-2xl md:text-3xl max-w-2xl mx-auto '> Heat‑forged aluminum unibody design for exceptional pro capability. </h2>
                </FadeInLeft>
              </div>

              <div className="my-12 px-20 "> 
                <picture>
                  <source media="(min-width: 768px)" srcSet={section1Desktop} />
                  <img src={mobileIcon} alt="Hero" className="w-full max-w-3xl mx-auto object-cover" />
                </picture>
              </div> 
            </section>

        {/* Second section in the slider */}
          <section className='bg-black w-full h-full py-8 mx-8 rounded-3xl max-w-5xl shrink-0 snap-start'>
            <div className="mt-8 px-3"> 
              <picture>
                <source media="(min-width: 768px)" srcSet={A19Pro} />
                <img src={A19Pro} alt="Hero" className="w-full max-w-sm mx-auto object-cover" />
              </picture>
            </div>

            <div className='my-20 px-6'>
              <FadeInLeft>
                <h2 className='text-white text-center font-semibold text-xl sm:text-2xl md:text-2xl w-full max-w-145 mx-auto'>
                A19 Pro, vapor cooled for lightning‑fast performance. Breakthrough battery life.
                </h2>
              </FadeInLeft>
            </div>
          </section>

      {/* third section in the slider */}
          <section className=' bg-cover bg-center mx-8 pt-6 w-full max-w-5xl  rounded-3xl shrink-0 snap-start' style={{backgroundImage: "url('./../assets/bg.jpg')"}}>
            <div className='mt-6 w-full max-w-135 px-6'>
              <FadeInLeft>
                <h2 className='text-black font-semibold text-[25px] text-left'>
                  The ultimate pro camera system. All 48MP Fusion rear cameras. And the longest zoom ever on  an iPhone.
                </h2>
              </FadeInLeft>
            </div>
          </section>

        {/* Fourth section in the slider */}
          <section className=' bg-cover bg-center mx-8 pt-6 w-full py-8 rounded-3xl max-w-5xl shrink-0 snap-start' style={{backgroundImage: `url(${bgImage2})`}}>
            <div className='w-full max-w-131.25 mx-auto mb-10 px-6'>
              <FadeInLeft>
                <h2 className='text-white font-semibold text-[20px] text-center md:text-[24px] '>
                New Center Stage front camera. Flexible ways to frame your shot. Smarter group selfies. And so much more.
                </h2>
              </FadeInLeft>
            </div>
          </section>
        
      {/* Fifth section in the slider  */}
           <section className='bg-black mx-8 w-full max-w-5xl pt-8 rounded-3xl shrink-0 snap-start'>
              <div className='px-10'>
                <FadeInLeft>
                <h2 className='text-gray-300 text-center font-semibold text-2xl w-full md:text-3xl '> iOS 26. New look. Even more magic. </h2>
                </FadeInLeft>
              </div> 

              <div className="mt-14 px-6"> 
                <picture>
                  <source media="(min-width: 768px)" srcSet={section5Desktop} />
                    <img src={section5Desktop} alt="Hero" className="w-full max-w-5xl mx-auto object-cover" />
                </picture>
              </div> 
            </section>

        {/* Sixth section in the slider */}
            <section className='bg-black mx-8 w-full max-w-5xl pt-8 rounded-3xl shrink-0 snap-start'>
              <div className='px-10'>
                <FadeInLeft>
                <h2 className='font-semibold text-3xl mb-2 bg-linear-to-r from-blue-500 via-purple-500 to-red-600  bg-clip-text text-transparent'> Apple Intelligence. </h2>
                </FadeInLeft>
              </div> 

              <div className="mt-14 px-6"> 
                  <picture>
                    <source media="(min-width: 768px)" srcSet={section5Desktop} />
                    <img src={section5Desktop} alt="Hero" className="w-full max-w-5xl mx-auto object-cover" />
                  </picture>
              </div> 
            </section>

            <section className='bg-black mx-8 h-full w-full max-w-5xl pt-8 rounded-3xl  '>

              <div className=" w-full max-w-112.5">
                <FadeInLeft>
                <h2 className='font-semibold text-3xl mb-2 bg-linear-to-r from-blue-500 via-purple-500 to-red-600  bg-clip-text text-transparent'> Apple Intelligence. </h2>
                <h1 className='text-white text-3xl font-semibold mb-2'> Effortlessly helpful features — from image creation to Live Translation.1,2 </h1>
                <h3 className='text-gray-500 font-semibold mb-2 text-xl'> Available in select languages </h3>
                </FadeInLeft>
              </div> 
              

              <div className=""> 
                <picture>
                  <source media="(min-width: 768px)" srcSet={section6Desktop} />
                  <img src={section6Desktop} alt="Hero" className="w-full max-w-8xl mx-auto object-cover" />
                </picture>
              </div> 
            </section>

          </div>
          </div>

        {/* This div represents the buttons that will click that takes us to each slider sections */}
          <div className='bg-zinc-800 mt-20 w-full py-6 rounded-full  mx-auto max-w-50'>
              <div className="flex justify-center items-center gap-4">
                {[...Array(6)].map((_, index) => (
                  <button key={index} onClick={() => scrollToSection(index)} className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-700 transition-all duration-300"
                  />
                ))}
              </div>
          </div>
          </div>

      {/* New Div starts here  */}
          <div className='bg-zinc-900 pb-14'>
            
            
            <div className='text-left pl-6 pr-8 mx-auto md:text-center pt-38'>
            <FadeInTop>
              <p className='text-orange-400 font-bold text-2xl'> Design </p>

              <div className='md:max-w-3xl mx-auto my-2 '>
                <h1 className='text-white text-[40px] font-semibold md:text-7xl leading-none'> Unibody enclosure. Makes a strong case for itself. </h1>
              </div>

              <div className='mt-8 md:max-w-190 mx-auto my-8'>
                <h2 className='text-gray-400 text-[18px]  md:text-[21px] font-semibold leading-snug'> Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful iPhone models ever made. At the core of the new design is a heat-forged aluminum unibody enclosure that maximizes performance, battery capacity, and durability. 
                </h2>
              </div>
              </FadeInTop>
            </div>
          
            <div className='mx-auto mt-16 md:pt-40 pb-110'>
              <picture>
                <source media="(min-width: 768px)" srcSet={sectionDesktop} />
                <img src={sectionMobile} alt="" className='w-full max-w-20 mx-auto object-cover md:max-w-4xl' />
              </picture>
            </div>

            <div>
              <FadeInTop>
                <h1 className='text-white text-[30px] pl-6 font-semibold md:text-[50px] md:pl-20 '> Take a closer look. </h1>
              </FadeInTop>
            </div>
          </div>

       {/* This is another div */}
       
          <div className='bg-black pt-16 pb-28 w-full overflow-hidden'>
{/* This component section has three main systems working together */}
{/* 1. Vertical Navigation (up/ down)
2. Feature switching (Small & Big div)
3. Image rendering logic (driven by state) */}
          <ScrollLoader delay={4000}>
            <div className="flex flex-col-reverse gap-6 relative min-h-screen md:flex-row">
          {/* LEFT NAVIGATION */}
          <div className="hidden md:flex absolute  flex-row  md:flex-col left-6 top-1/2  gap-6 z-50">
            <button onClick={() => {
                if (activeIndex !== null) {
                  setActiveIndex((prev) =>
                    prev > 0 ? prev - 1 : prev
                );
                  setSelectedColor(0);
              }
              }} className="text-white text-2xl bg-zinc-800 rounded-full p-1.5 cursor-pointer           transition-all ease-in" >
                  <IoIosArrowUp/>
            </button>

            <button onClick={() => {
              if (activeIndex !== null) {
                setActiveIndex((prev) =>
                  prev < features.length - 1 ? prev + 1 : prev
              );
                setSelectedColor(0);
              }
              }} className="text-white text-2xl bg-zinc-800 rounded-full p-1.5 cursor-pointer transition-all ease-in" >
                  <IoIosArrowDown/>
            </button>
          </div>

      {/* LEFT FEATURES COLUMN */}
          
          <div className="w-full max-w-xs ml-4 pt:2 md:pt-10 md:ml-24">
            
            <div className='flex overflow-x-auto scroll-smooth md:flex-col md:overflow-hidden'>
            {features.map((feature, index) => (
              <div key={index} className="mt-3 min-w-[320px] md:min-w-0 shrink-0 ">
                {activeIndex === index ? (
              /* BIGGER DIV */
              
              <div className="bg-zinc-900 p-4 rounded-3xl shadow-2xl ">
                <p className="text-white font-semibold ">
                  {feature.description}
                </p>

                {/* COLORS FEATURE */}
                {feature.type === "color" && (
                  <div className="flex justify-center gap-4 mt-4">
                    {feature.colors.map((color, idx) => (
                      <div key={idx} onClick={() => setSelectedColor(idx)}
                        className={`h-7 w-7 rounded-full cursor-pointer border-2 ${
                          selectedColor === idx
                            ? "border-white"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}/>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* SMALL DIV */
              <div className='flex items-center '>
              <div onClick={() => {
                  setActiveIndex(index);
                  // Automatically activate orange when Colors is opened
                  if (feature.type === "colors") {
                    setSelectedColor(0);
                  }
                }} className="bg-zinc-800 px-6 py-4 rounded-full flex items-center gap-3 cursor-pointer hover:bg-zinc-700 transition-colors ">
                {/* Orange circle beside first feature */}
                {index === 0 && (
                  <div className="h-6 w-6 rounded-full bg-orange-500" />
                )}
                {feature.icon && (
                  <div className="text-white text-2xl">
                    {feature.icon}
                  </div>
                )}
                <h2 className="text-white font-semibold text-[18px] md:text-[18px]">
                  {feature.title}
                </h2>
              </div>
              </div>
            )}
          </div>
        ))}
        </div>
        </div>
        

      {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-start">
          {activeIndex !== null && (
            <button onClick={() => {
                setActiveIndex(null);
                setSelectedColor(0);
              }} className="absolute -top-2 right-4 text-white text-xl bg-zinc-800 rounded-full p-2 cursor-pointer font-bold">
                <RxCross1/>
            </button>
          )}

        <div className='w-full flex items-center justify-center overflow-hidden'>
          <img src={currentImage} alt="Right Image" className="w-full h-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-2xl px-4"/>
        </div>
      </div>
      </div>
      </ScrollLoader>
      </div>


      {/* Another Div Starts  here */}
      <div className='w-full h-20 bg-zinc-800'>
        
      </div>

      <div>
        
      </div>




        
        </div>
        </div>
        
      
    
  )
}

export default IPhone17Pro