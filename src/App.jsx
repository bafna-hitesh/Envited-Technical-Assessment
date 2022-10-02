import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Event } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
