import { instance } from '../../../api/constants';
import * as React from 'react';
import { Box,Avatar,Typography } from '@mui/material';
import { IUserType } from '../../../api/services/usersService';
import { Link } from 'react-router-dom';

const UsersScreen = () => {
    
    const [users, setusers] = React.useState<any>([])

    React.useEffect(()=> {
        
       instance.get('/api/users').then(res =>  {
         setusers(res.data.data)
       })

    }, [])
   
    return ( users.map((user:IUserType) =>(
      <Box sx={{display:'flex',justifyContent:'center',marginTop:'20px',marginLeft:'40px',paddingLeft:'4px',paddingBottom:'20px', width:'80px',height:'130px'}}>
        <Link to={`${user.id}`} key={user.id} className='pl-72 pt-10 mt-100'>
           <Avatar sx={{width:'100px',height:'100px'}} src={user.avatar} />
        </Link>
        </Box>
    )) );
}
 
export default UsersScreen;