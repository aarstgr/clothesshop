import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { color } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import {useCart} from "react-use-cart";

interface CardProps {
    index ?: number;
    img: string;
    title: string;
    price: string;
    desc: string;
    item: any;
    className?: string;
    darkMode?: boolean;
    style?:any;
  }
const Cardd = (props: CardProps) => {
    const { addItem } = useCart();
  
    return (
        <div className=" pt-4  ml-7 rounded "  >
        <div
        {...props} 
        className={`p-7 bg-white w-90 rounded-md h-80 shadow-md ${props.className}`} >
             <div className="w-60 mt-5" key={props.index}>
        <span><Link to="/singleproduct"><img className=" object-scale-down hover:scale-150 pl-5 w-32 h-32 ease-in duration-500 " src={props.img} alt="" onClick={() =>addItem(props.item)}/></Link></span>
        <div className="flex justify-between pt-8 pb-8">
        <span className="text-md font-bold ">{props.title}</span>
        <span className="text-md  ">${props.price}</span>
        <span className="text-md text-sky-400 ">{props.desc}</span>
       </div></div>
       <Button color="inherit" variant="outlined" onClick={() =>addItem(props.item)}>Add to Cart </Button>
        </div>
        </div>
 );
};

export default Cardd;