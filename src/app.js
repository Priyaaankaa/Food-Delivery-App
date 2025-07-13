/** reactElement (Object) => React converts it to HTML(Browser understand) */
import React, { lazy, Suspense, useState, useContext } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./context/UserContext";
import { Provider } from "react-redux";
import store from "./Redux/store";



//Dynamic Import, Chunking, Code splitting, Dynamic Bundling, Lazy Loading

const Instamart = lazy( ()=> import("./components/Instamart"))




const AppLayout =()=>{

    const [user, setUser] = useState({
        
        name:"Any Name",
            email:"any @ mail",
        
    })

   
    return(
    <div className="app-layout">
        <Provider store={store}>
            <UserContext.Provider value ={{user:user, setUser:setUser}}>
                <Header />
                <Outlet />
                {/* <Footer/> */}
            </UserContext.Provider>
        </Provider>
        
        
        
    </div>
)};

const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact-us",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path:"/instamart",
                element: 
                <Suspense fallback ={<Shimmer />}>
                    <Instamart />
                </Suspense>,
            },
            {
                path:"/cart",
                element:<Cart />,
            },
        ],
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
