import { useParams } from "react-router-dom";
import { Component } from "react";
import { Typography, Box, FormGroup, Input, InputLabel ,Button} from "@mui/material";
import { Container } from "@mui/system";
import { useState, useEffect,useRef,Dispatch,SetStateAction  } from 'react';
import * as React from "react";
import {Card, Grid} from '@material-ui/core';
import Cardd from "../../../Card";
import { Label } from "@thumbtack/thumbprint-react";
import CartShop from "../../../CartShop";
import { CartProvider } from "react-use-cart";
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Modal from "../../../components/Modal";

type IModalRefType = {
  show:boolean;
  setShow:Dispatch<SetStateAction<boolean>>;
}


const ProductPage = () => {

const bodysetting={
backgroundColor:'#F3F3F7',
paddingTop:70,
paddingBottom:20,
width:'100%',
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };




//modal
  const modalRef = useRef<IModalRefType>(null);




  return (

<Grid container  style={bodysetting}>
  <Box sx={{display:'flex '}} >
  <Box component={Box} sx={{  width:'100%' , height:'auto' ,paddingTop:'10px', marginLeft:'70px',paddingBottom:'40px' , padding:'10px'}}>
    <CartProvider>
      <CartShop/>
    </CartProvider>
    </Box>
 <Box className="h-5 mt-6 border-solid border p-5 pt-7 bg-white mr-28 h-fit mb-5 w-ull rounded">
<Box className=" pb-4"><p className="font-bold pb-4">Address :</p>Jerry Seinfeld Apartment 5A 129 West 81st Street · <span>(085706264055)</span></Box>
<hr />

<Box>
 
  <div className="flex mt-7 mb-5 w-full gap-5 text-stone-700">
  <div className="w-1/2">
     <h1 className="p-2">Choose Delivery</h1>
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Reguler (3-5 days)</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label=""
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

    </div>


    <div className="w-1/2">
     <h1 className=" p-2">Select Courier</h1>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">JNE</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
<p className="text-stone-400 p-1">Rp22.000</p>
    </div>

</div>
</Box>
<hr/>
 <Modal ref={modalRef}/>
 <span style={{marginLeft:'2%'}}> <Button variant="contained"  sx={{display:'flex',height:'40px',width:'120px', marginBottom:'7px',marginsTop:'10px'}} onClick={()=>{ ((modalRef.current as IModalRefType).setShow((prev)=> !prev))}}>PAYMENT </Button></span>
 </Box> 
 
 </Box>

   </Grid>
  );
};

export default ProductPage; 