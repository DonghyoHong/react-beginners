import React, {useEffect, useState} from "react";

function Hello() {
    function destroyFn() {
        console.log("bye :(");
    }

    function effectFn() {
        console.log("Create :)");
        return destroyFn;
    }

    useEffect(effectFn, []);
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
