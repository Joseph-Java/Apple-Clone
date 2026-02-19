import React from 'react'
import desktopIcon from './../assets/apple-iphone-air-17.png';
import mobileIcon from './../assets/iPhone17_Air_hero_small.png';
import iphone17Desktop from './../assets/iphone_17_desktop.png';
import iphone17Mobile from './../assets/iphone_17_mobile.png';
import macBookPro from './../assets/macbook_14_pro.png';
import ipadPro from './../assets/Ipad_pro-removebg-preview.png';
import macBookAir from './../assets/macbook_air.png';
import iPad from './../assets/ipad.png';


function Main() {
  return (
    <div>
      
  {/* First section in the main component, which includes the hero image and the text content for the iPhone Air product. */}
    <section className='bg-gray-100 mt-3 w-full'>
      <div className='text-center pt-12 w-full'>
            <h1 className='font-semibold text-3xl md:text-6xl mb-1'> iPhone Air </h1>
            <h3 className='text-xl md:text-3xl -mb-1'> The thinnest Iphone ever. </h3>
            <h3 className='text-xl md:text-3xl'> With the power of pro inside. </h3>
            
            <button className='mt-5 bg-blue-700 text-white text-xl md:text-xl px-6 py-2 rounded-full outline-none hover:bg-blue-500 transition-all cursor-pointer'>
              Learn more
            </button>
      </div>

      <div className='p-4 py-10'>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopIcon} className='w-full h-full max-w-4xl' />
          <img src={mobileIcon} alt="iPhone Air" className="max-w-xs md:max-w-5xl w-full mx-auto object-cover " />
        </picture>
      </div>
    </section>
    
  {/* second section in the main component, which includes the hero image and the text content for the iPhone 17 product. */} 
    <section className='bg-gray-100 mt-3 w-full'>
      <div className='text-center pt-12 w-full'>
            <h1 className='font-semibold text-4xl md:text-6xl mb-1'> iPhone 17 </h1>
            <h3 className='text-xl md:text-3xl -mb-1'> Magichromatic </h3>
            
            <button className='mt-5 bg-blue-700 text-white text-xl md:text-xl px-6 py-2 rounded-full outline-none hover:bg-blue-500 transition-all cursor-pointer'>
              Learn more
            </button>
      </div>

      <div className='p-4 py-10'>
        <picture>
          <source media="(min-width: 768px)" srcSet={iphone17Desktop} className='w-full h-full max-w-4xl' />
          <img src={iphone17Mobile} alt="iPhone 17" className="max-w-xs md:max-w-3xl w-full mx-auto object-cover"/>
        </picture>
      </div>
    </section>

    {/* third section that is side by side, one containing the MacBook Pro 14 and ipad Pro */}
    <div className='flex flex-col md:flex-row gap-3 mt-3 w-full px-0 md:px-4'>
      <section className='bg-black w-full md:max-w-2xl'>
        <div className='text-center pt-12 w-full text-white mb-4'>
          <h1 className='text-4xl font-semibold'> MacBook Pro 14" </h1>
          <p className='text-xl font-semibold'> Supercharged by M5 </p>
          <button className='mt-5 bg-blue-700 text-white text-xl md:text-xl px-5 py-2 rounded-full outline-none hover:bg-blue-500 transition-all cursor-pointer'> Learn more
        </button>
        </div>
        
        <div>
          <img src={macBookPro} alt="MacBook Pro 14" className="w-full max-w-75 mx-auto object-contain" />
        </div>
      </section>

      <section className='bg-black w-full md:max-w-2xl'>
        <div className='text-center pt-12 w-full text-white mb-4 '>
          <h1 className='text-4xl font-semibold'> iPad Pro </h1>
          <p className='text-base sm:text-lg md:text-[22px] max-w-[200px] sm:max-w-[320px] md:max-w-[420px] mx-auto'> Advanced AI performance and game-changing capabilities </p>
          <button className='mt-5 bg-blue-700 text-white text-xl md:text-xl px-5 py-2 rounded-full outline-none hover:bg-blue-500 transition-all cursor-pointer'> Learn more
        </button>
        </div>
        
        <div>
          <img src={ipadPro} alt="iPad Pro" className="w-full max-w-80 md:max-w-100 mx-auto object-cover" />
        </div>
      </section>
    </div>


    {/* Fourth section that is side by side, one containing ipad and the other containing the MacBook Air. 
    */}
    <div className='flex flex-col md:flex-row gap-3 mt-3 w-full px-0 md:px-4'>
      <section className='bg-gray-100 w-full pb-8 md:max-w-2xl'>
        <div className='text-center pt-12 w-full mb-4'>
          <h1 className='text-4xl font-semibold'> iPad" </h1>
          <p className='text-base sm:text-lg md:text-[20px] max-w-[200px] sm:max-w-[320px] md:max-w-[420px] mx-auto '> Now with the speed of the A16 chip and double the starting storage </p>
          <button className='mt-5 bg-blue-700 text-white text-xl md:text-xl px-5 py-2 rounded-full outline-none hover:bg-blue-500 transition-all cursor-pointer'> Learn more
        </button>
        </div>
        
        <div className='pt-6'>
          <img src={iPad} alt="iPad" className="w-full max-w-75 mx-auto object-contain" />
        </div>
      </section>

      <section className='bg-gradient-to-b from-sky-200 via-sky-90 to-white w-full md:max-w-2xl'>
        <div className='text-center pt-12 w-full mb-4 '>
          <h1 className='text-4xl font-semibold'> MacBook Air </h1>
          <p className='text-base sm:text-lg md:text-[22px] max-w-[200px] sm:max-w-[320px] md:max-w-[420px] mx-auto'> Sky blue color </p>
          <p className='text-base sm:text-lg md:text-[22px] max-w-[200px] sm:max-w-[320px] md:max-w-[420px] mx-auto'> Sky high performance with M4. </p>
          <button className='mt-5 bg-blue-700 text-white text-xl md:text-xl px-5 py-2 rounded-full outline-none hover:bg-blue-500 transition-all cursor-pointer'> Learn more
        </button>
        </div>
        
        <div className='mt-10'>
          <img src={macBookAir} alt="MacBook Air" className="w-full max-w-80 md:max-w-120 mx-auto object-cover" />
        </div>
      </section>
    </div>



    </div>
  )
}

export default Main