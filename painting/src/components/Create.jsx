import{nanoid} from "nanoid"
import { useContext, useState } from "react";
import { paintingcontext } from "../context/PaintingsContext";
import { useNavigate } from "react-router-dom";



const Create = () => {
  const navigate = useNavigate();

  const [paintings,setpaintings] =useContext(paintingcontext)
 
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  // const [ingredients, setingredients] = useState("");
  const [instructions, setinstructions] = useState("");

  const SubmitHandler = (e) =>{
    e.preventDefault();
    const newpainting= {
      id:nanoid(),
      image,
      title,
      description,
      // ingredients,
      instructions,
    };
    const copypaintings = [...paintings];
    copypaintings.push(newpainting)
    localStorage.setItem("paintings", JSON.stringify(copypaintings));
    setpaintings(copypaintings);
    navigate("/paintings");
  }
  return (
   <form onSubmit={SubmitHandler} className="w-[70%] m-auto pb-5">
  <h1 className="text-7xl mt-5 font-bold text-violet-300 mb-[5%]">
    Create <br />  <span className="text-pink-300 px-10"> New Painting</span>
   </h1>
      <input 
        type="Url"
        placeholder="upload your art here" 
         value={image}
         onChange={(e)=> setimage (e.target .value)} 
         className="w-full rounded px-5 py-5text-lg mb-5"
         />
         <input 
         type="text"
         placeholder="painting title here" 
         value={title}
         onChange={(e)=> settitle (e.target .value)} 
         className="w-full rounded px-5 py-5text-lg mb-5"
         />
   <textarea
  placeholder="Painting description Here" 
  value={description}
  onChange={(e)=> setdescription (e.target .value)} 
  className="w-full rounded px-5 py-5text-lg mb-5" 
  />
  {/* <textarea
  placeholder="Recipi ingreduents Here" 
  value={ingredients}
  onChange={(e)=> setingredients (e.target .value)} 
  className="w-full rounded px-5 py-5text-lg mb-5"
  /> */}
  <textarea
  placeholder="Painting instruction Here" 
  value={instructions}
  onChange={(e)=> setinstructions (e.target .value)} 
  className="w-full rounded px-5 py-5text-lg mb-5"
  />
    <div className="w-full text-right">
                <button className="rounded-md text-xl bg-black text-white py-2 px-5 hover:bg-violet-500 duration-200">
                    Publish Painting  &nbsp; &#8594;
                </button>
            </div>
  
   </form>
  )
}

export default Create