import React, { useState } from "react"
import {useEffect} from 'react'
import {Link} from "react-router-dom"
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io"

const Contact = () => {
  const[help,setHelp] = useState([]);
  const [showItems, setShowItems] = useState(null);
  
  useEffect(()=>{
   fetchHelp()
  },[])

  const fetchHelp = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/support/issues/partner-onboarding?");
    const json = await data.json();
    console.log(json);
    setHelp(json.data.issues.data)
  }

  const handleClick = (index) => {
    setShowItems(index === showItems ? null : index)
  }

return (
  
  <div className="my-6">
    <h1 className="mx-80 text-2xl font-bold">Partner Onboardings</h1>
   {help.map((res,index)=>
    <div key={res.id} className="mx-80 p-4 my-4">
      <div className="flex justify-between cursor-pointer"
       onClick={()=>handleClick(index)}>
      <span className="text-xl">{res.title}</span>
      <span className="text-3xl">{showItems === index ?  <IoIosArrowDown/> : <IoIosArrowUp/>}</span>
          </div>
      {/* Accordian Body */}
     {showItems === index && <div className="my-2 leading-relaxed text-lg text-gray-600">
     <Link>{res.hyperLink}</Link> 
      <p >{res.description}</p></div>}
    </div>
   )}
  </div>
)
}
export default Contact;