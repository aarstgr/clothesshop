import { Box,Typography,TextField,Avatar, InputAdornment, Select,Button,InputLabel,MenuItem,FormControlLabel,FormControl,FormLabel,RadioGroup,Radio } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import '../../../index.css'
import React, { useState , useEffect,useRef } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


const category={
    background:'#FFFFF',
    width:300,
    height:1000,
    marginTop:30,
    marginLeft:30,
    
  };
  const stylebtn={
    marginTop:1.8,
    paddingTop:7,
    paddingBottom:7, 
    flexDirection:'column',
    gap:2, 
    fontColor:'gray',
    width:150,
  }


  
  const setting = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
      (inputRef.current)?.focus()
    },[])
    
   const [backgroundImage, setBackgroundImage] = useState<string | null>(null); 
   const [avatarImage, setAvatarImage] = useState<string | null>(null); 
 
   const handleBackgroundImageChange = (event:any) => {
     setBackgroundImage(URL.createObjectURL(event.target.files[0]));
   };
 
   const handleAvatarImageChange = (event:any) => {
     setAvatarImage(URL.createObjectURL(event.target.files[0]));
   }
    return ( 
        <div className="flex">
        <div className="bg-white text-start flex flex-col mb-40 pr-2 " style={category} >
      
        <Box className="ml-10"  >
        <Typography variant='h6' my={3} >Settings</Typography>
        <Typography variant='body1' className="focusthat" my={3} > Edit Profile</Typography> 
        <Typography variant='body1' className="focusthat" my={3} >Account</Typography>
        <Typography variant='body1' className="focusthat" my={3} >My Address</Typography>
        <Typography variant='body1' className="focusthat" my={3} >Language</Typography>
        <Typography variant='body1' className="focusthat" my={3} >Notification</Typography>
        <Typography variant='body1' className="focusthat" my={3} >Policy</Typography>
        <Typography variant='body1' className="focusthat" my={3} >Feedback</Typography>
        <Typography variant='body1' className="focusthat" my={3} sx={{color:'#E93535'}} >Logout</Typography>
      </Box> 
</div>

<div className="flex flex-col  mt-28 h-screen ">

      <div className="relative  h-48 bg-gray-300" style={{width:"825px"}}>
        {backgroundImage && <img src={backgroundImage} className="absolute inset-0 w-full h-full object-cover" alt="Background" />}
        <input type="file" id="background-image" onChange={handleBackgroundImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
        <label htmlFor="background-image" className="absolute bottom-0 right-0 m-2 px-4 py-2  rounded-md cursor-pointer "><img src="/choose.png"/></label>
      </div>
      <span  className="absolute left-96 bottom-80">
      <div className="relative mt-4 w-20 h-20 rounded-full bg-gray-400">
        {avatarImage && <img src={avatarImage} className="absolute inset-0 w-full h-full object-cover rounded-full" alt="Avatar" />}
        <input type="file" id="avatar-image" onChange={handleAvatarImageChange} className="absolute  inset-0 opacity-0 cursor-pointer" />
        <label htmlFor="avatar-image" className="absolute  bottom-2 right-0 m-2 px-4 py-2 rounded-md cursor-pointer "><img src="/choose.png"/></label>
      </div>
     </span> 
     <Box   sx={{marginTop:"50px", display:"flex", flexDirection:'column',gap:"15px" }}>
     <div>
     <TextField inputRef={inputRef} sx={{background:"#F5F4F2"}} label="First Name:" />
     <TextField  sx={{background:"#F5F4F2"}} label="Last Name:" />
     </div>
    <TextField  sx={{background:"#F5F4F2"}} label="Email"  />
    <TextField  sx={{background:"#F5F4F2"}} label="number" />
    <FormControl >
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    sx={{display:"flex", flexDirection:"row"}}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>



    <Button id='submit' variant="outlined" color="error" type='submit' sx={{stylebtn}} > Save Changes</Button>
    </Box>
 </div>
 







      </div> 
    
        
    
       
       
       
        );
}
 
export default setting