import './App.css';
import {Btn} from "./components/section4/btn";
import {useState} from "react";
import React from "react";
import PropTypes from "prop-types";

const MemorizedBtn = React.memo(Btn);
Btn.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    background: PropTypes.string.isRequired,
    changeValue: PropTypes.func
}

function App() {
    const [value, setValue] = useState("Save Changes");
    const changeValue = () => setValue("Revert Changes");
    return (
        <div className="App">
            <MemorizedBtn background={"tomato"} text={value} changeValue={changeValue}></MemorizedBtn>
            <MemorizedBtn fontSize={18} background={"skyblue"} text="Continue"></MemorizedBtn>
        </div>
    );
}

export default App;
