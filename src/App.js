import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />{" "}
            {/* Render Navbar outside of Routes to keep it on every page */}
            <Routes>
                <Route path="/" element={<Home />} />{" "}
                {/* Home page with sections */}
                <Route path="/about" element={<About />} /> {/* About page */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
