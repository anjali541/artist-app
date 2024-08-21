import { useNavigate, useParams } from "react-router-dom";
import { paintingcontext } from "../context/PaintingsContext";
import { useContext, useState } from "react";

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [paintings, setpaintings] = useContext(paintingcontext);
    const art = paintings.find((r) => r.id === id);

    const [title, settitle] = useState(art.title);
    const [image, setimage] = useState(art.image);
    const [description, setdescription] = useState(art.description);
    // const [ingredients, setingredients] = useState(art.ingredients);
    const [instructions, setinstructions] = useState(art.instructions);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const updatedpainting = {
            id: id,
            title,
            image,
            description,
            // ingredients,
            instructions,
        };
        const copypaintings = [...paintings];
        const paintingIndex = copypaintings.findIndex((r) => r.id === id);
        copypaintings[paintingIndex] = updatedpainting;
        localStorage.setItem("paintings", JSON.stringify(copypaintings));
        setpaintings(copypaintings);
        navigate("/paintings");
    };

    return (
        paintings.length > 0 &&
        art && (
            <form onSubmit={SubmitHandler} className="w-[70%] m-auto  ">
                <h1 className="text-7xl mt-5 font-bold text-violet-600 mb-[5%]">
                    Update <br /> <hr /> <span className="text-pink-300 px-10">Painting</span>
                </h1>
                <input
                    onChange={(e) => setimage(e.target.value)}
                    value={image}
                    type="url"
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Recipe Image URL"
                />
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Recipe Name"
                />
                <textarea
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="recipe description..."
                ></textarea>
                {/* <textarea
                    onChange={(e) => setingredients(e.target.value)}
                    value={ingredients}
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
                ></textarea> */}
                <textarea
                    onChange={(e) => setinstructions(e.target.value)}
                    value={instructions}
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="recipe instructions -> 'use comma to seperate instructions'..."
                ></textarea>
                <div className="w-full text-right">
                    <button className="rounded-md text-xl bg-black text-white py-2 px-5 hover:bg-pink-700 duration-200">
                        Update Recipe &nbsp; &#8594;
                    </button>
                </div>
            </form>
        )
    );
};

export default Update;