import React from 'react'

function ImageBox({text, image, icon: Icon}) {
  return (
     <div className="bg-black h-[180px] md:h-[210px] lg:h-[300px] w-full max-w-[200px] lg:max-w-[300px] text-center rounded-2xl pt-6">
      <p className=" text-gray-400  text-center text-[14px] sm:text-[15px] md:text-[15px] lg:text-xl px-2 sm:px-6 md:px-6 lg:px-14 font-medium leading-tight">{text}</p>

      {Icon && typeof Icon === "function" ? (
        <Icon size={110} className="text-white text-3xl mx-auto w-full mt-2 lg:mt-16" />
      ) : image ? (
        <img src={image} alt={text} className="w-full max-w-[120px] lg:max-w-[200px] object-cover mt-6" />
      ) : null}
    </div>
  )
}

export default ImageBox