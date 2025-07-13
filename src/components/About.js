import { useState } from "react";
import Profile from "./Profile";

const Section =({title, description, isVisiblie, setIsVisible})=>{
    // const [isVisiblie, setIsVisible] = useState(false)

    return(
        <div className=" border-2 border-black p-2 m-4">
        <h1 className="font-bold">{title}</h1>
        {!isVisiblie?
        <button className="cursor-pointer underline" onClick={()=>setIsVisible(true)}>Show</button>:
        <button className="cursor-pointer underline" onClick={()=>setIsVisible(false)}>Hide</button>
        }
        {isVisiblie && <p>{description}</p>}
        </div>
    )
}


const About =() =>{
    const [sectionConfig, setSectionConfig] = useState({
        showAbout:false,
        showCareers:false,
        showServices:false,
    });

    return(

    <div>
        <Section title ={"About us"} 
        description ={"At Food App, we are passionate about bringing great food to your doorstep. Founded with the mission to make dining more convenient and enjoyable, we partner with a wide range of local restaurants, cafes, and food outlets to offer a diverse menu that caters to every taste. Whether you're craving comfort food, looking for healthy options, or eager to explore new cuisines, we’ve got something for everyone. With fast delivery, easy ordering, and a commitment to quality, we're here to make your mealtime as delightful as possible—wherever you are. Join us on a journey of flavors and convenience, one order at a time."}
        isVisiblie={sectionConfig.showAbout}
        setIsVisible={()=>
         setSectionConfig({
            showAbout:true,
            showCareers:false,
            showServices:false,
         })   
        }/>
        
        <Section title ={"Careers"} 
        description ={"At Food App, we are passionate about bringing great food to your doorstep. Founded with the mission to make dining more convenient and enjoyable, we partner with a wide range of local restaurants, cafes, and food outlets to offer a diverse menu that caters to every taste. Whether you're craving comfort food, looking for healthy options, or eager to explore new cuisines, we’ve got something for everyone. With fast delivery, easy ordering, and a commitment to quality, we're here to make your mealtime as delightful as possible—wherever you are. Join us on a journey of flavors and convenience, one order at a time."}
        isVisiblie={sectionConfig.showCareers}
        setIsVisible={()=>
            setSectionConfig({
               showAbout:false,
               showCareers:true,
               showServices:false,
            })   
           }
        />
        
        <Section title ={"Services"} 
        description ={"At Food App, we are passionate about bringing great food to your doorstep. Founded with the mission to make dining more convenient and enjoyable, we partner with a wide range of local restaurants, cafes, and food outlets to offer a diverse menu that caters to every taste. Whether you're craving comfort food, looking for healthy options, or eager to explore new cuisines, we’ve got something for everyone. With fast delivery, easy ordering, and a commitment to quality, we're here to make your mealtime as delightful as possible—wherever you are. Join us on a journey of flavors and convenience, one order at a time."}
        isVisiblie={sectionConfig.showServices}
        setIsVisible={()=>
            setSectionConfig({
               showAbout:false,
               showCareers:false,
               showServices:true,
            })   
           }/>

    
    </div>
)};

export default About;