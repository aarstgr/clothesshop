import Cardd from "../../../../Card";
import data2 from "../../../../data2";
import React,{useState} from "react";



const Page2 = () => { 
 



    return(

        <div className="md:flex-wrap flex">

          {data2.productData.map((item,index)=>{
               return(
                 <Cardd className="w-60 mt-5" img={item.img } title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
               )
           })}
        </div>
    );
  }
  export default Page2;
  