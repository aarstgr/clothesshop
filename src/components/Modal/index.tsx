import {useImperativeHandle, useState} from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Modal = React.forwardRef((props:any ,ref:any) => {

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event:any) => {
    setSelectedValue(event.target.value);
  };



    const [show ,setShow]=useState(false);

    useImperativeHandle(
      ref,
      ()=>{
       return {show, setShow}
      },
      [show]

)

  
    return show &&( 
      <Box className='overflow-hidden	 fixed	z-10 shadow-md	 top-10 right-20  mr-10 h-4/4 w-6/12	 pb-8 overflow-auto  w-1/2	bg-white rounded border-1  '  >
        <div className="relative m-auto pl-4  border-solid w-fit h-fit items-center	">
          <div className='shadow-sm  text-black  flex '>
        <h1 className='font-bold mr-48 pt-5 mt-5'>Select payment method </h1>
        <button className='grow  ml-72  font-bold pl-8 text-3xl p-2 rounded ' onClick={()=>setShow(false)}>X</button>
        </div>

        <RadioGroup className='pr-16' name="radioGroup" value={selectedValue} onChange={handleChange}>
      <Grid container spacing={2}>
        <p className='mt-10 ml-20 font-bold'>e-Wallet :</p>
        <Grid item xs={12} sx={{display:'flex',gap:'58px', marginLeft:'120px'}}>
          <span className='flex'><FormControlLabel value="option1" control={<Radio />} label="" /><img src='/wallet-1.png' className='w-48'/></span>
            <span className='flex'><FormControlLabel value="option2" control={<Radio />} label="" /><img src='/wallet-2.png' className='border-solid	w-48 border-zink-200 border-4 rounded'/></span>
            <span className='flex'><FormControlLabel value="option3" control={<Radio />} label="" /><img src='/wallet-3.png' className='border-solid mr-14	w-48 border-zink-200 border-4 rounded'/></span>
        </Grid>
       <p  className='mt-10 ml-20 font-bold'>Bank transfer :</p> 
       <Grid item xs={12}  sx={{display:'flex',gap:'58px', marginLeft:'120px'}}>
            <span className='flex'><FormControlLabel value="option4" control={<Radio />} label="" /><img src='/transfer-1.png' className='border-solid	w-52 border-zink-200 border-4 rounded'/></span>
            <span className='flex'><FormControlLabel value="option5" control={<Radio />} label="" /><img src='/transfer-2.png'className='border-solid	w-48 border-zink-200 border-4 rounded'/></span>
            <span className='flex'><FormControlLabel value="option6" control={<Radio />} label="" /><img src='/transfer-3.png' className='border-solid mr-14	w-48 border-zink-200 border-4 rounded'/></span>
        </Grid>
        <p  className='mt-10 ml-20 font-bold'>Cash at retail outlets :</p>
        <Grid item xs={12}  sx={{display:'flex',gap:'58px', marginLeft:'120px'}}>
            <span className='flex'><FormControlLabel value="option7" control={<Radio />} label="" /><img src='/cash-1.png'className='border-solid	w-48 border-zink-200 border-4 rounded'/></span>
            <span className='flex'><FormControlLabel value="option8" control={<Radio />} label="" /><img src='/cash-2.png' className='border-solid	w-48 border-zink-200 border-4 rounded'/></span>
            <span className='flex'><FormControlLabel value="option9" control={<Radio />} label="" /><img src='/cash-3.png' className='border-solid mr-14	w-48 border-zink-200 border-4 rounded'/></span>
        </Grid>
      </Grid>
    </RadioGroup>
    <p className='	 flex gap-10 mt-10 mr-10 '>
      <p className='grow'></p>
        <button className='px-10 py-4 bg-red-600 text-white font-bold rounded justify-end'><Link to="https://my.bmi.ir/portalserver/signup">Next</Link></button>
        </p>
      </div>
      </Box>
    );
});
 
export default Modal;