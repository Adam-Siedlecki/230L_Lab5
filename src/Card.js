// Card Screen
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from "react-router-dom";

function Card(Props) {
	return (
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
	);
}

export default Card;