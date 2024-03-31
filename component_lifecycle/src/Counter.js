import { useState, useEffect } from 'react';

//Mount (initial render) -> updates (re-render) -> unmount

export default function Counter(){
    const[count, setCount] = useState(0);
    const[bool, setBool] = useState(false);

useEffect(() => {
    console.log('render');
});

useEffect(() => {
    console.log('mounted');

    return() => console.log('cleanup count changed');
}, [count]);



    return(
        <div className="counter">
            <button onClick={() => setBool(!bool)}>Re-Render</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count : {count}</p>
        </div>
    )
}