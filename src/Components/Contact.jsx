import { useEffect } from "react";




const Contact = () =>{

    useEffect(()=>{
           fetchHelp();
    },[])

   const fetchHelp = async() =>{
        const data = await fetch("https://www.swiggy.com/mapi/support/v3/issues/faq?loadConversations=true")

        const json = await data.json()

        console.log(json);
   }

    return(
        <h1>Contact Us</h1>

    )
}
export default Contact;