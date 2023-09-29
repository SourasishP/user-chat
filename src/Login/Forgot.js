import React,{useRef,useState} from 'react';
import './register.css';
import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase_config';
import { useNavigate } from 'react-router-dom';

export default function Forgot() {
	document.title="User Chat | Forgot Password";
	const user_email=useRef();
	const [Err,setErr]=useState("");
	const nav_page = useNavigate();
	onAuthStateChanged(auth,(currentUser)=>{
		if(currentUser)
		{
			nav_page("/logged-home");
		}
	});
	const forgotpaswd=async(e)=>{
		e.preventDefault();
		await sendPasswordResetEmail(auth,user_email.current.value)
		.then(() => {
			alert("Password Reset Link Sent to Email")
			nav_page("/login");
		})
		.catch((error) => {
			console.log(error);
			setErr("Problem in Password Reset");
		  });
	}
	return (
	<>
		<div className="show_head">User Chat | Forgot Password</div><br/><br/><br/>
		<form>
		<div className="show_form_label">Email:</div>
		<input type="email" required placeholder="Enter Email" autoFocus ref={user_email} />
		<p className="show_err">{Err}</p>
		<button type="submit" onClick={forgotpaswd} className="sub_b">Submit</button>
		<button className="res_b" onClick={()=>{
			nav_page("/login");
			}}>Home</button>
		</form>
	</>
	)
}