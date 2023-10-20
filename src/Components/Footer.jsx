import React from 'react'
import{
    FaLocationArrow,
    FaMobileAlt,
    FaEnvelope
} from "react-icons/fa"
const Footer = () => {
    
  return (
    <>
<div className='w-[100%] bg-neutral-50'>
 <div className="p-[50px 20px] mx-24 my-12 pt-6 max-w-[1200px] m-[0 auto] flex flex-wrap g-[20px] md:justify-between md:p-[50px 0]">
    <div className="max-w-[300px]">
            <div className="mb-[20px] text-[20px]">About InstantEats</div>
            <div className="text-[rgba(0,0,0,0.6)] text-[16px]">
            Delight in a diverse culinary journey with our online food delivery service, bringing restaurant-quality meals to your doorstep hassle-free and efficiently.
            </div>
    </div>
    <div className="max-w-[300px]">
        <div className="mb-[20px] text-[20px]">Contact</div>
        <div className="flex mb-[10px]">
            <FaLocationArrow className='shrink-0 text-[14px] mr-[10px] mt-[4px] text-[rbga(0,0,0,0.5])]'/>
            <div className="block mb-[10px] cursor-pointer">
            InstantEats, Shivaji Nagar, Dhyaneshwar Paduka Chowk, Pune, 444606
            </div>
        </div>
        <div className="flex mb-[10px]">
            <FaMobileAlt/>
            <div className="block ml-1 mb-[10px] cursor-pointer">
          Phone : 5954 6343 2604
            </div>
        </div>
        <div className="flex mb-[10px]">
            <FaEnvelope/>
            <div className="block ml-1 mb-[10px] cursor-pointer">
          Email : InstantEats@food.com
         </div>
        </div>
    </div>
    <div className="max-w-[300px]">
        <div className="mb-[20px] text-[20px]">Company</div>
        <span className="text-[rgba(0,0,0,0.6)] text-[17px] flex py-1 cursor-pointer">About</span>
        <span className="text-[rgba(0,0,0,0.6)] text-[17px] flex py-1 cursor-pointer">Careers</span>
        <span className="text-[rgba(0,0,0,0.6)] text-[17px] flex py-1 cursor-pointer">InstantEats One</span>
        <span className="text-[rgba(0,0,0,0.6)] text-[17px] flex py-1 cursor-pointer">InstantEats Instamart</span>
        <span className="text-[rgba(0,0,0,0.6)] text-[17px] flex py-1 cursor-pointer">InstantEats Genie</span>
    </div>
    <div className="max-w-[300px] ">
        <div className="mb-[20px] text-[20px] ">Learn More</div>
        <span className="text-[rgba(0,0,0,0.6)] text-[17px] flex py-1 cursor-pointer">Privacy</span>
        <span className="text-[rgba(0,0,0,0.6)] text-[17px] flex py-1 cursor-pointer">Security</span>
        <span className="text-[rgba(0,0,0,0.6)] text-[17px] flex py-1 cursor-pointer">Teams</span>
        <span className="text-[rgba(0,0,0,0.6)] text-[17px] flex py-1 cursor-pointer">Sitemap</span> 
    </div>
</div>
<div className="border-t-[1px] border border-[rgba(0,0,0,0.5)]">
    <div className="flex ml-14 item-center flex-col gap-[10px] md:p-0 md:h-[60px] md:max-w-[1200px] md:m-[0 auto] md:flex-row md:justify-between md:text-left ">
        <div className="text-[20px] text-[rgba(0,0,0,0.5)] mt-5 px-2">
        Easy ordering, swift delivery. Delight in every bite. Your go-to online food hub!.
        </div>
        <div className='mt-5'>
            <p>© 2023 InstantEats Technologies Pvt. Ltd</p>
        </div>
    </div>
</div>
</div>
</>
  )
}
export default Footer
