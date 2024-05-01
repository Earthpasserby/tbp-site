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
import Featured from "./Components/Featured";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Testimonial from "./Components/Testimonial";
import Knowledge from "./Components/Knowledge";
import Join from "./Components/Join";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route>
          <Route index element={<HomePage />} />
          <Route path="/Homepage2" element={<Homepage2 />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Pattners" element={<Pattners />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Knowledge" element={<Knowledge />} />
          <Route path="/Join" element={<Join />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
