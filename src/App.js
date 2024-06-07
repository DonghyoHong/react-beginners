import './App.css';
import {Btn} from "./components/section4/btn";
import {useState} from "react";
import React from "react";

const MemorizedBtn = React.memo(Btn);

function App() {
    const [value, setValue] = useState("Save Changes");
    const changeValue = () => setValue("Revert Changes");
    return (
        <div className="App">
            <MemorizedBtn background={"tomato"} text={value} changeValue={changeValue}></MemorizedBtn>
            <MemorizedBtn background={"skyblue"} text="Continue"></MemorizedBtn>
        </div>
    );
}

export default App;
