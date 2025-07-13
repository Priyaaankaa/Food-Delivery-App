import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Priyanka Mukherjee React",
        email:"priyanka@react.com",
    }
});
export default UserContext;