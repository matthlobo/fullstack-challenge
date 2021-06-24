import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import NewBook from "./Components/NewBook/NewBook";
import Page404 from "./Components/Page404/Page404.js";
import Auth from "./Components/Auth/Auth.js";
import Profile from "./Components/Profile/Profile.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:username" element={<Home />} />
        <Route path="about/:id" element={<About />} />
        <Route path="newBook" element={<NewBook />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
