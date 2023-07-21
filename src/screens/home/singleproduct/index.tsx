import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import 'react-alice-carousel/lib/alice-carousel.css';
import { CartProvider } from "react-use-cart";
import CartDetails from "../../../Cartdetails";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const singleProductPage = () => {
 

  return (
    <div >
  <Box component={Box} sx={{display:"flex flex-col",justifyContent:'space-between', width:'1100px' ,paddingTop:'80px',}}>
    
 <CartProvider>
<CartDetails/>
 </CartProvider>

</Box>
      <div className="pb-10 pt-10">

  <Box component={Container}sx={{color:'black' }}>
     <Typography sx={{justifyContent:"center", display:"flex", marginBottom:5}} component={'h1'}>Customers who saw this product also bought</Typography>
   
     <Container maxWidth="md">
      
      <Carousel className='pl-5 pr-5 items-center w-full' autoPlay={true} interval={5000}>
               <div className="flex w-40 h-58">
                   <img src="dress13.png" className="mr-10" />
                   <img src="dress42.png" className="mr-10"/>
                   <img src="dress35.png" className="mr-10"/>
                   <img src="dress44.png" className="mr-10"/>
                </div> 
                <div className="flex w-40 h-58">
                   <img src="dress27.png" className="mr-10" />
                   <img src="dress37.png" className="mr-10"/>
                   <img src="dress32.png" className="mr-10"/>
                   <img src="dress1.png" className="mr-10"/>
               </div>
              
               <div className="flex w-40 h-58">
               <img src="dress47.png" className="mr-10"/>
               <img src="dress40.png" className="mr-10"/> 
               <img src="dress22.png" className="mr-10"/>
               <img src="dress4.png" className="mr-10" />
             </div>
             <div className="flex w-40 h-58">
             <img src="dress50.png" className="mr-10" />
             <img src="dress49.png" className="mr-10" /> 
             <img src="dress3.png" className="mr-10" />
             <img src="dress45.png" className="mr-10" />
               </div>
               
           </Carousel>
           </Container>
     </Box>


      </div>

    </div>
  );
};

export default singleProductPage; 