import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../HomePage";
import Movie from "../Movie";
import Session from "../Session";
import Success from "../Success";
import "./reset.css";
import "./style.css";


function App() {
    return (
        <BrowserRouter>   
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:MovieID" element={<Movie />} />
                <Route path="/assentos/:SessionID" element={<Session />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter> 
    )
}

export default App;