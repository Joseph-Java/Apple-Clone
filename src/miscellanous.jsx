import React from 'react'

function miscellanous() {
  return (
    <div>
      {/* (Desktop Nav) */}
      <div className="hidden md:flex">
        {!isOpen && (
          <ul className="flex items-center gap-30 text-slate-50 hover:text-slate-200 text-xs cursor-pointer">

          {/* Parent Link with mega dropdown */}
          
            <li className="relative group">
                Mac

          {/* Mega Dropdown */}

              <div className="
  fixed left-0 top-12 w-screen h-[70vh] bg-black/100  backdrop-blur-3xl
  opacity-0 invisible translate-y-2.5
  group-hover:opacity-100 
  group-hover:visible 
  group-hover:translate-y-0
  transition-all duration-300 ease-out
  z-50 overflow-y-scroll
">

                <div className='grid grid-cols-2 w-full max-w-xl bg-red-700'>
                    <div>
                        <p className='text-xs'> Explore Mac </p>
                          <ul>
                            <li className='text-3xl font-bold'>Explore All Mac </li>
                            <li className='text-3xl font-bold'>MacBook Air</li>
                            <li className='text-3xl font-bold'>MacBook Pro</li>
                            <li className='text-3xl font-bold'>iMac</li>
                            <li className='text-3xl font-bold'>Mac Mini</li>
                            <li className='text-3xl font-bold'>Mac Studio</li>
                            <li className='text-3xl font-bold'>Mac Pro</li>
                            <li className='text-3xl font-bold'>Displays</li>
                          </ul>
                    </div>

                    <div>
                        <h3 className='text-xs'> More From Mac </h3>
                          <ul>
                            <li className=''>Mac Support </li>
                          </ul>
                    </div>


                </div>
              </div>









              
            </li>




            <li>Ipad</li>
            <li>Iphone</li>
            <li>Support</li>
            <li>Where to Buy</li>
          </ul>
        )}
      </div>
    </div>


















        
            {/* Parent Link with Mega Dropdown */}
            {/* <li className="relative group">
              Mac

              

              <div className="
                fixed left-0 top-full w-full h-[75vh] bg-black-950/90
                backdrop-blur-xl opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-300 ease-out
                overflow-y-scroll z-50
              ">
                <div className="flex gap-26 mt-14 pb-8">
                  <div>
                    <p className="text-sm font-light text-gray-200 mb-4">Explore Mac</p>
                    <ul className="space-y-1 text-white">
                      <li className='text-2xl font-bold mb-3'>Explore All Mac</li>
                      <li className='text-2xl font-bold mb-2'>MacBook Air</li>
                      <li className='text-2xl font-bold mb-2'>MacBook Pro</li>
                      <li className='text-2xl font-bold mb-2'>iMac</li>
                      <li className='text-2xl font-bold mb-2'>Mac Mini</li>
                      <li className='text-2xl font-bold mb-2'>Mac Studio</li>
                      <li className='text-2xl font-bold mb-2'>Mac Pro</li>
                      <li className='text-2xl font-bold mb-2'>Displays</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-light text-gray-200 mb-2">More From Mac</h5>
                    <ul className="space-y-1 text-white">
                      <li>Mac Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>Ipad</li>
            <li>Iphone</li>
            <li>Support</li>
            <li>Where to Buy</li> */}

            {/* HERO SECTION */}
              // <section className="pt-20">
              //   <div className="text-center mt-12">
              //     <h1 className="text-slate-200 font-bold text-3xl md:text-5xl mb-1">
              //       iPhone 17 Pro
              //     </h1>
            
              //     <h3 className="text-slate-200 text-2xl font-semibold">
              //       All out Pro.
              //     </h3>
            
              //     <button className="mt-5 bg-blue-600 text-white text-xl md:text-base px-6 py-2 rounded-full hover:bg-blue-500 transition-all">
              //       Learn more
              //     </button>
              //   </div>
            
              //   <div className="mt-16">
              //     <picture>
              //       <source media="(min-width: 768px)" srcSet={desktopIcon} />
              //       <img
              //         src={mobileIcon}
              //         alt="Hero"
              //         className="w-full max-w-5xl mx-auto object-cover"
              //       />
              //     </picture>
              //   </div>
              // </section>


              // MOBILE MENU
      //         {isOpen && (
      //   <div className="fixed inset-0 z-40 bg-zinc-900 md:hidden pt-16 px-8">
      //     <ul className="flex flex-col gap-5 text-slate-50 text-3xl font-medium cursor-pointer">
      //       <li>Mac</li>
      //       <li>Ipad</li>
      //       <li>Iphone</li>
      //       <li>Support</li>
      //       <li>Where to Buy</li>
      //     </ul>
      //   </div>
      // )}
  )
}

export default miscellanous