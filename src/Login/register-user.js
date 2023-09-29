import React,{useRef,useState} from 'react';
import './register.css';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import { auth } from '../firebase_config';
import { Link } from 'react-router-dom'

export default function Register_User() {
	document.title="User-Chat | Register";
	const user_email=useRef();
	const user_pswd=useRef();
	const agr=useRef();
	const cnf_user_pswd=useRef();
	const [Err,setErr]=useState("");	
	const registeruser=async(e)=>{
		e.preventDefault();
		if(agr.current.checked)
		{
			if(user_email.current.value!=='' && user_pswd.current.value!=='' && cnf_user_pswd.current.value!=='')
			{
				if(user_pswd.current.value===cnf_user_pswd.current.value)
				{
					try
					{
						await createUserWithEmailAndPassword(auth,user_email.current.value,user_pswd.current.value);
						const authu = getAuth();
						await sendEmailVerification(authu.currentUser);
						alert("Email Registered successfully.Email verification link sent to Email.\n Please click on Login.");
					}
					catch(error)
					{
						if(error.message==='Firebase: Error (auth/email-already-in-use).')
						{
							setErr("Email Already in use");
						}
						else
						{
							setErr("Error in registration"+error.message);
						}
					}
				}
				else
				{
					setErr("New Password and Confirm New Password must be same.");
				}
			}
			else
			{
				setErr("Please enter all the required fields");
			}
		}
		else
		{
			alert("Please accept");
		}
	};
	const logout_user=async()=>{
		await signOut(auth);
	};
	return (
	<>
		<div className="show_head">User-Chat | Register</div><br/><br/>
		<form name="register_user">
		<div className="show_form_label">Email:</div>
		<input type="email" required placeholder="Enter Email" autoFocus ref={user_email} />
		<div className="show_form_label">Password:</div>
		<input type="password" required placeholder="Enter Password" ref={user_pswd} />
		<div className="show_form_label">Confirm Password:</div>
		<input type="password" required placeholder="Confirm Password" ref={cnf_user_pswd} />
		<p className="show_err">{Err}</p>
		<br/><p><input type="checkbox" ref={agr}/>I agree to the <Link style={{color:'blue'}} to='/Privacy'>Privacy Policy</Link> and <Link style={{color:'blue'}} to="/Terms">Terms and Conditions</Link> as mentioned</p>
		<button type="submit" onClick={registeruser} className="sub_b">Submit</button>
		<button type="button" onClick={logout_user} className="res_b">Reset</button>
		</form>
		<div className="show_form_label">Already Have an Account? <Link style={{color:'blue'}} to="/login">Login</Link></div>
	</>
	)
}
