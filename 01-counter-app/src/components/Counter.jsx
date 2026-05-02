import { useRef } from "react";
import { useCounterStore } from "../store/counterStore";

function Counter() {

    const count = useCounterStore(state => state.count);
    const doubleCount = count * 2;
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    const reset = useCounterStore((state) => state.reset);

    const inputRef = useRef();

    function handleSetCount() {
        const value = parseInt(inputRef.current.value, 10);
        if (!isNaN(value)) {
            useCounterStore.getState().incrementBy(value);
        }
    }

    function handleReset() {
    reset(); // reset store count
    if (inputRef.current) {
      inputRef.current.value = ""; // clear input box
    }
  }
  
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Count: {count}</h2>
            <h3>Double: {doubleCount}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} disabled = {count===0}>Decrement</button>
            <button onClick={handleReset}>Reset</button>

            <div>
                <input ref={inputRef} type="number" placeholder="enter the number" />
                <button onClick={handleSetCount}>Set Count</button>
            </div>
        </div>
    );
}

export default Counter;
