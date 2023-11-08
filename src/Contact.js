// Contact Screen
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from "react-router-dom";

function Contact(Props) {
	return (
		<div>
			<p>First Name:</p>
			<p>Last Name:</p>
			<p>Phone Number:</p>
			<p>Email Address:</p>
			<p>Country:</p>
			<p>Message:</p>
		</div>
	);
}

export default Contact;