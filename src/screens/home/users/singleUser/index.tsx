import { useParams } from "react-router-dom";
import {useState ,useEffect } from 'react';
import { singleUserService } from "../../../../api/services/singleUserService";
import { IUserType } from "../../../../api/services/usersService";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import { Container } from "postcss";

const SingleUserScreen = () => {
    const {id}= useParams()
    const [user,setUser]= useState<IUserType>({
        avatar:'',
        email:'',
        first_name:'',
        id:0,
        last_name:'',
    })
    useEffect(()=>{
        singleUserService(id || '').then(res=>{
            setUser(res)
        })
       
        },[id])
   
    return ( 
        <>
      <Box sx={{marginTop:'20px',marginLeft:15,paddingTop:'40px',paddingLeft:'40px',paddingBottom:4 ,boxShadow: 3 , background:'f3f3f7', width:'200px',borderRadius:'50px'}}>
        <Avatar src={user.avatar} />
        <Typography variant='body2'>{user.first_name}{' '}{user.last_name} </Typography>
        <Typography variant='body2'>{user.email} </Typography>
        
      </Box>
      <Typography variant="inherit" sx={{maxWidth:'sm',marginLeft:20,marginBottom:20}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure magni voluptatem saepe, modi architecto id accusamus non sapiente odit fugit, consequuntur, quis nisi possimus ducimus esse itaque maxime! Eveniet, consequuntur.</Typography>
      </> 
      );
}
 
export default SingleUserScreen;