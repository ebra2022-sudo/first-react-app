import { useState } from "react";

function FunctionCompnent() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    
    return (
        <div>
            <h1>This is UI from the function component</h1>
            <h5>Counter1 = {count1}</h5>
            <h5>Counter2 = {count2}</h5>
            <button onClick={() => setCount1(count1 + 1)}>Increment counter 1</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment counter 2</button>
        </div>
    );
}


export default FunctionCompnent;