import React,{useRef,useState} from 'react';
import './register.css';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase_config';
import { Link, useNavigate } from 'react-router-dom'

export default function Register_User() {
	document.title="User-Chat | Login";
	const user_email=useRef();
	const user_pswd=useRef();
	const [Err,setErr]=useState("");
	const [showNotifi,setShowNotifi]=useState(false);
	const [showMsg,setShowMsg]=useState("");
	const nav_page = useNavigate();
	onAuthStateChanged(auth,(currentUser)=>{
		if(currentUser)
		{
			nav_page("/logged-home");
		}
	});
	const loginuser=async(e)=>{
		e.preventDefault();setShowMsg("Logging In... Please wait");
		setShowNotifi(true);
		if(user_email.current.value!=='' && user_pswd.current.value!=='')
		{
			try
			{
				await signInWithEmailAndPassword(auth,user_email.current.value,user_pswd.current.value);
				user_email.current.value="";user_pswd.current.value="";
				setErr("");
			}
			catch(error)
			{
				setShowNotifi(false);
				if(error.message==="Firebase: Error (auth/invalid-email)." || error.message==="Firebase: Error (auth/user-not-found).")
				{
					setErr("No Account Exists");
				}
				else if(error.message==="Firebase: Error (auth/wrong-password).")
				{
					setErr("Invalid Password.");
				}
				else if(error.message==="Firebase: Error (auth/user-disabled).")
				{
					setErr("Your Account has been  blocked");
				}
				else
				{
					setErr("Error in Login: "+error.message);
				}
			}
		}
		else
		{
			setShowNotifi(false);
			setErr("Please enter Email or Password");
		}
	};
	const logout_user=async()=>{
		await signOut(auth);
	};
	return (
	
	<>
		<div className='success_popup_background' style={{display: showNotifi ? 'block' : 'none' }}><div className='success_popup_content crtfcs'>
		<center><div style={{color:'#ff0066',fontSize:'25px'}}><b>NOTICE</b></div><hr color='blue' size='2'/><font size='6' color='#b36b00'>{showMsg}</font></center>
		</div></div>
		<div className="show_head">User-Chat | Login</div><br/><br/><br/>
		<form>
		<div className="show_form_label">Email:</div>
		<input type="email" required autoFocus placeholder="Enter Email" ref={user_email} />
		<div className="show_form_label">Password:</div>
		<input type="password" required placeholder="Enter Password" ref={user_pswd} />
		<p className="show_err">{Err}</p>
		<button type="submit" onClick={loginuser} className="sub_b">Submit</button>
		<button type="button" onClick={logout_user} className="res_b">Reset</button>
		<span style={{float:'right'}}><button type="button" onClick={()=>{
			nav_page("/forgot");
			}} className="res_b">Forgot Password</button></span>
		</form>
		<div className="show_form_label">Don't Have an Account? <Link style={{color:'blue'}} to="/register">Create Account</Link></div>
	</>
	)
}
