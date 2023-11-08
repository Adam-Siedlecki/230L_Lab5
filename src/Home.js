// Home Screen
import React from 'react';
import './App.css';

function Home(Props) {
	return (
		<div>
			<h1>{Props.header}</h1>
			<h2>Section - 002</h2>
			<p>WVU ID: 800322553</p>
			<p>Hi, my name is Adam.</p>
		</div>
	);
}

export default Home;