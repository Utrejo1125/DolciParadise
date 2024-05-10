import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dolci from "./Dolci";
import Home from "./components/Home";
import Pastries from "./components/Pastries";
import Beverages from "./components/Beverages";
import Cakes from "./components/Cakes";
import Extras from "./components/Extras";

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Dolci />}>
                        <Route path="pastries" element={<Pastries />} />
                        <Route path="beverages" element={<Beverages />} />
                        <Route path="cakes" element={<Cakes />} />
                        <Route path="extras" element={<Extras />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
