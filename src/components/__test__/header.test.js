import Header from "../Header";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import store from "../../Redux/store";
import { render } from "@testing-library/react";


test("logo should load on rendering header", ()=>{
    const header = render(
       <StaticRouter>
         <Provider store={store}>
             <Header />
        </Provider>
       </StaticRouter> 
   );
   console.log(header);

   const logo = header.getByTestId("logo");
   expect(logo?.src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkTOzwXRI8bG3I_tZb0DB-9K0YZzWxzPVKg&s");
});



test("lstatus should be online on rendering header", ()=>{
    const header = render(
       <StaticRouter>
         <Provider store={store}>
             <Header />
        </Provider>
       </StaticRouter> 
   );

   const onlineStatus = header.getByTestId("online-status");
   expect(onlineStatus.innerHTML).toBe("🟢 Online");
});



test("Cart Items should be 0 on rendering header", ()=>{
    const header = render(
       <StaticRouter>
         <Provider store={store}>
             <Header />
        </Provider>
       </StaticRouter> 
   );

   const cartItems = header.getByTestId("cartItems");
   expect(cartItems.innerHTML).toBe("Cart  ");
});