import React from "react";

const Counter = () => {
    const [count, setCount] = React.useState(0) //useState는 배열을 반환함, setCount는 count를 바꿔줌

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            +1버튼 누르면 1씩 올라가고 -1버튼 누르면 1씩 내려감
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{count}</p>
            <p></p>
        </div>

    );
};

export default Counter;
