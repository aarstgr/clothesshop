import Cardd from "../../../../Card";
import data from "../../../../data";
import {useState} from "react";
import { Link } from "react-router-dom";
const Page1 = () => { 
  const [darkMode, setDarkMode] = useState(false);
  

    return(

        <div className={`md:flex-wrap flex `}>

          {data.productData.map((item,index)=>{
               return(
               <Cardd className={`w-60 mt-5 text-gray-700 ${darkMode ? "bg-gray-800" : ""}` }  img={item.img }  title={item.title} desc={item.desc} price={item.price} item={item} key={index}   darkMode={darkMode}  />
               )
           })}
        </div>
    );
  }
  export default Page1;
  