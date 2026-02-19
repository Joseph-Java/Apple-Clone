import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
// import footerSections from './../footerSection.js';

function Footer() {
  // const [openIndex, setOpenIndex] = useState(null)

  const [open, setOpen] = useState({
    explore: false,
    account: false,
    apple: false,
    about: false
  })

// The Key parameter is used to identify which section of the footer is being toggled. When the toggle function is called, it updates the open state by toggling the boolean value of the specified key (e.g., "explore"). This allows for multiple sections in the footer to be independently toggled open or closed based on user interaction.
  const toggle = (key) => {
    setOpen(prev => {
      return {
        ...prev,
        [key]: !prev[key]
      }
    })
  }


  return (
      <footer className='bg-gray-100 mt-4 py-6 pb-4 '>
        <div className='px-4 max-w-5xl mx-auto'>
          
        <div className='grid grid-cols-1 md:grid-cols-4 max-w-5xl mx-auto'>
          {/* Explore Div */}
          <div className='w-full mb-2'>
            <button onClick={() => toggle("explore")} className='flex justify-between w-full font-semibold text-gray-600 text-sm md:text-md cursor-pointer items-center '>
              Explore
          
            <span className='md:hidden'> 
              {open.explore ? <IoIosArrowDown className="rotate-180" /> : <IoIosArrowDown />}
            </span>
            </button>

            <ul className={`overflow-hidden transition-all duration-300 
              ${open.explore ? "max-h-screen mt-4 ml-4" : "max-h-0"}
              md:max-h-none md:mt-4 ml-0 `}>
              <li className='text-sm text-gray-600 mb-2'> Mac </li>
              <li className='text-sm text-gray-600 mb-2'> iPad </li>
              <li className='text-sm text-gray-600 mb-2'> Iphone </li>
            </ul>
            <hr className="w-full mt-4 border-t border-gray-300 md:hidden" />
          </div>

          


          {/* Account Div */}
          <div className='w-full mb-2'>
            <button onClick={() => toggle("account")} className='flex justify-between w-full font-semibold text-gray-600 text-sm md:text-md cursor-pointer items-center '>
              Account
          
            <span className='md:hidden'> 
              {open.account ? <IoIosArrowDown className="rotate-180" /> : <IoIosArrowDown />}
            </span>
            </button>

            <ul className={`overflow-hidden transition-all duration-300 
              ${open.account ? "max-h-screen mt-4 ml-4" : "max-h-0"}
              md:max-h-none md:mt-4`}>
              <li className='text-sm text-gray-600 mb-2'> Manage Your Apple Account </li>
              <li className='text-sm text-gray-600 mb-2'> iCloud.com </li>
            </ul>
            <hr className="w-full mt-4 border-t border-gray-300 md:hidden" />
          </div>

          {/* Apple Values Div */}
          <div className='w-full mb-2'>
            <button onClick={() => toggle("apple")} className='flex justify-between w-full font-semibold text-gray-600 text-sm md:text-md cursor-pointer items-center '>
              Apple Values
          
            <span className='md:hidden'> 
              {open.apple ? <IoIosArrowDown className="rotate-180" /> : <IoIosArrowDown />}
            </span>
            </button>

            <ul className={`overflow-hidden transition-all duration-300 
              ${open.apple ? "max-h-screen mt-4 ml-4" : "max-h-0"}
              md:max-h-none md:mt-4`}>
              <li className='text-sm text-gray-600 mb-2'> Privacy </li>
            </ul>
            <hr className="w-full mt-4 border-t border-gray-300 md:hidden" />
          </div>
          

          {/* About Apple Div */}
          <div className='w-full mb-2'>
            <button onClick={() => toggle("about")} className='flex justify-between w-full font-semibold text-gray-600 text-sm md:text-md cursor-pointer items-center '>
              About Apple
          
            <span className='md:hidden'> 
              {open.about ? <IoIosArrowDown className="rotate-180" /> : <IoIosArrowDown />}
            </span>
            </button>

            <ul className={`overflow-hidden transition-all duration-300 
              ${open.about ? "max-h-screen mt-4 ml-4" : "max-h-0"}
              md:max-h-none md:mt-4`}>
              <li className='text-sm text-gray-600 mb-2'> Newsroom </li>
              <li className='text-sm text-gray-600 mb-2'> Apple Leadership </li>
              <li className='text-sm text-gray-600 mb-2'> Career Opportunities </li>
              <li className='text-sm text-gray-600 mb-2'> Investors </li>
              <li className='text-sm text-gray-600 mb-2'> Ethics & Compliance </li>
            </ul>
            <hr className="w-full mt-4 border-t border-gray-300 md:hidden" />
          </div>
          </div>

          <div className='w-full mt-8'>
              <p> <a href="" className='text-blue-500 underline'> Find a retailer </a> near you. </p>
              <hr className="hidden md:block w-full mt-5 border-t border-gray-300"/>
            
            <div className='md:flex justify-between mt-4 text-gray-600 text-sm '>
              <div className='flex flex-col mb-5 md:flex-row row-gap-20'>
                  <p className='mb-1 mr-8'> Copyright &copy; 2026 Apple Inc. All rights reserved. </p>
                  <p> Terms of Use | Site Map </p>
              </div>
              <p> Nigeria </p>
            </div>
          </div>
          







        
        </div>
      </footer>


























    // <footer className="bg-black text-white px-4 md:px-12 py-10">
    //   <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto bg-red-700">

    //     {footerSections.map((section, index) => (
    //       <div key={section.title}>
            
    //         {/* Heading */}
    //         <button
    //           onClick={() => setOpenIndex(openIndex === index ? null : index)}
    //           className="w-full flex justify-between items-center md:pointer-events-none font-semibold text-lg">
    //           {section.title}
    //           <span className="md:hidden">
    //             {openIndex === index ? "−" : "+"}
    //           </span>
    //         </button>

    //         {/* Links */}
    //         <ul
    //           className={`
    //             overflow-hidden transition-all duration-300
    //             ${openIndex === index ? "max-h-40 mt-4" : "max-h-0"}
    //             md:max-h-none md:mt-4
    //           `}
    //         >
    //           {section.links.map(link => (
    //             <li key={link} className="mb-2 text-sm text-gray-300">
    //               {link}
    //             </li>
    //           ))}
    //         </ul>

    //       </div>
    //     ))}

    //   </div>
    // </footer>
  )
}

export default Footer