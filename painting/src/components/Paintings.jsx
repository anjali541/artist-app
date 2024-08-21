import React, { useContext } from 'react'
import Card from "./Card"
import { Link, useLocation} from 'react-router-dom'
import { paintingcontext } from "../context/PaintingsContext";



const Paintings = () => {
  const[paintings] = useContext( paintingcontext);
  const {pathname} = useLocation();

  return (
    paintings && (
   <div className=" ">
     <h1 className='text-center font-semibold mt-10 text-2xl'>Your Unique Paintings</h1>
     <p className='text-center text-zinc-500 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ullam.</p>

     <div className='paintings-card flex flex-wrap mt-[5%] p-5'>
       {paintings.map((paintings,index)=>(
        <Card key={index} art={paintings}/>
       ))}
     </div>

     {pathname ==="/paintings" &&  (
  <Link  
    to="/create-painting"
  className='cursor-pointer rounded-md absolute  top-[20%] py-3 px-5 left-[10%]  bg-black gap-x-3 flex items-center text-white'>
      <i className="text-3xl text-green-600 ri-add-box-line"></i>
      Create Art 

      </Link>

   )}
  

   </div>
  )
)
}
export default Paintings