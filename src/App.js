import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/card" element={<Card />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</BrowserRouter>
		
		<h1>
			CS 230L
		</h1>
		<h2>
			Section - 002
		</h2>
		<p>
			WVU ID: 800322553
		</p>
		<p>
		Hi I am Adam Siedlecki
		</p>
		
		<div class="row row-cols-1 row-cols-md-3 g-4">
			<div class="col">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Card 1</h5>
						<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card">
					
					<div class="card-body">
						<h5 class="card-title">Card 2</h5>
						<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card">
					
					<div class="card-body">
						<h5 class="card-title">Card 3</h5>
						<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
					</div>
				</div>
			</div>
		</div>
		
    </div>
  );
}

export default App;
