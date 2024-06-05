import './App.css';
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const countClick = () => {
        //setCounter(counter + 1);
        setCounter((current) => current + 1);
        console.log(counter);
    }
    return (
        <div className="App">
            <h3>Total Clicks : {counter}</h3>
            <button onClick={countClick}>Click me
            </button>
        </div>
    );
}

export default App;
