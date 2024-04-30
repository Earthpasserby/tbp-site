import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import HomePage from "./Components/HomePage";
import Homepage2 from "./Components/Homepage2";
import Services from "./Components/Services";
import Pattners from "./Components/Pattners";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route>
          <Route index element={<HomePage />} />
          <Route path="/Homepage2" element={<Homepage2 />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Pattners" element={<Pattners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
