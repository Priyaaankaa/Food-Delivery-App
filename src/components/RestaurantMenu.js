import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../assets/constants";
import  {Shimmer}  from "./Shimmer";
import useResMenuDetails from "../utils/useResMenuDetails";
import { addItem } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () =>{

    //reading dynamic url Params
    const { resId } = useParams();

    const restaurant = useResMenuDetails(resId);

    const dispatch = useDispatch();
    const handleAddFoodItem = (item) =>{
        dispatch(addItem(item))
    }

   
    //early return(!componentName) & conditional rendering(Ternary cond?Comp A: Comp B) & optional chaining(a?.b?.c)
    return( (!restaurant) ? <Shimmer /> :
        <div className="">
            <div className="" >
                <div className="justify-normal flex z-20 sticky p-2 my-5 shadow-md border-2 h-40 max-h-auto w-9/12 mx-48 bg-white">
                <img src={CDN_URL+ restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId} className="h-28 w-36 rounded-md flex"/> 
                <h5 className="pt-10 font-bold font-sans px-10">{restaurant?.cards[2]?.card?.card?.info?.name} </h5>
                <h5 className="pt-10 px-10">  ✰ {restaurant?.cards[2]?.card?.card?.info?.avgRating}  |  📍{restaurant?.cards[2]?.card?.card?.info?.areaName}</h5>
                </div>
                <h1 className=" m-10 text-2xl font-bold pt-6  w-full flex flex-wrap items-center justify-center">Menu</h1>
                <ul className="h-80 w-full flex flex-wrap items-center justify-center min-h-screen ml-5">
                    {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((item)=>
                    <li key={item.card?.info?.id} className="my-5 w-6/12 border 2 rounded-md bg-orange-50 hover:shadow-lg hover:bg-orange-100 py-2  p-2 ml-5">
                    <img src={CDN_URL+item.card?.info?.imageId} className="h-40 w-44 rounded-md " />
                    <button 
                    className="bg-green-500 rounded text-white text-sm p-1 m-2"
                    onClick={()=>handleAddFoodItem(item)}>ADD ITEM</button>
                    <h5 className="pt-5 font-bold font-sans">{item.card?.info?.name}</h5>
                    <div className="menu-price">
                    
                    <span className="text-gray-500 line-through">₹{((item.card?.info?.price)/100).toFixed(2)}</span>
                    
                    
                    <span className="text-green-600 font-bold ml-2">₹{((item.card?.info?.finalPrice)/100).toFixed(2)}</span>
                    
                    </div>
                     <p className="pt-10 text-sm">{item.card?.info?.description}</p>
                    

                    </li>)}
                </ul>
            </div>
        </div >
        
    );
};
export default RestaurantMenu;