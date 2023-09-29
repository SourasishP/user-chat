import React,{useState} from 'react';
import './register.css';
import profileimg from '../Chat/Img.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase_config';
import { Link,useNavigate } from 'react-router-dom';

export default function LoginHome() {
	document.title="User-Chat | Logged In";
	const [currUser,setCurrUser]=useState({});
	const [showVeri,setShowVeri]=useState("");
	const nav_page = useNavigate();
	onAuthStateChanged(auth,(currentUser)=>{
		if(currentUser)
		{
			setCurrUser(currentUser);
			if(currUser.emailVerified===true)
				setShowVeri("Email Verified");
			else
				setShowVeri("Please verify email. Link sent to Email.");
		}
		else
		{
			nav_page("/login");
		}
	});
	const logout_user=async()=>{
		await signOut(auth);
	};
	const check=()=>{
		if(currUser.displayName!==null && currUser.emailVerified===true)
		{
			nav_page("/Chat");
		}
		else if(currUser.displayName===null)
		{
			alert("Please enter name to proceed");
		}
		else
		{
			alert("Please verify your email to proceed");
		}
	}
	return (
	<>
		<div className="show_head">User-Chat | Logged In</div><br/><br/>
		<div className="content_box_show_user">
			<div className="content_box_show_user_head"><span style={{fontWeight:'bold',color:'red'}}>Welcome </span><span style={{color:'blue'}}>{currUser.displayName===null ? currUser.email : currUser.displayName}</span></div>
			<div style={{display:'flex',padding:'15px 17px'}}>
				<img src={profileimg} height="200px" width="200px" alt="profile" style={{marginLeft:'120px'}}/>
				<div style={{marginLeft:'150px',marginTop:'60px',}}><span style={{fontSize:'1.2em'}}><b>Email:</b> {currUser.email}</span><br/><span style={{color:'#DE3163',fontSize:'1em'}}>{showVeri}</span></div>
				<div style={{display:'block',marginTop:'167px',}}>{currUser.displayName===null ? <Link to='/name-entry'>Enter Name</Link> : ""}</div>
			</div>
		</div>
		<center>
			<br/><button style={{height:'50px',fontWeight:'bold',backgroundColor:'#ADD8E6',borderRadius:'10px 10px 10px 10px',cursor:'pointer'}} onClick={check}>User Chat</button><button type="button" onClick={logout_user} className="res_b">Logout</button>
		</center>
	</>
	)
}