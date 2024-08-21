export { increment, decrement } from "../reducers/counterSlice";
    
import { calculateByAmount } from "../reducers/counterSlice";

export const asynccalculatebyamount = (amt) => async (dispatch, getState) => {
    try {
        console.log(getState());
        setTimeout(() => {
            dispatch(calculateByAmount(amt));
        }, 2000);
    } catch (error) {
        console.log(error);
    }
};