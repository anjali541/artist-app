import { useDispatch, useSelector } from "react-redux";
import {
    asynccalculatebyamount,
    decrement,
    increment,
} from "../store/actions/counterActions";

const About = () => {

  const dispatch =  useDispatch();
  const incrementhandler = () => {
    dispatch(increment(1));
};
const decrementhandler = () => {
    dispatch(decrement(1));
};

const calculatehandler = () => {
    dispatch(asynccalculatebyamount(-5));
};

const { value } = useSelector((state) => state.counterReducer);
  return (
      <div className="w-[70%] m-auto mt-[10%] p-10 bg-green-100 rounded-lg">
          <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
              LET&apos;S TALK ABOUT WHAT WE ARE
          </h1>
          <button>    <h1 className="text-7xl mt-10 font-extrabold text-green-600 mb-[5%]">
                {value}
            </h1></button>
            <button
                        onClick={incrementhandler}
                className=" rounded-md text-md bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200"
            >
                Increment By 1
            </button>
            <button
                onClick={decrementhandler}
                className="mx-5 rounded-md text-md bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200"
            >
                Decrement By 1
            </button>
            <button
                onClick={calculatehandler}
                className="rounded-md text-md bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200"
            >
                Calculate By Amount
            </button>
      </div>
  )
}
export default About