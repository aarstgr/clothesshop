import {Box,Container,IconButton,InputAdornment,TextField,Typography}from '@mui/material';
import { LoadingButton } from '@mui/lab';
import  VisibilityIcon  from "@mui/icons-material/Visibility";
import  VisibilityOffIcon  from "@mui/icons-material/VisibilityOff";
import useRegister from './useRegister';
import { styles } from "./styles";
import { stylebtn } from "./stylebtn";
import { makeStyles } from '@mui/styles';
import Navbarr from '../../../../components/NavLogin';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';

const RegisterScreen = () => {
  
   
 const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
      (inputRef.current)?.focus()
    },[])  
  
const{
    handleRegisterUser,
    handleSubmit,
    register,
    errors,
    passwordType,
    setPasswordType,
    loading,
  } = useRegister();
  

    return ( 
      
<>


 <Container maxWidth="xl"  sx={{display:"flex ",justifyContent: 'between', overflow:'hidden'}}>
  <div>
    <Box
   component="img"
   sx={{
     height: 900,
     width: 1500,
     filter: "brightness(50%)",
     maxHeight: { xs: 1000, md: 900 },
     maxWidth: { xs: 950, md: 900 },
     marginRight:15
   }}
   alt="register"
   src="/register.png"/>
   </div>

   <div className='pt-16 '>
 <Box
        component="img"
        sx={{
          height: 293,
          width: 290,
          maxHeight: { xs: 293, md: 200 },
          maxWidth: { xs: 290, md: 180 },
        }}
        mx={4}
        alt="Saly"
        src="/Saly-33.png"
      />
 <Typography variant='h3' my={3} mx={4}>Register</Typography>

<Box onSubmit={handleSubmit(handleRegisterUser)} sx={styles} component="form">

  <TextField inputRef={inputRef} error={Boolean(errors.email?.message)} helperText={errors.email?.message} sx={{background:"#F5F4F2"}} label="Email" InputProps={{...register('email')}}/>
  <TextField error={Boolean(errors.username?.message)} helperText={errors.username?.message}  sx={{background:"#F5F4F2"}} label="UserName" />
  <TextField error={Boolean(errors.password?.message)} helperText={errors.password?.message}  sx={{background:"#F5F4F2"}} type={passwordType} label="Password" InputProps={{
    endAdornment:(
   <InputAdornment position="start">
     <IconButton onClick={()=>{
      setPasswordType((prev)=>{
        if (prev==='password') return 'text'
        return 'password'
       })
     }}>
       {passwordType ==="text" ? <VisibilityIcon/>: <VisibilityOffIcon/>}
    </IconButton>
    </InputAdornment> ),
    ...register('password')
    }} />
    <TextField error={Boolean(errors.password?.message)} helperText={errors.password?.message}  sx={{background:"#F5F4F2"}} type={passwordType} label="Confirm Password" InputProps={{
    endAdornment:(
   <InputAdornment position="start">
     <IconButton onClick={()=>{
      setPasswordType((prev)=>{
        if (prev==='password') return 'text'
        return 'password'
       })
     }}>
       {passwordType ==="text" ? <VisibilityIcon/>: <VisibilityOffIcon/>}
    </IconButton>
    </InputAdornment> )
    }} />

    <LoadingButton loading={loading} id='submit' variant="contained"  type='submit' sx={stylebtn} > Register</LoadingButton>

<p className='text-center text-gray-400'>Or login with</p>
<div className='flex justify-center space-x-6'>
<Link className='text-blue-400' to="https://mail.google.com/"><Box
   component="img"
   sx={{
     height: 32,
     width: 31,
     maxHeight: { xs: 35, md: 32 },
     maxWidth: { xs: 31, md: 35 },
     paddingTop:0.5,
   }}
   alt="g"
   src="/Group.png"/></Link>
   
   <Link className='text-blue-400' to="https://www.facebook.com/"><Box
   component="img"
   sx={{
     height: 48,
     width: 44,
     maxHeight: { xs: 48, md: 38 },
     maxWidth: { xs: 40, md: 40 },
   }}
   alt="gr"
   src="/Group 38.png"/></Link>
   </div> 
   <p className='text-center text-gray-500 mt-3'>Already have an account ? <Link className='text-blue-400' to="/auth/login">Login</Link></p> 
   </Box>
  
   </div>
  
</Container>
</>
       
     );
}
 
export default RegisterScreen; 