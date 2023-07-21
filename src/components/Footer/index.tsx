import { Link } from "react-router-dom";
import {Box,Typography}from '@mui/material';
import * as React from 'react';

const Footer =()=>{
     
  console.log("RUUN")

    return(
        
        <Box sx={{ background:'#DDE9FF', width:'1024' , paddingTop:9,paddingBottom:9 }}>
  
         <nav>
        
        <Box component='ul' sx={{display:'flex', direction:'row', gap:'170px', justifyContent:'center', padding:'30px' }}>
        <div className="flex">
        <img src='/logo.png' className='w-10 mr-5 pb-6'/>
        <div className="mr-20 pr-10">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block',color:'#d4180f' ,paddingBottom:'5px' } }} >
            FASHIONHOLIC
          </Typography>
          <Typography
            variant="overline"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block',color:'black' } }} >
            For yout daily outfit 
          </Typography>
          </div>
          </div>


         <Box sx={{display:'flex', gap:20}}>  
         <Box>
        <Link to="/service">
         <Typography variant="h6" sx={{color:'#444'}}>
         SERVICE
        </Typography>
        </Link>
        <Typography variant="overline" sx={{color:'#444', display:"flex",flexDirection:'column'}}>
           products
         </Typography>
         <Typography variant="overline" sx={{color:'#444', display:"flex",flexDirection:'column'}}>
            Contact Us
         </Typography> 
        </Box>

        <Box>
        <Link to="/support">
         <Typography variant="h6" sx={{color:'#444'}}>
         SUPPORT
        </Typography>
        </Link>
        <Typography variant="overline" sx={{color:'#444', display:"flex",flexDirection:'column'}}>
        About fashionholic.com
        </Typography>
        <Typography variant="overline" sx={{color:'#444', display:"flex",flexDirection:'column'}}>
        Privacy policy & terms        
         </Typography>
        </Box>

        <Box>
          <Link to="/follow">
         <Typography variant="h6" sx={{color:'#444'}}>
         FOLLOW US ON
        </Typography>
        </Link>
        <Typography variant="overline" sx={{color:'#444', display:"flex",flexDirection:'column'}}>
        Instagram
        </Typography>
        <Typography variant="overline" sx={{color:'#444', display:"flex",flexDirection:'column'}}>
        Facebook
        </Typography>
        </Box>
        
        </Box>
        
       </Box>
       </nav> 
  
   </Box> 
)};
     export default React.memo(Footer);
  