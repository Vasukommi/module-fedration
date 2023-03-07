import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "../../features/counter/counterSlice.js";

const CounterRedux = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}
export default CounterRedux