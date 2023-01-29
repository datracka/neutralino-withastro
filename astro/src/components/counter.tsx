import { createSignal } from "solid-js";

function Counter() {
    const [count, setCount] = createSignal<number>(0);
  
    setInterval(() => setCount(count() + 1), 1000);
  
    return <div>Count: {count()}</div>;
  }

export default Counter