
import  {createContext, useState } from "react"

export const paintingcontext = createContext();


const PaintingContext = (props) => {
    const[paintings,setpaintings] = useState(
        JSON.parse(localStorage.getItem("paintings")) || []
    );
  return (
<paintingcontext.Provider value={[paintings,setpaintings]}>
    {props.children}
</paintingcontext.Provider>
  )
}

export default PaintingContext

