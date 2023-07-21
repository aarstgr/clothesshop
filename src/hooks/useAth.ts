
import * as React from 'react';
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { instance } from '../api/constants';

const useAuth = () => {

    const navigate = useNavigate() 
    const {pathname} = useLocation()

    React.useEffect(()=>{
      if(!Cookies.get('token')){
       navigate('/auth/register')
     }else{
      instance.defaults.headers.common.Authorization = Cookies.get('token');
        if(pathname === '/auth/register'){
            navigate('/auth/login')
        }
       
        else if (pathname === '/auth/login'){
          navigate('/homelogin')
       }
       else if (pathname === '/'){
        navigate('/homelogin')
     }


     }
        },[]) 
    
}
 
export default useAuth;
 