import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {IRegisterData} from './types';
import { instance } from '../../../../api/constants';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const RegisterSchema=yup.object({
    email:yup.string().required().email(),
    password:yup.string().required(),
})

const useRegister = () => {

    const navigate= useNavigate()

    const [passwordType, setPasswordType] =React.useState<'password'|'text'>('password');
    const[loading, setLoading] = React.useState<boolean>(false)


    const {register,formState:{errors},handleSubmit}= useForm<IRegisterData>({
     resolver:yupResolver(RegisterSchema)
   })

    const handleRegisterUser=React.useCallback(
    (data:IRegisterData)=>{
        setLoading(true)
    instance.post('/api/register',data).then(res =>{
        console.log(res);
        Cookies.set('token',res.data.token,{
            expires:7
        })
        toast.success('You Registered successfully')
        setLoading(false)
        navigate('/auth/login')
    }).catch(()=>{
        setLoading(false)
        toast.error("Somethings went Wrong!")
    })
   },
   [],
 )
   
    return {
        handleRegisterUser,
        handleSubmit,
        register,
        errors,
        passwordType,
        setPasswordType,
        loading
    } 

    
}
 
export default useRegister;
