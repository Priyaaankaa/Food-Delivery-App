import { useContext } from "react";
import UserContext from "../context/UserContext";



const Footer = () =>{

    const {user}  = useContext(UserContext)
    return(
    <footer className=" flex items-end justify-end ">
     <h1 className="bottom-0">This site is developed by {user.name}- {user.email}</h1>
    </footer>
)};

export default Footer;