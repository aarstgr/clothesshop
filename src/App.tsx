import { Outlet } from "react-router-dom"
import useAuth from "./hooks/useAth"
import Footer from "./components/Footer"
import {Box} from "@mui/material"
import NavLogin from "./components/NavLogin"




function App() {

useAuth()

  return ( 
    
    <>
  
    <NavLogin/>
     <Outlet/> 
    
       <Box ><Footer/></Box>
     
   </>
  )
}

export default App
