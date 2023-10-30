import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Home</a>
					</li>
				<li class="nav-item">
				<a class="nav-link" href="#">Features</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="#">Pricing</a>
				</li>
				<li class="nav-item">
				<a class="nav-link disabled" aria-disabled="true">Disabled</a>
				</li>
			</ul>
			</div>
		</div>
		</nav>
		
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
