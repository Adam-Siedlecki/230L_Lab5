import React from 'react';
import './App.css';
import Home from "./Home";
import Card from "./Card";
import Contact from "./Contact";
import Navbar from "./Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/Card" element={<Card />}></Route>
				<Route path="/Contact" element={<Contact />}></Route>
			</Routes>
		</BrowserRouter>
		
    </div>
  );
}

export default App;
