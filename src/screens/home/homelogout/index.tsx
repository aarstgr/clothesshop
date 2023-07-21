import React from "react";
import { Box,Typography,TextField, InputAdornment, Select,MenuItem } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import CartShop from "../../../CartShop";
import { CartProvider } from "react-use-cart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import  {useLocation,useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from "../../../cartContext";
import data from "../../../data";
import data2 from "../../../data2";
import data3 from "../../../data3";
import data4 from "../../../data4";
import Cardd from "../../../Card";
import { useState } from "react";
import NavLogout from "../../../components/NavLogout";
import CardLogout from "../../../CardLogout";


const styles={
  background:'#F3F3F7',
  paddingBottom:10,
  paddingRight:0
}
const category={
  background:'#FFFFF',
  width:300,
  height:1000,
  marginTop:30,
  marginLeft:30,
}
const main={
  background:'#FFFFF',
  width:1200,
}

const homeLogout = () => {

  const [isChecked, setIsChecked] = useState(false);

  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

   // Function to handle checkbox change
 const handleChange = (event:any) => {
    const { value } = event.target;
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(value)) {
        return prevSelectedCategories.filter((category) => category !== value);
      } else {
        return [...prevSelectedCategories, value];
      }
    });
    setIsChecked(event.target.checked);
  };

  //filterProducts
  const filteredProducts = data.productData.filter((product) =>
  selectedCategories.includes(product.category)
  );
  const filteredProducts2 = data2.productData.filter((product) =>
  selectedCategories.includes(product.category)
  );
  const filteredProducts3 = data3.productData.filter((product) =>
  selectedCategories.includes(product.category)
);
  const filteredProducts4 = data4.productData.filter((product) =>
  selectedCategories.includes(product.category)
  );



//color
 const [selectedColors, setSelectedColors] = React.useState<string[]>([]);

// Function to handle Color change
const handleColorChange = (event:any) => {
  const { value } = event.target;
  setSelectedColors((prevSelectedColors) => {
    if (prevSelectedColors.includes(value)) {
      return prevSelectedColors.filter((colors) => colors !== value);
    } else {
      return [...prevSelectedColors, value];
    }
  });
 
};

//filterProductscolor
const filteredProductscolor = data.productData.filter((product) =>
selectedColors.includes(product.colors)
);
const filteredProductscolor2 = data2.productData.filter((product) =>
selectedColors.includes(product.colors)
);
const filteredProductscolor3 = data3.productData.filter((product) =>
selectedColors.includes(product.colors)
);
const filteredProductscolor4 = data4.productData.filter((product) =>
selectedColors.includes(product.colors)
);



  const { items }:any = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();



//prouductpages
  const pages = [<Page1 />, <Page2 />, <Page3 />, <Page4 />];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots:(dots:any)  => (
      <div
        style={{
          borderRadius: "10px",
          padding: "0px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i:any) => (
      <div
        style={{
          width: "30px",
          color: "black",
          border: "1px black solid",
          borderRadius: "10px",
         padding:"2px",
        
        }} >
        {i + 1}
      </div>
    )
  };


  
    return ( 
     
      <>
     <NavLogout/>
     <Box sx={{ background:'#F3F3F7',paddingLeft:"1200px",paddingTop:"10px",display:"flex ",flexDirection:'row'}}>
      <div className="pt-5 mr-4">Sortby:</div>
      <FormControl sx={{ m: 1, minWidth: 110 , background:'#DDDDDD',borderRadius:2}}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          autoWidth
          label="Relevant"
          defaultValue={10}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Relevant</MenuItem>
          <MenuItem value={20}>Bestseller</MenuItem>
          <MenuItem value={21}>Most Viewed</MenuItem>
          <MenuItem value={22}>Rating</MenuItem>
          <MenuItem value={23}>Price</MenuItem>
          <MenuItem value={24}>Prouduct Name</MenuItem>
          <MenuItem value={25}>New Arrivals</MenuItem>
        </Select>
      </FormControl>
     </Box>
     <Box style={styles} sx={{display:"flex " }}>

       <div className="bg-white text-start flex flex-col mb-40 pr-2 " style={category} >
      
        <FormGroup className="ml-10"  >
        <Typography variant='h6' my={3} >Category</Typography>
        <FormControlLabel control={<Checkbox  checked={selectedCategories.includes("T-shirt")}   onChange={handleChange}   value="T-shirt"/>} label="T-shirt"/>
        <FormControlLabel control={<Checkbox  checked={selectedCategories.includes("Shirt")}     onChange={handleChange}   value="Shirt" />}  label="Shirt" />
        <FormControlLabel control={<Checkbox  checked={selectedCategories.includes("Poloshirt")}  onChange={handleChange}   value="Poloshirt"/>} label="Polo shirt"/>
        <FormControlLabel control={<Checkbox  checked={selectedCategories.includes("Blouse")}    onChange={handleChange}   value="Blouse"/>}label="Outerwear"/>
        <FormControlLabel control={<Checkbox  checked={selectedCategories.includes("Dress")}    onChange={handleChange}   value="Dress"/>} label="Dress"/>
        <FormControlLabel control={<Checkbox  checked={selectedCategories.includes("Other")}    onChange={handleChange}   value="Other"/>}  label="Other"/>
      </FormGroup> 
 
        <Box component="form" my={3} mx={3} gap={3} display={"flex"} flexDirection={"column"}>
       <Typography variant='h6'  >Price</Typography>
        <TextField label="max price"  InputProps = {{
          startAdornment:<InputAdornment position="start" > <LocalAtmTwoToneIcon sx={{width:"50px", height:"50px", }}/></InputAdornment>
        }} />
        <TextField label="min price"  InputProps = {{
          startAdornment:<InputAdornment position="start"><LocalAtmTwoToneIcon sx={{width:"50px", height:"50px", }}/></InputAdornment>
        }} />
       </Box>

    <Typography variant='h6' mx={3} >Color</Typography>
    <Box sx={{marginLeft:'30px', }}>
    
     <FormControlLabel
     control={
      <Checkbox
        checked={selectedColors.includes("black")}
        onChange={handleColorChange}
        value="black"
      />
    }
    label=""
    className='bg-gray-900 text-white m-1 rounded p-1  w-14'
    />
  
    <FormControlLabel
    control={
      <Checkbox
        checked={selectedColors.includes("white")}
        onChange={handleColorChange}
        value="white"
        className=' bg-slate-200 m-2 '
      />
    }
    label=""
    className='bg-slate-200 rounded p-1  w-14'
   />
  
    <FormControlLabel
     control={
      <Checkbox
        checked={selectedColors.includes("pink")}
        onChange={handleColorChange}
        value="pink"
      />
    }
    label=""
    className='bg-red-200 m-1  rounded p-1  w-14'
    />
  
    <FormControlLabel
     control={
      <Checkbox
        checked={selectedColors.includes("blue")}
        onChange={handleColorChange}
        value="blue"
      />
    }
    label=""
    className='bg-blue-700 m-1  rounded p-1  w-14'
    />

    <FormControlLabel
    control={
      <Checkbox
        checked={selectedColors.includes("orange")}
        onChange={handleColorChange}
        value="orange"
      />
    }
    label=""
    className='bg-orange-400 m-1 rounded p-1  w-14'
    />
   
    <FormControlLabel
    control={
      <Checkbox
        checked={selectedColors.includes("green")}
        onChange={handleColorChange}
        value="green"
      />
    }
    label=""
    className='bg-green-700 m-1  rounded p-1  w-14'
   />
 
    <FormControlLabel
    control={
      <Checkbox
        checked={selectedColors.includes("yellow")}
        onChange={handleColorChange}
        value="yellow"
      />
    }
    label=""
    className='bg-yellow-400 m-1  rounded p-1 w-14'
  />
  
    <FormControlLabel
    control={
      <Checkbox
        checked={selectedColors.includes("red")}
        onChange={handleColorChange}
        value="red"
      />
    }
    label=""
    className='bg-red-600 m-1  rounded p-1 w-14'
  />
  </Box>
       </div>
       

      <Box className=" overflow-hidden " style={main}  >         
      {isChecked || selectedColors.length > 0 ? (
         <div className="md:flex-wrap flex">
          {filteredProducts.map((item, index) => {
           return (
        
          <CardLogout
            className="w-60 mt-5"
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
           />
          );
          })}
           {filteredProducts2.map((item, index) => {
           return (
        
          <CardLogout
            className="w-60 mt-5"
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
           />
          );
          })}
          {filteredProducts3.map((item, index) => {
           return (
        
          <CardLogout
            className="w-60 mt-5"
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
           />
          );
          })}
          {filteredProducts4.map((item, index) => {
           return (
        
          <CardLogout
            className="w-60 mt-5"
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
           />
          );
          })}
           {filteredProductscolor.map((item, index) => {
           return (
        
          <CardLogout
            className="w-60 mt-5"
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
           />
          );
           })}
            {filteredProductscolor2.map((item, index) => {
           return (
        
          <CardLogout
            className="w-60 mt-5"
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
           />
          );
           })}
            {filteredProductscolor3.map((item, index) => {
           return (
        
          <CardLogout
            className="w-60 mt-5"
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
           />
          );
           })}
           
           {filteredProductscolor4.map((item, index) => {
           return (
        
          <CardLogout
            className="w-60 mt-5"
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
           />
          );
           })}
         </div>  
       ):(
        <CartProvider>
          <Slider {...settings} className="pb-12 mb-20">
            {pages.map((page, index) => (
             <Box key={index}>{page}</Box>
             ))}
          </Slider>
          <Box>
          <CartShop/>
          </Box>
      </CartProvider> 
      )}
      
      </Box>
       
      </Box>
     </>
    
     );
}
 
export default homeLogout;