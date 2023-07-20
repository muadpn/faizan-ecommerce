import matt from "../../assets/Images/matt.jpg";
import { useState,useEffect } from "react";
const Images_8 = ({images}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    console.log(windowWidth);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
   <div className="flex odd:items-start even:items-center lg:p-12 flex-shrink-0 max-w-2xl pt-5 md:pt-0">
   <img src={`./Images/${images[0]}`} alt="" className="w-20  xl:w-28 xl:h-36 aspect-[1.2/1.5] rounded-2xl p-1" />
        <div className="">
          <img src={`./Images/${images[1]}`} alt="" className="xl:w-28 xl:h-36  w-20  aspect-[1.2/1.5]  rounded-2xl p-1" />
          <img src={`./Images/${images[2]}`} alt="" className="xl:w-28 xl:h-36   w-20  aspect-[1.2/1.5] rounded-2xl p-1" />
        </div>
        {windowWidth > 900 &&<div className="flex flex-col -space-y-16">
          <div>
            <img src={`./Images/${images[3]}`} alt="" className="xl:w-28 xl:h-36  w-20  aspect-[1.2/1.5]  rounded-2xl p-1 " />
            <img src={`./Images/${images[4]}`} alt="" className="xl:w-28 xl:h-36  w-20  aspect-[1.2/1.5] rounded-2xl p-1 " />
          </div>
          <div></div>
        </div>}
          <div className="">
          <img src={`./Images/${images[5]}`} alt="" className="xl:w-28 xl:h-36 w-20  aspect-[1.2/1.5]  rounded-2xl p-1" />
          <img src={`./Images/${images[6]}`} alt="" className="xl:w-28 xl:h-36 w-20  aspect-[1.2/1.5] rounded-2xl p-1" />
        </div> 
        <img src={`./Images/${images[7]}`} alt="" className="xl:w-28 xl:h-36 w-20   aspect-[1.2/1.5]  rounded-2xl p-1 " />
   </div>
  )
}

export default Images_8