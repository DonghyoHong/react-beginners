import './App.css';
import {Btn} from "./components/section4/btn";

function App() {
    return (
        <div className="App">
            <Btn data={{
                text: "Save Btn"
                , background: "tomato"
            }}></Btn>
            <Btn data={{
                text: "Confirm Btn"
                , background: "skyblue"
            }}></Btn>
        </div>
    );
}

export default App;
