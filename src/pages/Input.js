import React, {useState} from "react";

const Input = () => {
    const [textValue, setTextValue] = React.useState("");

    const onChange = (e) => {
        setTextValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={textValue} onChange={onChange}/>
            <br/>
            <p>값: {textValue}</p>
        </div>
    );
};

export default Input;