
import { CDN_URL } from "../assets/constants";



const FoodComponent = ({name, description, imageId}) =>{

   
    return( 
        <div className="p-3 hover:bg-orange-50 ">

                    <img src={CDN_URL+imageId} className="h-40 w-44 rounded-md " />
                    <h5 className="pt-5 font-bold font-sans">{name}</h5>
                     <p className="pt-10 text-sm">{description}</p>
                
            </div>
     
        
    );
};
export default FoodComponent;