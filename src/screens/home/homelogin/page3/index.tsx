import Cardd from "../../../../Card";
import data3 from "../../../../data3";
import React,{useState} from "react";



const Page3 = () => { 
 



    return(

        <div className="md:flex-wrap flex">

          {data3.productData.map((item,index)=>{
               return(
                 <Cardd className="w-60 mt-5" img={item.img } title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
               )
           })}
        </div>
    );
  }
  export default Page3;
  