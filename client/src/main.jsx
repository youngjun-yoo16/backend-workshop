import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Axios from "./pages/Axios.jsx";
import Orders from "./pages/Orders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/axios' element={<Axios />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </Router>
  </StrictMode>
);
