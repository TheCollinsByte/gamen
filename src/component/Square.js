import React, {useState} from "react";

export const Square = () => {

    const [value, setValue] = useState(null);

    function handleClick() {
        setValue("X");
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

