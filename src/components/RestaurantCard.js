import { CDN_URL } from "../assets/constants";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const RestaurantCard=(props)=>{
    const {resData} = props;
    const {name, cloudinaryImageId, avgRating, areaName, cuisines}=  resData?.info;
    const {user} = useContext(UserContext);

    return(
    <div className="">  
    <div className="bg-orange-50 h-80 w-48 m-7 z-10 rounded-md hover:shadow-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <div className="">
            <img src={CDN_URL+cloudinaryImageId} className="h-40 w-48 rounded-md " />
        </div>
        <div className="p-2">
            <h4 className="line-clamp-2 font-bold font-sans">{name}</h4>
            <h5 className="line-clamp-3 text-sm font-sans">{avgRating}🌟 |  📍{areaName}</h5>
            <h5 className="line-clamp-3 text-gray-500 text-xs font-sans mt-1">{cuisines.join(', ')}</h5>
          
        </div>
    </div>
    </div>  
)};
export default RestaurantCard;