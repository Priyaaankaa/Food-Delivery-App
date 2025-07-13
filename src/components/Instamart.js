import { useEffect, useState } from "react";
import { CDN_URL } from "../assets/constants";
import useIsOnline from "../utils/useIsOnlie";
import { Shimmer } from "./Shimmer";


const Instamart = () =>{

    const [products, setProducts] = useState(null);

    useEffect(()=>{
        getProduct();
    },[]);

    async function getProduct(){
        data = await fetch("https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP");
        json = await data.json();
        console.log(json?.data?.widgets[1]);
        setProducts(json?.data?.widgets[1]);
    }

    const isonLine = useIsOnline();
    if(!isonLine){
        return <h1 className="text-pretty">📍Uh Ohh! Looks like you are offline. Please check your Internet Connection</h1>
    }
   
    return( (!products)?<Shimmer />:
   

        <div className="w-full">
            <marquee className="bg-green-500 text-white ">Welcome to Instamart! ******   Get quick deliveries at your Doorstep!! *****    Its raining offers here. *****     Browse to avail yours. *****   Hurry!</marquee>
            {/* <h2 classname="text-center">Welcome to Instamart! Get quick deliveries at your Doorstep!! </h2> */}

            <ul className=" flex flex-wrap justify-center ">
                {products?.data.map((item)=>
                <li key={item?.nodeId} className="m-5">
                      
                    
                    <div className="">
                        <img src={CDN_URL+ item?.imageId} className="h-40 w-48 rounded-md cursor-pointer" />
                    </div>
                    <h4 className="rline-clamp-2 font-bold font-sans">{item.displayName}</h4>
        
                </li>    
            )
            }
             </ul>
        </div>
    )
};

export default Instamart;