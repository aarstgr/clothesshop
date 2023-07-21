import data4 from "../../../../data4";
import React,{useState} from "react";
import CardLogout from "../../../../CardLogout";



const Page4 = () => { 
 



    return(

        <div className="md:flex-wrap flex">

          {data4.productData.map((item,index)=>{
               return(
                 <CardLogout className="w-60 mt-5" img={item.img } title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
               )
           })}
        </div>
    );
  }
  export default Page4;
  