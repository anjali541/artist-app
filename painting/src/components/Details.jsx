import { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { paintingcontext } from "../context/PaintingsContext";

const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [paintings, setpaintings] = useContext( paintingcontext );
    const art = paintings.find((r) => r.id === id);

    const deletehandler = () => {
        const filterpaintings = paintings.filter((r) => r.id !== id);
        setpaintings(filterpaintings);
        localStorage.setItem("paintings", JSON.stringify(filterpaintings));
        navigate("/paintings");
    };
    return (
        paintings.length > 0 &&
        art && (
            <div className="w-[80%] m-auto p-5">
                <Link
                    to="/paintings"
                    className="text-3xl ri-arrow-left-line"
                ></Link>
                <div className="details w-full flex h-[75vh] mt-3">
                    <div className="dets w-[50%] p-[3%] shadow">
                        <img className="" src={art.image} alt="" />
                        <h1 className="text-xl mb-5 mt-[10%] text-center">
                            {art.title}
                        </h1>
                        <p className="text-zinc-400">{art.description}</p>
                        <div className="flex justify-between py-10 px-5">
                            <Link
                                to={`/update-painting/${art.id}`}
                                className="text-blue-400 border-blue-400 border py-2 px-5"
                            >
                                Update
                            </Link>
                            <button
                                onClick={deletehandler}
                                className="text-red-400 border-red-400 border py-2 px-5"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                        {/* <h1 className="text-3xl border-b border-green-600 text-green-600">
                            Ingredients
                        </h1>
                        <ul className="text-zinc-600 list-disc  p-3 ">
                            {art.ingredients.split(",").map((d, i) => (
                                <li className="list-item text-sm  mb-2" key={i}>
                                    {d}
                                </li>
                            ))}
                        </ul> */}
                        <h1 className="text-3xl border-b border-violet-600 text-pink-600">
                            Instructions
                        </h1>
                        <ul className="text-zinc-600 list-decimal  p-3 ">
                            {art.instructions.split(".").map((d, i) => (
                                <li className="list-item text-sm  mb-2" key={i}>
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    );
};

export default Details;