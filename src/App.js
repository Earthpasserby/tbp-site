import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Footer from "./Components/Footer";
import AboutPage from "./Components/AboutPage";
import Servic from "./Components/Servic";
import ProjectMain from "./Components/ProjectMain";
import MainAbout from "./Components/MainAbout";
import Blog from "./Components/Blog";
import BlogDetail from "./Components/BlogDetail";
import Contact from "./Components/Contact";
import Pictures from "./Components/Pictures";

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
          <Route path="/Footer" element={<Footer />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/Servic" element={<Servic />} />
          <Route path="/ProjectMain" element={<ProjectMain />} />
          <Route path="/MainAbout" element={<MainAbout />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogDetail" element={<BlogDetail />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pictures" element={<Pictures />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
