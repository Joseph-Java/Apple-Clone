import React, { useEffect, useRef, useState } from "react";
// import mobileIcon from './../assetconst sectionRef = useRef(null)s/17pro_mobile.png';
import desktopIcon from "./../assets/hero_desktop.png";
import mobileIcon from "./../assets/hero_mobile.png";
import section1Desktop from "./../assets/Iphonesidebyside.png";
import A19Pro from "./../assets/A19.jpg";
import bgImage from "./../assets/sliderBg1.jpg";
import bgImage2 from "./../assets/sliderBg2.jpg";
import section5Desktop from "./../assets/sliderImage.png";
import section6Desktop from "./../assets/sliderImage2.png";
import FadeInLeft from "../Components/FadeInLeft";
import FadeInTop from "../Components/FadeInTop.jsx";
import sectionDesktop from "./../assets/sectionDesktop.png";
import sectionMobile from "./../assets/sectionMobileeeee.png";
import iPhone from "./../assets/iphone_picture.png";
import orangeColor from "./../assets/colors_orange.jpg";
import blueColor from "./../assets/colors_blue.jpg";
import silverColor from "./../assets/colors_silver.jpg";
import aluminumImg from "./../assets/aluminum_large.jpg";
import vaporImg from "./../assets/vapor_chamber_large.jpg";
import ceramicImg from "./../assets/ceramic_shield.jpg";
import immersiveDisplayImg from "./../assets/immersive_pro_display.jpg";
import cameraImg from "./../assets/camera_control.jpg";
import actionImg from "./../assets/action_button_large.jpg";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import heroCamera from "./../assets/hero_camera.jpg";
import { CiCirclePlus } from "react-icons/ci";
import ScrollLoader from "../Components/ScrollLoader.jsx";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import rearImage from "./../assets/rear_camera_large.jpg";
import videoLarge from './../assets/video_large_2x.png';
import proVideoLarge from './../assets/pro_video_large.jpg';
import proVideoSmall from './../assets/pro_video_small.jpg';



// mm Starts here
import mm100 from "../assets/MM Folder/100mm.jpg";
import mm100Small from "../assets/MM Folder/100mm_small.jpg";
import mm13 from "../assets/MM Folder/13m.jpg";
import mm13Small from "../assets/MM Folder/13mm_small.jpg";
import mm200 from "../assets/MM Folder/200mm.jpg";
import mm200Small from "../assets/MM Folder/200mm_small.jpg";
import mm24 from "../assets/MM Folder/24mm.jpg";
import mm24Small from "../assets/MM Folder/24mm_small.jpg";
import mm28 from "../assets/MM Folder/28mm.jpg";
import mm28Small from "../assets/MM Folder/28mm_small.jpg";
import mm35Small from "../assets/MM Folder/35mm_small.jpg";
import mm35 from "../assets/MM Folder/35mm__.jpg";
import mm48 from "../assets/MM Folder/48mm.jpg";
import mm48Small from "../assets/MM Folder/48mm_small.jpg";
import macro from "../assets/MM Folder/macro.jpg";
import macroSmall from "../assets/MM Folder/macro_small.jpg";

// Slider starts here
import sliderImageDesktop1 from './../assets/slider Folder/night_mode_large.jpg';
import sliderImageMobile1 from './../assets/slider Folder/night_mode_small.jpg';
import sliderImageDesktop2 from './../assets/slider Folder/girl_large.jpg';
import sliderImageMobile2 from './../assets/slider Folder/girl_small.jpg';
import sliderImageDesktop3 from './../assets/slider Folder/people_large.jpg';
import sliderImageMobile3 from './../assets/slider Folder/people_small.jpg';
import sliderImageDesktop4 from './../assets/slider Folder/photographic_styles_large.jpg';
import sliderImageMobile4 from './../assets/slider Folder/photographic_styles_small.jpg';
import sliderImageDesktop5 from './../assets/slider Folder/clean_up_large.jpg';
import sliderImageMobile5 from './../assets/slider Folder/clean_up_small.jpg';

// Slider 2
import slider2ImageDesktop1 from './../assets/slider Folder/prores_large_2x.jpg';
import slider2ImageMobile1 from './../assets/slider Folder/prores_small.jpg';
import slider2ImageDesktop2 from './../assets/slider Folder/workflow_large_2x.jpg';
import slider2ImageMobile2 from './../assets/slider Folder/workflow_small.jpg';
import slider2ImageDesktop3 from './../assets/slider Folder/genlock_large_2x.jpg';
import slider2ImageMobile3 from './../assets/slider Folder/genlock_small.jpg';
import slider2ImageDesktop4 from './../assets/slider Folder/spatial_capture_large_2x.jpg';
import slider2ImageMobile4 from './../assets/slider Folder/spatial_capture_small.jpg';


function IPhone17Pro() {
  const sectionRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeader(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const pointRef = sectionRef.current;

    return () => {
      if (pointRef) {
        observer.unobserve(pointRef);
      }
    };
  }, []);

  const containerRef = useRef(null);

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
    {
      title: "Colors",
      type: "color",
      images: [orangeColor, blueColor, silverColor],
      colors: ["#FF6A00", "#4A4A4A", "#D9D9D9"],
      icon: null,
      description:
        "Colors. Choose from three bold finishes. iPhone 17 Pro shown in Cosmic Orange.",
    },
    {
      title: "Aluminum unibody",
      type: "single",
      image: aluminumImg,
      icon: <CiCirclePlus />,
      description:
        "Aluminum unibody. Optimized for performance and battery. Aluminum alloy is remarkably light and has exceptional thermal conductivity.",
    },
    {
      title: "Vapor Chamber",
      type: "single",
      image: vaporImg,
      icon: <CiCirclePlus />,
      description:
        "Vapor chamber. Deionized water sealed inside moves heat away from the A19 Pro chip, allowing for even higher sustained performance.",
    },
    {
      title: "Ceramic Shield",
      type: "single",
      image: ceramicImg,
      icon: <CiCirclePlus />,
      description:
        "Ceramic Shield. Protects the back of iPhone 17 Pro, making it 4x more resistant to cracks.3 New Ceramic Shield 2 on the front has 3x better scratch resistance.",
    },
    {
      title: "Immersive pro display",
      type: "single",
      image: immersiveDisplayImg,
      icon: <CiCirclePlus />,
      description:
        "Immersive pro display. Our best‑ever 6.3‑inch and 6.9‑inch Super Retina XDR displays.5 Brighter. Better anti‑reflection. ProMotion up to 120Hz.",
    },
    {
      title: "Camera Control",
      type: "single",
      image: cameraImg,
      icon: <CiCirclePlus />,
      description:
        "<b>Camera Control.</b> Instantly take a photo, record video, adjust settings, and more. So you never miss a moment.",
    },
    {
      title: "Action button",
      type: "single",
      image: actionImg,
      icon: <CiCirclePlus />,
      description:
        "<b>Action button.</b> A customizable fast track to your favorite feature. Long press to launch the action you want — Silent mode, Translation, Shortcuts, and more.",
    },
  ];

  // This code determines which image should display on the right
  const currentImage =
    activeIndex === null
      ? iPhone
      : features[activeIndex].type === "color"
        ? features[activeIndex].images[selectedColor]
        : features[activeIndex].image;

  // This is for the MM div
  const sizes = [
    {
      label: "200 mm",
      desktopImage: mm200,
      mobileImage: mm200Small,
      text: "8x",
    },
    {
      label: "100 mm",
      desktopImage: mm100,
      mobileImage: mm100Small,
      text: "4x",
    },
    { label: "48 mm", desktopImage: mm48, mobileImage: mm48Small, text: "2x" },
    {
      label: "35 mm",
      desktopImage: mm35,
      mobileImage: mm35Small,
      text: "1.5x",
    },
    {
      label: "28 mm",
      desktopImage: mm28,
      mobileImage: mm28Small,
      text: "1.2x",
    },
    { label: "24 mm", desktopImage: mm24, mobileImage: mm24Small, text: "1x" },
    { label: "13 mm", desktopImage: mm13, mobileImage: mm13Small, text: ".5x" },
    {
      label: "Macro",
      desktopImage: macro,
      mobileImage: macroSmall,
      text: "Macro",
    },
  ];

  const [activeImage, setActiveImage] = useState(0);

  const scrollRef = useRef();

  const scrollAmount = 50; // Adjust based on button width + gap

  // This code controls horizontal scrolling and active state navigation for your button list. It connects the arrow buttons, the scroll container, and the active image state.
  const scrollLeft = () => {
    // Move scroll left by fixed amount
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });

    // Update active image if possible
    if (activeImage > 0) setActiveImage(activeImage - 1);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    if (activeImage < sizes.length - 1) setActiveImage(activeImage + 1);
  };

  // This controls the movement of the slider
  const sliderRef = useRef(null);

  const sliderLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth"
    })
  }

  const sliderRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth"
    })
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-black w-full pt-10 relative">
        <div className="max-w-7xl mx-auto">
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopIcon} />
            <img
              src={mobileIcon}
              alt="Hero"
              className="w-full max-w-3xl mx-auto object-cover px-20 md:max-w-5xl"
            />
          </picture>
        </div>

        <div className=" absolute left-1/2 -translate-x-1/2 bottom-0 md:bottom-10 w-full md:w-auto h-15 md:h-auto bg-zinc-900/50 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none flex items-center justify-center ">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors cursor-pointer">
            Find a Store
          </button>
        </div>
      </div>

      {/* This header is where we are observing when it gets to this div beneath it and then it displays */}
      <div ref={sectionRef}>
        {showHeader && (
          <div className="sticky top-3 left-0 border border-gray-400 bg-zinc-950/90 backdrop-blur-xl w-full max-w-5xl rounded-2xl mx-auto z-50">
            <header className=" flex items-center justify-between h-14 px-6">
              <h1 className="text-white font-semibold text-xl">
                iPhone 17 Pro
              </h1>
              <div className="flex items-center gap-2">
                <button className="text-white border-white px-3 py-1 border rounded-full cursor-pointer hover:text-gray-300">
                  Explore
                </button>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-medium hover:bg-blue-500 transition-colors cursor-pointer">
                  Find a store
                </button>
              </div>
            </header>
          </div>
        )}

        <div className="bg-zinc-800 w-full py-18 ">
          <div className="mx-6 md:ml-16 overflow-hidden">
            <div className="my-20">
              <FadeInTop>
                <h1 className="text-white text-2xl sm:text-2xl font-semibold md:text-[55px] ">
                  Get the highlights.
                </h1>
              </FadeInTop>
            </div>

            <div className="flex overflow-x-auto scroll-smooth scrollbar-none overflow-auto snap-x snap-mandatory "
              ref={containerRef}>
              {/* First Section in the slider  */}
              <section className="bg-black w-full h-full py-8 rounded-3xl max-w-5xl shrink-0 overflow-hidden snap-start">
                <div className="px-6">
                  <FadeInLeft>
                    <h2 className="text-white text-center font-semibold text-2xl md:text-3xl max-w-2xl mx-auto ">
                      Heat‑forged aluminum unibody design for exceptional pro
                      capability.
                    </h2>
                  </FadeInLeft>
                </div>

                <div className="my-12 px-20 ">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={section1Desktop}
                    />
                    <img
                      src={mobileIcon}
                      alt="Hero"
                      className="w-full max-w-3xl mx-auto object-cover"
                    />
                  </picture>
                </div>
              </section>

              {/* Second section in the slider */}
              <section className="bg-black w-full h-full py-8 mx-8 rounded-3xl max-w-5xl shrink-0 snap-start">
                <div className="mt-8 px-3">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={A19Pro} />
                    <img
                      src={A19Pro}
                      alt="Hero"
                      className="w-full max-w-sm mx-auto object-cover"
                    />
                  </picture>
                </div>

                <div className="my-20 px-6">
                  <FadeInLeft>
                    <h2 className="text-white text-center font-semibold text-xl sm:text-2xl md:text-2xl w-full max-w-145 mx-auto">
                      A19 Pro, vapor cooled for lightning‑fast performance.
                      Breakthrough battery life.
                    </h2>
                  </FadeInLeft>
                </div>
              </section>

              {/* third section in the slider */}
              <section
                className=" bg-cover bg-center mx-8 pt-6 w-full max-w-5xl  rounded-3xl shrink-0 snap-start"
                style={{ backgroundImage: "url('./../assets/bg.jpg')" }}
              >
                <div className="mt-6 w-full max-w-135 px-6">
                  <FadeInLeft>
                    <h2 className="text-black font-semibold text-[25px] text-left">
                      The ultimate pro camera system. All 48MP Fusion rear
                      cameras. And the longest zoom ever on an iPhone.
                    </h2>
                  </FadeInLeft>
                </div>
              </section>

              {/* Fourth section in the slider */}
              <section
                className=" bg-cover bg-center mx-8 pt-6 w-full py-8 rounded-3xl max-w-5xl shrink-0 snap-start"
                style={{ backgroundImage: `url(${bgImage2})` }}
              >
                <div className="w-full max-w-131.25 mx-auto mb-10 px-6">
                  <FadeInLeft>
                    <h2 className="text-white font-semibold text-[20px] text-center md:text-[24px] ">
                      New Center Stage front camera. Flexible ways to frame your
                      shot. Smarter group selfies. And so much more.
                    </h2>
                  </FadeInLeft>
                </div>
              </section>

              {/* Fifth section in the slider  */}
              <section className="bg-black mx-8 w-full max-w-5xl pt-8 rounded-3xl shrink-0 snap-start">
                <div className="px-10">
                  <FadeInLeft>
                    <h2 className="text-gray-300 text-center font-semibold text-2xl w-full md:text-3xl ">
                      {" "}
                      iOS 26. New look. Even more magic.{" "}
                    </h2>
                  </FadeInLeft>
                </div>

                <div className="mt-14 px-6">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={section5Desktop}
                    />
                    <img
                      src={section5Desktop}
                      alt="Hero"
                      className="w-full max-w-5xl mx-auto object-cover"
                    />
                  </picture>
                </div>
              </section>

              {/* Sixth section in the slider */}
              <section className="bg-black mx-8 w-full max-w-5xl pt-8 rounded-3xl shrink-0 snap-start">
                <div className="px-10">
                  <FadeInLeft>
                    <h2 className="font-semibold text-3xl mb-2 bg-linear-to-r from-blue-500 via-purple-500 to-red-600  bg-clip-text text-transparent">
                      {" "}
                      Apple Intelligence.{" "}
                    </h2>
                  </FadeInLeft>
                </div>

                <div className="mt-14 px-6">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={section5Desktop}
                    />
                    <img
                      src={section5Desktop}
                      alt="Hero"
                      className="w-full max-w-5xl mx-auto object-cover"
                    />
                  </picture>
                </div>
              </section>

              <section className="bg-black mx-8 h-full w-full max-w-5xl pt-8 rounded-3xl  ">
                <div className=" w-full max-w-112.5">
                  <FadeInLeft>
                    <h2 className="font-semibold text-3xl mb-2 bg-linear-to-r from-blue-500 via-purple-500 to-red-600  bg-clip-text text-transparent">
                      {" "}
                      Apple Intelligence.{" "}
                    </h2>
                    <h1 className="text-white text-3xl font-semibold mb-2">
                      {" "}
                      Effortlessly helpful features — from image creation to
                      Live Translation.1,2{" "}
                    </h1>
                    <h3 className="text-gray-500 font-semibold mb-2 text-xl">
                      {" "}
                      Available in select languages{" "}
                    </h3>
                  </FadeInLeft>
                </div>

                <div className="">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={section6Desktop}
                    />
                    <img
                      src={section6Desktop}
                      alt="Hero"
                      className="w-full max-w-8xl mx-auto object-cover"
                    />
                  </picture>
                </div>
              </section>
            </div>
          </div>

          {/* This div represents the buttons that will click that takes us to each slider sections */}
          <div className="bg-zinc-800 mt-20 w-full py-6 rounded-full  mx-auto max-w-50">
            <div className="flex justify-center items-center gap-4">
              {[...Array(6)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-700 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* New Div starts here  */}
        <div className="bg-zinc-900 pb-14">
          <div className="text-left pl-6 pr-8 mx-auto md:text-center pt-38">
            <FadeInTop>
              <p className="text-orange-400 font-bold text-2xl"> Design </p>

              <div className="md:max-w-3xl mx-auto my-2 ">
                <h1 className="text-white text-[40px] font-semibold md:text-7xl leading-none">
                  {" "}
                  Unibody enclosure. Makes a strong case for itself.{" "}
                </h1>
              </div>

              <div className="mt-8 md:max-w-190 mx-auto my-8">
                <h2 className="text-gray-400 text-[18px]  md:text-[21px] font-semibold leading-snug">
                  {" "}
                  Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from
                  the inside out to be the most powerful iPhone models ever
                  made. At the core of the new design is a heat-forged aluminum
                  unibody enclosure that maximizes performance, battery
                  capacity, and durability.
                </h2>
              </div>
            </FadeInTop>
          </div>

          <div className="mx-auto mt-16 md:pt-40 pb-110">
            <picture>
              <source media="(min-width: 768px)" srcSet={sectionDesktop} />
              <img
                src={sectionMobile}
                alt=""
                className="w-full max-w-20 mx-auto object-cover md:max-w-4xl"
              />
            </picture>
          </div>

          <div>
            <FadeInTop>
              <h1 className="text-white text-[30px] pl-6 font-semibold md:text-[50px] md:pl-20 ">
                {" "}
                Take a closer look.{" "}
              </h1>
            </FadeInTop>
          </div>
        </div>

        {/* This is another div */}

        <div className="bg-black pt-16 pb-28 w-full overflow-hidden">
          {/* This component section has three main systems working together */}
          {/* 1. Vertical Navigation (up/ down)
2. Feature switching (Small & Big div)
3. Image rendering logic (driven by state) */}
          <ScrollLoader delay={4000}>
            <div className="flex flex-col-reverse gap-6 relative min-h-screen md:flex-row">
              {/* LEFT NAVIGATION */}
              <div className="hidden md:flex absolute  flex-row  md:flex-col left-6 top-1/2  gap-6 z-50">
                <button
                  onClick={() => {
                    if (activeIndex !== null) {
                      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
                      setSelectedColor(0);
                    }
                  }}
                  className="text-white text-2xl bg-zinc-800 rounded-full p-1.5 cursor-pointer           transition-all ease-in"
                >
                  <IoIosArrowUp />
                </button>

                <button
                  onClick={() => {
                    if (activeIndex !== null) {
                      setActiveIndex((prev) =>
                        prev < features.length - 1 ? prev + 1 : prev,
                      );
                      setSelectedColor(0);
                    }
                  }}
                  className="text-white text-2xl bg-zinc-800 rounded-full p-1.5 cursor-pointer transition-all ease-in"
                >
                  <IoIosArrowDown />
                </button>
              </div>

              {/* LEFT FEATURES COLUMN */}

              <div className="w-full max-w-xs ml-4 pt:2 md:pt-10 md:ml-24">
                <div className="flex overflow-x-auto scroll-smooth md:flex-col md:overflow-hidden">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="mt-3 min-w-[320px] md:min-w-0 shrink-0 "
                    >
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
                                <div
                                  key={idx}
                                  onClick={() => setSelectedColor(idx)}
                                  className={`h-7 w-7 rounded-full cursor-pointer border-2 ${
                                    selectedColor === idx
                                      ? "border-white"
                                      : "border-transparent"
                                  }`}
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* SMALL DIV */
                        <div className="flex items-center ">
                          <div
                            onClick={() => {
                              setActiveIndex(index);
                              // Automatically activate orange when Colors is opened
                              if (feature.type === "colors") {
                                setSelectedColor(0);
                              }
                            }}
                            className="bg-zinc-800 px-6 py-4 rounded-full flex items-center gap-3 cursor-pointer hover:bg-zinc-700 transition-colors "
                          >
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
                  <button
                    onClick={() => {
                      setActiveIndex(null);
                      setSelectedColor(0);
                    }}
                    className="absolute -top-2 right-4 text-white text-xl bg-zinc-800 rounded-full p-2 cursor-pointer font-bold"
                  >
                    <RxCross1 />
                  </button>
                )}

                <div className="w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={currentImage}
                    alt="Right Image"
                    className="w-full h-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-2xl px-4"
                  />
                </div>
              </div>
            </div>
          </ScrollLoader>
        </div>

        {/* Div with nothing inside, just background color*/}
        <div className="w-full h-20 bg-zinc-800"></div>

        {/* A New Div Starts here */}
        <div className="bg-black">
          <div>
            <div className="pt-34">
              <FadeInTop>
                <p className="text-orange-400 font-bold text-2xl text-center"> Camera </p>
                <div className="md:max-w-3xl mx-auto mt-2 mb-16 md:mt-12 md:mb-30 ">
                  <h1 className="text-white text-center font-bold text-3xl md:text-5xl lg:text-7xl md:leading-4.5"> A big zoom forward.
                  </h1>
                </div>
              </FadeInTop>
            </div>

            <div className="flex flex-col items-start pb-10 gap-20 md:flex-row md:items-center md:gap-0 lg:gap-0 xl:gap-0">
              <div className="">
                <img
                  src={heroCamera}
                  alt=""
                  className="-ml-40 md:-ml-8 lg:-ml-30 w-[700px] md:w-[700px] lg:w-[900px] xl:w-[1080px]"
                />
              </div>

              <div className="flex gap-10 px-4 md:flex-col">
                <div className="">
                  <FadeInTop>
                    <h2 className="text-gray-400 font-medium text-lg md:text-xl lg:text-xl">
                      {" "}
                      Up to{" "}
                    </h2>
                    <h1 className="text-orange-500 font-medium text-4xl md:text-3xl lg:text-3xl xl:text-5xl">
                      {" "}
                      8x{" "}
                    </h1>
                    <h2 className="text-gray-400 font-medium text-lg md:text-xl lg:text-xl">
                      {" "}
                      optical-quality zoom{" "}
                    </h2>
                  </FadeInTop>
                </div>

                <div className="">
                  <FadeInTop>
                    <h2 className="text-gray-400 font-medium text-lg md:text-xl lg:text-xl">
                      
                      All
                    </h2>
                    <h1 className="text-orange-500 font-medium text-4xl md:text-3xl lg:text-3xl xl:text-5xl">
                      {" "}
                      48MP{" "}
                    </h1>
                    <h2 className="text-gray-400 font-medium text-lg md:text-xl lg:text-xl">
                      {" "}
                      rear cameras{" "}
                    </h2>
                  </FadeInTop>
                </div>
              </div>
            </div>

            <div className="mt-12 pb-40 pl-4 pr-8 mx-auto md:max-w-205 md:mt-28  ">
              <h2 className="text-gray-400 text-left text-[17px]  md:text-[21px] md:text-center font-semibold leading-snug">
                Across the iPhone 17 Pro camera system, you’ll find innovation that goes to great lengths The telephoto features the next generation of our tetraprism design and a 56 percent larger sensor. With an equivalent 200 mm focal length, the 8x optical-quality zoom makes this the
                <span className="text-white"> longest iPhone Telephoto ever </span> — offering 16x total optical zoom range. So you can explore an even wider range of creative choices and add a longer reach to your compositions.
              </h2>
            </div>
          </div>

          {/* Another div starts here */}
          <div className="">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <picture>
                  {/* Desktop Image */}
                  <source
                    media="(min-width: 768px"
                    srcSet={sizes[activeImage].desktopImage}
                  />
                  <img
                    src={sizes[activeImage].mobileImage}
                    alt=""
                    className="block mx-auto w-full max-w-xs sm:max-w-md xl:max-w-[700px]"
                  />
                </picture>
              </div>
            </div>

            {/* This is for the labels */}
            <div className="w-full max-w-[700px] mx-auto px-4">
              <div className="relative flex items-center bg-zinc-800 rounded-full px-4 py-1 lg:px-2">
                {/* left arrow */}
                <button
                  className="absolute left-1 top-1/2 -translate-y-1/2 text-3xl text-white lg:hidden z-10 bg-zinc-800"
                  onClick={scrollLeft}
                >
                  <MdOutlineKeyboardArrowLeft />
                </button>

                <div
                  className="flex items-center gap-1 w-full overflow-x-hidden  whitespace-nowrap pl-10 pr-10 lg:overflow-x-visible lg:pl-0 lg:pr-0"
                  ref={scrollRef}
                >
                  {sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`shrink-0 font-medium text-sm cursor-pointer px-4 py-2 ${activeImage === index ? "bg-white  text-zinc-950  rounded-full" : "bg-zinc-800 text-white"}`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>

                {/* right arrow */}
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white  text-3xl lg:hidden z-10 bg-zinc-800"
                  onClick={scrollRight}
                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-white font-medium text-center text-2xl">
                {" "}
                {sizes[activeImage].text}{" "}
              </h2>
            </div>
          </div>

          {/* Another Div Starts here */}
          <div className="mt-55">
            <div className="mx-auto font-medium text-center max-w-[500px] px-10">
              <h1 className="text-gray-400 text-[18px] leading-tight lg:text-xl">
                Like having <span className="text-white"> 8 pro lenses in your pocket</span> Super-high-resolution <span className="text-white"> 24MP photos by default </span>.
              </h1>
            </div>

            <div className="mt-30 ">
              <img src={rearImage} alt="" className="w-full sm:max-w-7xl" />
            </div>

            {/* Three Boxes placed side by side */}
            <div className="mt-30 pb-30">
              <div className="flex flex-col items-center justify-center gap-16 px-14 md:flex-row ">
                <FadeInTop>
                  <div className="w-full max-w-[330px]">
                    <h1 className="text-white font-medium text-xl mb-6">
                      48MP Fusion Main camera
                    </h1>
                    <hr className="text-gray-300 border-t  mb-4" />
                    <p className="text-gray-400 font-medium text-lg mb-2">
                      24/48 mm focal length (1x/2x)
                    </p>
                    <p className="text-gray-400 font-medium text-lg mb-2">
                      ƒ/1.78 aperture
                    </p>
                    <p className="text-gray-400 font-medium text-lg mb-2">
                      2.44 μm quad-pixel (1.22 μm individual)
                    </p>
                  </div>
                </FadeInTop>

                <FadeInTop>
                  <div className="w-full max-w-[330px]">
                    <h1 className="text-white font-medium text-xl mb-6">
                      48MP Fusion Ultra Wide camera
                    </h1>
                    <hr className="text-gray-300 border-t mb-4" />
                    <p className="text-gray-400 font-medium text-lg mb-2">
                      13 mm focal length (.5x/macro)
                    </p>
                    <p className="text-gray-400 font-medium text-lg mb-2">
                      ƒ/2.2 aperture
                    </p>
                    <p className="text-gray-400 font-medium text-lg mb-2">
                      1.4 μm quad-pixel (0.7 μm individual)
                    </p>
                  </div>
                </FadeInTop>

                <FadeInTop>
                  <div className="w-full max-w-[330px]">
                    <h1 className="text-white font-medium text-xl mb-6">
                      48MP Fusion Telephoto camera
                    </h1>
                    <hr className="text-gray-300 border-t mb-4" />
                    <p className="text-gray-400 font-medium text-lg mb-2">
                      100/200 mm focal length (4x/8x)
                    </p>
                    <p className="text-gray-400 font-medium text-lg mb-2">
                      ƒ/2.8 aperture
                    </p>
                    <p className="text-gray-400 font-medium text-lg mb-2">
                      1.4 μm quad-pixel (0.7 μm individual)
                    </p>
                  </div>
                </FadeInTop>
              </div>
            </div>
          </div>

          {/* Another Div starts here */}
          <div className="w-full">
            <div className="overflow-hidden">
              <div className="px-10 sm:px-36 md:px-10 lg:px-18 xl:px-18">
                <h1 className="text-white font-medium text-2xl mb-8 md:text-2xl xl:text-3xl lg:text-3xl"> Pro results down to the pixel </h1>
              </div>
              <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none px-10 sm:px-36 md:px-10 lg:px-18 xl:px-18" ref={sliderRef}>

              {/* First section */}
              <section className="flex flex-col shrink-0 h-full  w-[250px] sm:w-[340px] md:w-[340px] lg:w-[550px]">
                <div className="flex-1 mb-4">
                <picture>
                  <source media="(min-width: 768px)" srcSet={sliderImageDesktop1} />
                  <img src={sliderImageMobile1} alt="" className="rounded-3xl " />
                </picture>
                </div>
                <h1 className="text-[13px] text-gray-400 font-medium px-2 leading-tight sm:text-[14px] md:text-[18px] xl:text-[18px] "> <span className="text-white"> Low-light photography and Night mode.</span> Capture sharp, detailed, bright images with natural colors, even when it’s dark. </h1>
              </section>

              {/* Second section */}
              <section className="flex flex-col shrink-0 h-full w-[250px] sm:w-[340px] md:w-[455px] lg:w-[740px]">
                <div className="flex-1 mb-4 "> 
                <picture className="border-gray-500">
                  <source media="(min-width: 768px)" srcSet={sliderImageDesktop2}/>
                  <img src={sliderImageMobile2} alt="" className="rounded-3xl border border-gray-400" />
                </picture>
                </div>
                <h1 className="text-[13px]  text-gray-400 font-medium border-gray-400 leading-tight sm:text-[14px] md:text-[18px] xl:text-[18px]"> <span className="text-white"> All 48MP rear cameras. </span> Pro Fusion cameras capture more detailed images at every zoom range and light level. </h1>
              </section>

              {/* Third section */}
              <section className="flex flex-col shrink-0 h-full w-[250px] sm:w-[340px] md:w-[455px] lg:w-[740px]">
                <div className="flex-1 mb-4">
                <picture>
                  <source media="(min-width: 768px)" srcSet={sliderImageDesktop3}/>
                  <img src={sliderImageMobile3} alt="" className="rounded-3xl" />
                </picture>
                </div>

                <h1 className="text-[13px] text-gray-400 font-medium border-gray-400 leading-tight sm:text-[14px] md:text-[18px] xl:text-[18px]"> Ultra Wide camera. Capture powerful perspectives with mesmerizing macro photos and dramatic wide-angle shots. </h1>
              </section>

              {/* Fourth section */}
              <section className="flex flex-col shrink-0 h-full w-[250px] sm:w-[340px] md:w-[340px] lg:w-[550px]">
                <div className="flex-1 mb-4">
                <picture>
                  <source media="(min-width: 768px)" srcSet={sliderImageDesktop4}/>
                  <img src={sliderImageMobile4} alt="" className="rounded-3xl " />
                </picture>
                </div> 
                <h1 className="text-[13px] text-gray-400 font-medium border-gray-400 leading-tight sm:text-[16px] md:text-[18px] xl:text-[18px]"> <span className="text-white">Latest-generation Photographic Styles.</span> Choose from different preset styles, including the new Bright option, to customize the tone, color, and look of your photos. </h1>
              </section>

              {/* Fifth section */}
              <section className="flex flex-col shrink-0 h-full w-[250px] sm:w-[340px] md:w-[455px] lg:w-[740px]">
                <div className="flex-1 mb-4">
                <picture>
                  <source media="(min-width: 768px)" srcSet={sliderImageDesktop5}/>
                  <img src={sliderImageMobile5} alt="" className="rounded-3xl border border-gray-400 " />
                </picture>
                </div>
                <h1 className="text-[13px]  text-gray-400 font-medium  leading-tight sm:text-[14px] md:text-[18px] xl:text-[18px]"> <span className="text-white">Clean Up.</span> Remove unwanted objects, people, and background distractions from your photos.6 </h1>
              </section>

              </div>
            </div>

          {/* This div controls the movement of the slider */}
            <div className="mt-14 flex items-center justify-end gap-6 pr-8 xl:pr-20">
            {/* Left Button */}
              <div className="bg-zinc-700 p-1 rounded-full flex items-center">
                <button onClick={sliderLeft} className="text-gray-200 hover:text-white text-3xl font-medium cursor-pointer"> <MdOutlineKeyboardArrowLeft/> </button>
              </div>
            {/* Right Button */}
              <div className="bg-zinc-700 p-1 rounded-full flex items-center">
                <button onClick={sliderRight} className="text-gray-200 hover:text-white text-3xl font-medium cursor-pointer"> <MdOutlineKeyboardArrowRight/> </button>
              </div>
            </div>
          </div>

          {/* Another Div Starts here */}
          <div className="mt-35 sm:mt-40 md:mt-40 lg:mt-70">
            <div className="w-full mx-auto  px-1 max-w-[330px] leading-9 sm:max-w-[330px] sm:leading-9 md:max-w-[800px] lg:max-w-[880px] lg:mb-6">
              <h1 className="text-white text-center font-medium text-[30px] md:text-[40px] lg:text-[55px]"> 18MP Center Stage front camera. </h1>
            </div>
            <div className="mt-0 text-center w-full px-8 max-w-[800px] leading-9 sm:max-w-[800px] mx-auto">
              <h1 className="text-white text-center font-medium text-[30px] sm:text-[30px] md:text-[35px] lg:text-[55px]"> It’s a total frame changer. </h1>
            </div>
            

            <div className="mt-12 px-11 mx-auto max-w-[420px] sm:max-w-[430px] md:max-w-[550px] md:mt-10 lg:max-w-[900px] ">
              <h2 className="text-gray-400 text-center text-[17px] md:text-[18px] lg:text-[22px] font-semibold leading-snug">
                The new front camera gives you flexible ways to frame your photos and videos — and so much more. Tap to expand the field of view and rotate from portrait to landscape <span className="text-white"> without moving your iPhone </span>. And when friends join the shot, the field of view expands so you get more friendsies in your selfies.
              </h2>
            </div>
          </div>

          {/* Another Div Starts here Coming Back to this*/}
          <div>
            {}
          </div>

          {/* Another div starts here */}
          <div className=" mt-50 ">
              <div className="">
                  <p className="text-orange-500 font-bold text-xl text-center"> Pro video </p>
                  <div className="max-w-[300px] md:max-w-[510px] lg:max-w-[780px] mx-auto mt-2">
                    <h1 className="text-white text-center font-bold text-4xl leading-none md:text-[50px] md:leading-14 lg:text-[70px] lg:leading-20"> Any more pro and it would need an agent.
                    </h1>
                  </div>
              </div>

            <div>
              <div className="flex justify-center w-full px-10 pt-8">
                <picture className="absolute px-10">
                  <source media="(min-width: 768px)" srcSet={proVideoLarge}/>
                  <img src={proVideoSmall} alt="" className="w-full rounded-4xl md:max-w-[600px]  xl:max-w-[850px]"/>
                </picture>
                
                <img src={videoLarge} alt="" className="w-full md:max-w-[600px] xl:max-w-[900px] relative"/>
              </div>
            </div>
4
            <div className="mt-40 w-full max-w-[450px] sm:max-w-[500px] md:max-w-[500px] md:leading-snug lg:max-w-[800px]  lg:leading-tight mx-auto px-8">
              <h1 className="text-gray-400 text-center text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] font-medium"> From home movies to Hollywood productions, iPhone 17 Pro is up to any challenge. With <span className="text-white"> more pro video features than ever </span> — like enhanced video stabilization, cinema-grade specs, and compatibility with industry-standard workflows — iPhone 17 Pro puts powerful filmmaking tools within reach, wherever you need them. </h1>
            </div>
          </div>

          {/* Another div for slider 2 starts here */}
          <div className="w-full">
            <div className="overflow-hidden mt-40">
             
              <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none px-10 sm:px-36 md:px-16 lg:px-18 xl:px-18" ref={sliderRef}>

              {/* First section */}
              <section className="flex flex-col shrink-0 h-full  w-[400px] sm:w-[340px] md:w-[369px] lg:w-[550px]">
                <div className="flex-1 mb-4">
                <picture>
                  <source media="(min-width: 768px)" srcSet={slider2ImageDesktop1} />
                  <img src={slider2ImageMobile1} alt="" className="rounded-3xl " />
                </picture>
                </div>
                <h1 className="text-[15px] text-gray-400 font-medium px-4 leading-tight sm:text-[14px] md:text-[16px] xl:text-[17px] "> <span className="text-white"> ProRes RAW. </span> iPhone 17 Pro is the first smartphone to support this industry-leading Apple-developed video codec, which offers the highest level of control and quality. </h1>
              </section>

              {/* Second section */}
              <section className="flex flex-col shrink-0 h-full w-[400px] sm:w-[340px] md:w-[490px] lg:w-[740px]">
                <div className="flex-1 mb-4 "> 
                <picture className="border-gray-500">
                  <source media="(min-width: 768px)" srcSet={slider2ImageDesktop2}/>
                  <img src={slider2ImageMobile2} alt="" className="rounded-3xl" />
                </picture>
                </div>
                <h1 className="text-[15px] px-4 text-gray-400 font-medium border-gray-400 leading-tight sm:text-[14px] md:text-[17px] xl:text-[18px]"> <span className="text-white"> Pro workflows.</span> Support for a wider color gamut with Apple Log 2, broadcast frame rates, and recording open gate. </h1>
              </section>

              {/* Third section */}
              <section className="flex flex-col shrink-0 h-full w-[400px] sm:w-[340px] md:w-[750px] lg:w-[1120px]">
                <div className="flex-1 mb-4">
                <picture>
                  <source media="(min-width: 768px)" srcSet={slider2ImageDesktop3}/>
                  <img src={slider2ImageMobile3} alt="" className="rounded-3xl" />
                </picture>
                </div>

                <h1 className="text-[15px] pl-4  text-gray-400 font-medium border-gray-400 leading-tight sm:text-[14px] md:text-[18px] xl:text-[18px] xl:pr-70"> <span className="text-white"> Genlock and timecode support. </span> Allows superprecise video synchronization, which is useful for content creators and Hollywood productions alike. Supported via the new Blackmagic Camera ProDock.9 </h1>
              </section>

              {/* Fourth section */}
              <section className="flex flex-col shrink-0 h-full w-[400px] sm:w-[340px] md:w-[495px] lg:w-[735px]">
                <div className="flex-1 mb-4">
                <picture>
                  <source media="(min-width: 768px)" srcSet={slider2ImageDesktop4}/>
                  <img src={slider2ImageMobile4} alt="" className="rounded-3xl " />
                </picture>
                </div> 
                <h1 className="text-[16px] text-gray-400 font-medium border-gray-400 leading-tight sm:text-[16px] md:text-[18px] xl:text-[18px]"> <span className="text-white"> 4K 120 fps Dolby Vision. </span> Adds stunning cinematic quality with a combination of high resolution and higher frame rates. </h1>
              </section>

              </div>
            </div>

          {/* This div controls the movement of the slider */}
            <div className="mt-14 flex items-center justify-end gap-6 pr-8 xl:pr-20">
            {/* Left Button */}
              <div className="bg-zinc-700 p-1 rounded-full flex items-center">
                <button onClick={sliderLeft} className="text-gray-200 hover:text-white text-3xl font-medium cursor-pointer"> <MdOutlineKeyboardArrowLeft/> </button>
              </div>
            {/* Right Button */}
              <div className="bg-zinc-700 p-1 rounded-full flex items-center">
                <button onClick={sliderRight} className="text-gray-200 hover:text-white text-3xl font-medium cursor-pointer"> <MdOutlineKeyboardArrowRight/> </button>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}

export default IPhone17Pro;
