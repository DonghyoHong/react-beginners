import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Navigation from "./components/section14/Navigation";
import "./App.module.css";
import Notfound from "./Notfound";

function App() {
    return <Router>
        <Navigation></Navigation>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/movie/:id" element={<Detail/>}></Route>
            <Route path="*" element={<Notfound/>}></Route>
        </Routes>
    </Router>;
}

export default App;