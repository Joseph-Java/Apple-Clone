import React from 'react'

function TextBox({text, title, paragraph}) {
  return (
    <div className="bg-black h-[180px] md:h-[210px]  lg:h-[300px] w-full max-w-[200px] lg:max-w-[300px] text-center pt-7 rounded-2xl">
      <span className="text-gray-400 font-bold text-sm lg:text-2xl">{text}</span>
      <h3 className="text-white text-[22px] sm:text-[20px] md:text-[30px] lg:text-[55px] font-bold mt-4 mb-4 lg:px-8 leading-none">{title}</h3>
      <p className="text-gray-400 text-[14px] lg:text-[20px] mt-4 px-0 sm:px-6 md:px-6 lg:px-15 leading-tight lg:font-bold">{paragraph}</p>
    </div>
  )
}

export default TextBox