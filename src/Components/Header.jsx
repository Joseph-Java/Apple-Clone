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
    <div className='min-h-screen bg-zinc-950 w-full'>
    <header className='w-full fixed top-0 left-0 z-50 bg-zinc-900/70 backdrop-blur-md h-12 '>
      <div className='flex items-center justify-between py-3 px-4 '>
      {
    // This code renders the Apple logo on the left side of the header, but only when the mobile menu is closed (isOpen is false). When the menu is open, the logo will not be displayed.
        !isOpen && (
          <div >
          <img className='bg-slate-200' width="20" height="20" src="https://img.icons8.com/ios/50/mac-os--v1.png" alt="mac-os--v1"/>
        </div>
        )
      }

    {/* Nav Links - desktop version only */}
      {
        !isOpen && (
          <ul className='hidden md:flex justify-between text-slate-50 hover:text-slate-100 text-xs cursor-pointer w-full max-w-xl'>
            <li> Mac </li>
            <li> Ipad </li>
            <li> Iphone </li>
            <li> Support </li>
            <li> Where to Buy </li>
          </ul>
        )
      }
            
        {/* Div for both search icon and hamburger menu */}
        <div className='flex items-center gap-4 relative'>
          {!isOpen &&<IoIosSearch className='text-slate-100 text-xl'/>}

          <button onClick={handleHamburgerClick} className='transition-all md:hidden text-slate-200 hover:text-slate-100 focus:outline-none text-xl '>
            {isOpen ? <MdClose className='absolute left-'/> : <RxHamburgerMenu/>}
          </button>   
        </div>
      </div>
    </header>

    {/* Nav Links - mobile version only */}
        {
          isOpen && (
            <div className='fixed inset-0 z-40 bg-zinc-900 md:hidden pl-8 pt-16'>
              <ul className='text-slate-50 flex flex-col gap-3 hover:text-slate-100 text-3xl font-medium cursor-pointer md:hidden'>
                <li> Mac </li>
                <li> Ipad </li>
                <li> Iphone </li>
                <li> Support </li>
                <li> Where to Buy </li>
              </ul>
            </div>
          )
        }

    {/* HERO SECTION */}
        <section className='pt-16'>

          <div className='text-center mt-12'>
            <h1 className='text-slate-200 font-bold text-3xl md:text-5xl mb-1'> iPhone 17 Pro </h1>
            <h3 className='text-slate-200 text-2xl font-semibold'> All out Pro. </h3>
            
            <button className='mt-5 bg-blue-600 text-white text-xl md:text-base px-6 py-2 rounded-full outline-none hover:bg-blue-500 transition-all cursor-pointer'>
              Learn more
            </button>
          </div>

        <div className='mt-16'>
            <picture>
              <source media="(min-width: 768px)" srcSet={desktopIcon} className='w-full h-full max-w-2xl' />
              <img src={mobileIcon} alt="Desktop Hero" className="w-full h-full max-w-5xl mx-auto object-cover" />
            </picture>
        </div>
        </section>
    </div>
    
  )
}

export default Header