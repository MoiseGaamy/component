import React, { useState } from "react";


function FunctionCounter() {
    const [defaultNum, setDefaultNum] = useState(0);

    const addFive = () => {
        setDefaultNum(defaultNum + 5);
    }

    const resetToZero = () => {
        setDefaultNum(0);
    }
    return (
        <div className="compo">
            <div>functional Component</div>
            <h1>{defaultNum}</h1>
            <button type="button" className="btn btn-primary" onClick={addFive}>addFive</button>
            <button type="button" className="btn btn-secondary"onClick={resetToZero}>resetToZero</button>
        </div>
    )
}

export default FunctionCounter;