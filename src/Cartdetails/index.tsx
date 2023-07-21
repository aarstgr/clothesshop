import React from 'react';
import {useCart} from "react-use-cart";
import  {useLocation,useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box,  InputLabel,Button } from "@mui/material";

const CartDetails = () => {
  
  const [color, setColor] = React.useState('');
  const [size, setSize] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value);
  };
  const handleSizeChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

    const {
      items,
        isEmpty,
        totalUniqueItems,
        totalItems,
         cartTotal,
         updateItemQuantity,
         removeItem,
         emptyCart,
        } = useCart();
       
     
        if (isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>
    return ( 
        <section className=' container  pb-10  ml-8 rounded-2xl ' style={{backgroundColor:'#F3F3F7'}}>
        <Box className='flex justify-around'>
            <Box sx={{height:'500px'}}>
               
             <table className='table table-light table-hover ml-10 mt-5 '>
               <tbody className=''>
                {items.map((item:any,index:number)=>{
                return(
                <tr key={index} className='rounded-2xl flex mb-5 w-full p-4 space-x-6  pb-40 h-full'>
                 <td className='w-1/2 mr-5'> 
                  <img src={item.img} style={{height:'fit',width:'50rem',margin:'1rem',marginRight:'5rem',boxShadow:'0px 1px 12px 1px rgba(0, 0, 0, 0.2)'}} />  
                  
                  <Box sx={{marginLeft:3}}>
                    <td className='mr-10 ml-5 '>{item.title} </td>
                  <hr />
                  <td className='font-bold ml-5'>{item.price} $ </td>
                  </Box>
                  </td>
                
          <Box className='flex flex-col '>
          <div className="ml-5 w-44 mt-5">
      
      
          <h1 className="p-2 mt-2">color</h1>
        <FormControl fullWidth>
       <InputLabel id="demo-simple-select-label">choose an option</InputLabel>
       <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={color}
        label=""
        onChange={handleChange}
      >
    <MenuItem value={10}>blue</MenuItem>
    <MenuItem value={20}>green</MenuItem>
    <MenuItem value={30}>white</MenuItem>
    <MenuItem value={40}>yellow</MenuItem>
    <MenuItem value={50}>red</MenuItem>
    </Select>
   </FormControl>
   <h1 className="p-2 mt-1">size</h1>
        <FormControl fullWidth>
       <InputLabel id="demo-simple-select-label">choose an option</InputLabel>
       <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={size}
        label=""
        onChange={handleSizeChange}
      >
    <MenuItem value={10}>sm</MenuItem>
    <MenuItem value={20}>md</MenuItem>
    <MenuItem value={30}>lg</MenuItem>
    <MenuItem value={40}>xl</MenuItem>
    <MenuItem value={50}>2xl</MenuItem>
    </Select>
   </FormControl>

       </div>
                  
    
            <td style={{marginTop:5,width:'100%'}}>
               <Box className='flex mb-5 mt-3 ml-4'>
               <Box className='text-gray-400 mr-2 mt-1 flex'> Quantity</Box> 
                <td className='border px-2 mt-1  text-red-500'>{item.quantity}</td>    
                   </Box>
                   <Button style={{marginRight:15,marginLeft:15}} color="inherit" variant="contained" onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                   <Button color="inherit" variant="contained" onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                   
                    <br/>  
                          <Button style={{marginTop:20,background:'#E42C14',color:'white',marginLeft:15}} variant="contained" onClick={()=> removeItem(item.id)}>Remove Items</Button>
                        </td> 
                        </Box>
                     </tr>
                     )
                     
                   })}
                   </tbody>
                </table>
            </Box>
            <Box className=' mt-14  w-1/3 h-fit border p-8 mr-20 bg-white rounded'>
                <h1 className='font-bold'>TOTAL PURCHASE:</h1>
                <h4 className=' mt-6'> total Items : {totalItems}</h4> 
                <h4 className='mt-4 pb-5'>Products: {totalUniqueItems} </h4>
                <hr />
                <h2 className=' mt-4 font-bold pt-2 pb-2'>Totel Price: <span className='text-red-600'>{cartTotal} $</span> </h2>  
              <h4 className="mt-5"><Button onClick={()=>emptyCart()} style={{background:'',color:'#E42C14',border:'solid red 0.5px',paddingRight:'34px',paddingLeft:'34px',marginLeft:''}} variant="outlined" >Clear Cart</Button></h4>
       
             
        </Box> 
        <Link to={'/product'}className='flex flex-col-reverse mr-10' > <Button variant="contained"  sx={{height:'40px',width:'120px', marginBottom:'7px',marginsTop:'1'}} >Buy Now</Button></Link>
        </Box>
       
        </section>
    );
}
 
export default CartDetails;