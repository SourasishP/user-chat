import React,{useState,useRef} from 'react';
import './register.css';
import { getAuth, updateProfile,onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ref,set} from "firebase/database";
import { db, auth } from '../firebase_config';

export default function NameEntry() {
	document.title="User-Chat | Name Entry";
	const user_name=useRef();
	const [currUser,setCurrUser]=useState({});
	const [Err,setErr]=useState("");
	const nav_page = useNavigate();
	onAuthStateChanged(auth,(currentUser)=>{
		if(currentUser)
		{
			setCurrUser(currentUser);
		}
	});
	const nameentr=async(e)=>{
		e.preventDefault();
		const authu = getAuth();
		updateProfile(authu.currentUser, {
			displayName: user_name.current.value
		}).then(() => {
			nav_page("/logged-home");
		}).catch((error) => {
			setErr("Error");
		  console.log(error.message);
		});
		const uname=user_name.current.value;
		set(ref(db,'users/'+currUser.uid),{
				Email:currUser.email,
				uname:uname,
				ustatus:"complete",
				imageU:"NULL"
			})
	}
	return (
	<>
		<div className="show_head">User-Chat | Name Entry</div><br/><br/><br/>
		<form>
		<div className="show_form_label">Name:</div>
		<input type="text" required placeholder="Enter Name" autoFocus ref={user_name} />
		<p className="show_err">{Err}</p>
		<button type="submit" onClick={nameentr} className="sub_b">Submit</button>
		<button className="res_b" onClick={()=>{
			nav_page("/login");
			}}>Home</button>
		</form>
	</>
	)
}