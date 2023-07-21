import {Box,Typography}from '@mui/material';
import React from "react";
import data from "../../data";
import data2 from "../../data2";
import data3 from "../../data3";
import data4 from "../../data4";
import Cardd from "../../Card";
import { Modal, Button } from "@mui/material";
import {useState } from "react";

const Navbar =()=>{
  
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
    const [selectedType, setSelectedType] = React.useState('');

    const handleCategoryClick = (type:any) => {
      setSelectedType(type);
    };
  
    const filteredProducts = data.productData.filter((product) => product.type === selectedType);
    const filteredProducts2 = data2.productData.filter((product) => product.type === selectedType);
    const filteredProducts3 = data3.productData.filter((product) => product.type === selectedType);
    const filteredProducts4 = data4.productData.filter((product) => product.type === selectedType);

    return(
        
        <Box sx={{ background:'#F3F3F7',color:"#1c1c1c"  }}>
  
         <nav>
  
        
        <Box component='ul' sx={{display:'flex', direction:'row', gap:'20px', justifyContent:'center', padding:'10px' }}>
       
         <li className="flex" onClick={() =>  { handleCategoryClick('men'); handleOpenModal();}}> Men<img src="/more.png" className="h-2 mt-2" alt="" /></li>
                
         <li className="flex" onClick={() => {handleCategoryClick('women'); handleOpenModal();}}> Women <img src="/more.png" className="h-2 mt-2" alt="" /></li> 
                
         <li className="flex" onClick={() => {handleCategoryClick('sport'); handleOpenModal();}}> Sports<img src="/more.png" className="h-2 mt-2 " alt="" /></li>
                
         <li className="flex" onClick={() => {handleCategoryClick('kids'); handleOpenModal();}}>Kids <img src="/more.png" className="h-2 mt-2" alt="" /></li>

       </Box>
       </nav> 
  
     {/* Display the filtered products */}
     <Modal open={openModal} onClose={handleCloseModal}>
      <Box sx={{ position: "absolute", top: "50%",overflow:"auto", maxHeight: "calc(100vh - 200px)", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 4 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Filter Results
        </Typography>
     <div className="md:flex-wrap flex pb-10 ml-">
     {filteredProducts.map((item, index) => {
           return (
        
          <Cardd
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
        
          <Cardd
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
        
          <Cardd
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
        
          <Cardd
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
   <Button variant="contained" color="error" onClick={handleCloseModal}>Close</Button>
    </Box>
    </Modal>
    </Box>
  );
};


     export default Navbar;
   