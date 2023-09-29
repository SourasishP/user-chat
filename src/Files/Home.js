import React from 'react';
import '../Login/register.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
	const head={
		backgroundColor:"#191970",textAlign:"center",
		width:"100%",color:"white",fontSize:"2.7em",fontWeight:"bold"
	};
	const show_t={
		fontSize:"2.7em",color:"blue"
	};
	const show_b={
		borderRadius:"10px 10px 10px 10px",backgroundColor:"#9FE2BF",padding:"15px 15px",outline:"none",
		cursor:"pointer",fontWeight:"bold"
	};
	const nav_page = useNavigate();
	return (
	<>
		<div style={head}>User-Chat | Home</div>
		<p style={show_t}>Welcome to User Chat. Please login to proceed.</p>
		<p></p>
		<button style={show_b} onClick={()=>{
			nav_page("/login");
			}}>Login</button>
	</>
	);
}