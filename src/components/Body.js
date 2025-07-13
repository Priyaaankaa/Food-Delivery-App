
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useIsOnline from "../utils/useIsOnlie";


const Body =()=>{
    const[searchText, setSearchText] = useState();
    const[filteredRestaurants, setFilteredRestaurants]= useState([]);
    const[allRestaurants, setAllRestaurants]= useState([]);

    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const datas = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await datas.json();
        console.log(json);
        setAllRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    const isonLine = useIsOnline();
    if(!isonLine){
        return <h1 className="text-pretty">📍Uh Ohh! Looks like you are offline. Please check your Internet Connection</h1>
    }
    //early return
    if (!allRestaurants) return null;

    if(filteredRestaurants?.length===0)
        return < Shimmer/>;

    return (allRestaurants.length === 0)?(< Shimmer/>):(
        <>

            <div className="my-5 flex justify-center">
            <input className="box-borblock w-96 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6 mr-4" 
            placeholder="Search your favourites here!" 
            value={searchText} type= "text"
            onChange={(e)=> {setSearchText(e.target.value)}} />
            <button className="bg-orange-400 text-white p-1 rounded-md hover:bg-orange-300" onClick={()=>{
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
                console.warn(data);
            }}>search🔍 </button>
           </div>
 


            <div className="flex flex-wrap mx-16 justify-center">
                {filteredRestaurants.map((restaurant)=>
                <Link to= {"/restaurant/"+restaurant.info.id} key={restaurant.info.id}> 
                <RestaurantCard resData = {restaurant} /></Link>)}
            </div>
        </>
        
    )};
export default Body;