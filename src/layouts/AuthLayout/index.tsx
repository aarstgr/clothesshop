import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAth";
import {Box} from "@mui/material"
import Footer from "../../components/Footer";
const AuthLayout = () => {
  useAuth() 
  return ( 
    <>
     
     <Outlet/>
     <Box><Footer/></Box> 
    </> 
    );
}
 
export default AuthLayout;