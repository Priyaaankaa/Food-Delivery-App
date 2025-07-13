import { useSelector } from "react-redux";
import FoodComponent from "./FoodComponent";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    return(
        <div className="mx-10 border shadow-lg w-9/12">
            <div className="flex m-5">
            <h1 className="text-lg font-bold px-5">You have {cartItems.length} items in your cart</h1>
            <button className="bg-red-200 text-sm rounded-lg p-1"
            onClick={()=>handleClearCart()}>Clear Cart ❌</button>
            </div>
           
            {cartItems.map(item => <FoodComponent key={item?.card?.info?.id} {...item?.card?.info} />)}
            
        </div>
    );
};

export default Cart;