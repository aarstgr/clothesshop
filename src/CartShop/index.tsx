import React from 'react';
import {useCart} from "react-use-cart";
import { Button } from '@material-ui/core';
import  {useLocation,useNavigate} from 'react-router-dom'
import  useHistory  from 'react-router-dom';
import { useContext } from 'react';
import { CartContext , CartContextType  } from '../cartContext';
import { Link } from 'react-router-dom';
import {Box,Typography}from '@mui/material';

const CartShop = () => {
  


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
        <section className=' container  pb-10 rounded-2xl ' style={{backgroundColor:'#F3F3F7'}}>
        <Box className='flex justify-around'>
            <Box className='col-12 w-7/12'>
               
                <table className='table table-light table-hover m-0 mt-5 '>
                    <tbody className=''>
                   {items.map((item:any,index:number)=>{
                    return(
                     <tr key={index} className='rounded-2xl flex mb-5 border p-4 space-x-6 bg-white '>
                    
                        <td> 
                            <img src={item.img} style={{height:'5rem',boxShadow:'0px 1px 12px 1px rgba(0, 0, 0, 0.2)'}} />
                       <Box className='flex justify-between gap-3'>
                        <td className='border px-2 mt-1 text-red-500'>{item.quantity}</td>
                        <Box className='text-gray-400 mt-1 flex'> Quantity</Box> 
                        </Box> 
                        </td>
                        <Box className='flex flex-col ml-2 '>
                        <td className='mr-10'>{item.title} </td>
                        <td className='font-bold '>{item.price}$ </td>
                         </Box>
                         
                        
                        <td style={{marginTop:5,width:'100%'}}>
                            <Button style={{marginRight:15, }} color="inherit" variant="contained" onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                            <Button color="inherit" variant="contained" onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                          <hr/>  
                          <Button style={{marginTop:14,background:'#E42C14',color:'white'}} variant="contained" onClick={()=> removeItem(item.id)}>Remove Items</Button>
                        </td>
                     </tr>
                     )
                     
                   })}
                   </tbody>
                </table>
            </Box>
            <Box className=' mt-4  w-1/3 h-fit border p-8 mr-20 bg-white rounded'>
                <h1 className='font-bold'>TOTAL PURCHASE:</h1>
                <h4 className=' mt-6'> total Items : {totalItems}</h4> 
                <h4 className='mt-4 pb-5'>Products: {totalUniqueItems} </h4>
                <hr />
                <h2 className=' mt-4 font-bold pt-2 pb-2'>Totel Price: <span className='text-red-600'>{cartTotal} $</span> </h2>  
              <h4 className="mt-5"><Button onClick={()=>emptyCart()} style={{background:'',color:'#E42C14',border:'solid red 0.5px',paddingRight:'34px',paddingLeft:'34px',marginLeft:''}} variant="outlined" >Clear Cart</Button></h4>
        </Box> 
       
        </Box>
       
        </section>
    );
}
 
export default CartShop;