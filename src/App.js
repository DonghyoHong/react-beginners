import './App.css';
import {MinutesToHours} from "./components/MinutesToHours";
import {KmToMiles} from "./components/KmToMiles";
import {useState} from "react";


function App() {
    const [index, setIndex] = useState("XX");
    const onSelect = (event) => {
        setIndex(event.target.value);
    }
    console.log(`index : ${index}`);
    return (
        <div className="App">
            <h1>Super Converter</h1>
            <select value={index} onChange={onSelect}>
                <option value="XX">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
            </select>
            <hr/>
            {index === "XX" ? "Please select your units" : null}
            {index === "0" ? <MinutesToHours></MinutesToHours> : null}
            {index === "1" ? <KmToMiles></KmToMiles> : null}
        </div>
    );
}

export default App;
