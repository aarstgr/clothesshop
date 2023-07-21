import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom/client'
import './index.css'
import React, { Suspense } from 'react'


const UsersScreen=React.lazy(()=>import('./screens/home/about'))
const SingleUsersScreen=React.lazy(()=>import('./screens/home/users/singleUser'))
const App= React.lazy(()=>import('./App'))
const AuthLayout= React.lazy(()=>import('./layouts/AuthLayout'))
const LoginScreen= React.lazy(()=>import('./screens/user/auth/login'))
const RegisterScreen= React.lazy(()=>import('./screens/user/auth/register'))
const HomeLogin= React.lazy(()=>import('./screens/home/homelogin'))
const HomeLogout= React.lazy(()=>import('./screens/home/homelogout'))
const Setting=React.lazy(()=>import('./screens/user/settings'))
const ProductPage=React.lazy(()=>import('./screens/home/product'))
const SingleProductPage=React.lazy(()=>import('./screens/home/singleproduct'))

const router = createBrowserRouter([
  {
    path:'/auth',
    element:  
    <Suspense fallback={<h1>loading... please wait...</h1>}>
    <AuthLayout/>
    </Suspense>,
    children:[
      {
      path:'/auth/register',
      element:
      <Suspense fallback={<h1>loading... please wait...</h1>}>
      <RegisterScreen/>
      </Suspense>
    },
  {
  path: "/auth/login",
  element:
  <Suspense fallback={<h1>loading... please wait...</h1>}>
  <LoginScreen/>
  </Suspense>
 }, 
 ]
  },
  {
    path:'/homelogout', 
    element: 
    <Suspense fallback={<h1>loading... please wait...</h1>}>
    <HomeLogout/>
    </Suspense>},
  {
    path:'/', 
    element: 
    <Suspense fallback={<h1>loading... please wait...</h1>}>
    <App/>
    </Suspense>,
    children:[
      {
        path:'/homelogin',
        element:
        <Suspense fallback={<h1>loading... please wait...</h1>}>
       <HomeLogin/>
       </Suspense>,
      },
      {
      path:'/users',
      element:
      <Suspense fallback={<h1>loading... please wait...</h1>}>
     <UsersScreen/>
     </Suspense>,
    },
    {
      path:'/users/:id',
      element:
      <Suspense fallback={<h1>loading... please wait...</h1>}>
     <SingleUsersScreen/>
     </Suspense>,
    },
    {
      path:'/homelogin/setting',
      element:
      <Suspense fallback={<h1>loading... please wait...</h1>}>
     <Setting/>
     </Suspense>,
    },
    {
      path:'/product',
      element:
      <Suspense fallback={<h1>loading... please wait...</h1>}>
     <ProductPage/>
     </Suspense>,
    },
    {
      path:'/singleproduct',
      element:
      <Suspense fallback={<h1>loading... please wait...</h1>}>
        <SingleProductPage/>
     </Suspense>,
    },
  ]
  }, 
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <>
    <Toaster/>
    <RouterProvider router={router} />
      </>
  </React.StrictMode>
)
