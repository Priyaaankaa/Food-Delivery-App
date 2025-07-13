import { useRouteError } from "react-router-dom";
import { ERROR_IMAGE } from "../assets/constants";


const Error =()=>{
    const err =useRouteError();
    console.log(err);
    return(
        <>
        <div className="error">
            <h1>Ooops!! Something went wrong</h1>
            <h2>{err.status+" : "+err.statusText}</h2>
            <img src={ERROR_IMAGE} className="error-image"/>
            </div>
        </>
    )
}
export default Error;