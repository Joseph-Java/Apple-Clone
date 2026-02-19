import React, {useState} from 'react'
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import desktopIcon from './../assets/hero_main_image.png';
import mobileIcon from './../assets/mobile icon.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
  
    setIsOpen(prev => !prev);
  }

  return (
  <div className="min-h-screen bg-zinc-950 w-full">

  {/* HEADER */}
  <header className="w-full fixed top-0 left-0 z-50 bg-zinc-900/70 backdrop-blur-md h-12">
    
    <div className="flex items-center justify-between h-full px-4">

      {/* Header Logo */}
      <div className="flex items-center">
        {!isOpen && (
          <img className="bg-slate-200" width="20" height="20" src="https://img.icons8.com/ios/50/mac-os--v1.png" alt="logo"/>
        )}
      </div>

      {/* (Desktop Nav) */}
      <div className="hidden md:flex">
        {!isOpen && (
          <ul className="flex items-center gap-30 text-slate-50 hover:text-slate-200 text-xs cursor-pointer">
            <li>Mac</li>
            <li>Ipad</li>
            <li>Iphone</li>
            <li>Support</li>
            <li>Where to Buy</li>
          </ul>
        )}
      </div>

      {/* Header right */}
      <div className="flex items-center gap-4">
        {!isOpen && (
          <IoIosSearch className="text-slate-100 text-xl" />
        )}

        <button onClick={handleHamburgerClick} className="md:hidden text-slate-200 hover:text-slate-100 text-xl transition-all">
          {isOpen ? <MdClose /> : <RxHamburgerMenu />}
        </button>
      </div>

    </div>
  </header>

  {/* MOBILE MENU */}
  {isOpen && (
    <div className="fixed inset-0 z-40 bg-zinc-900 md:hidden pt-16 px-8">
      <ul className="flex flex-col gap-5 text-slate-50 text-3xl font-medium cursor-pointer">
        <li>Mac</li>
        <li>Ipad</li>
        <li>Iphone</li>
        <li>Support</li>
        <li>Where to Buy</li>
      </ul>
    </div>
  )}

  {/* HERO SECTION */}
  <section className="pt-20">

    <div className="text-center mt-12">
      <h1 className="text-slate-200 font-bold text-3xl md:text-5xl mb-1">
        iPhone 17 Pro
      </h1>

      <h3 className="text-slate-200 text-2xl font-semibold">
        All out Pro.
      </h3>

      <button className="mt-5 bg-blue-600 text-white text-xl md:text-base px-6 py-2 rounded-full hover:bg-blue-500 transition-all">
        Learn more
      </button>
    </div>

    <div className="mt-16">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopIcon} />
        <img src={mobileIcon} alt="Hero" className="w-full max-w-5xl mx-auto object-cover"/>
      </picture>
    </div>

  </section>

</div>

    
  )
}

export default Header