import { useState, useContext } from "react";
import { LOGO_URL } from "../assets/constants";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnlie";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";
import store from "../Redux/store";

// const loggedInUser =() =>{
//     // Authenticate whether user is logged in or not
//     return(true)
// }

const Header =()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline =useIsOnline();
    const {user, setUser} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)
    

    return(
    <div className="flex text-sm bg-orange-300 shadow-xl justify-between sticky top-0 z-30  sm:text-center sm:w-full">
        <div className="">
            <Link to ="/"><img src={LOGO_URL} className="h-28 w-28 rounded-full mx-2 my-1 sm:justify-center   sm:w-auto" data-testid="logo"/></Link>
        </div>
        <div className="nav">
            <ul className=" space-x-6 m-8 hidden sm:flex">
                <Link to="/"><li className="">Home</li></Link> 
                <Link to="/about"><li className="">About</li></Link> 
                <Link to="/contact-us"><li className="">Contact Us</li></Link> 
                {/* <Link to="/instamart"><li className="">Instamart</li></Link>  */}
                <Link to="/cart"><li className="" data-testid="cartItems">Cart {cartItems.length!=0 &&<span className="bg-green-500 rounded-xl p-1 px-2">{cartItems.length}</span>} </li></Link> 
                <li className="">
                {isLoggedIn?
                (<button className=" bg-red-500 text-white rounded-md w-16 p-1" onClick={()=>setIsLoggedIn(false) }>Logout</button>): 
                (<button  className=" bg-green-500 text-white rounded-md  w-16 p-1" onClick={()=>setIsLoggedIn(true)}>Login</button>)}
                </li>
            </ul>
            <div className="flex flex-wrap">
            <h6 data-testid="online-status" className="ml-7 text-xs hidden sm:flex">{isOnline ? "🟢 Online":"🔴 Offline"}</h6>
            {/* <h1 className="ml-7 text-xs text-green-900">{user.name}</h1> */}

            {/* <input className="mx-5 rounded" placeholder="Type your name here" onChange={(e)=> 
                setUser({name:e.target.value,
                    email:e.target.value+"@gmail.com"
                })} /> */}
            </div>
           

        </div>
    </div>
)};

export default Header;