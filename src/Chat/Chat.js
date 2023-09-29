import React,{ useState,useRef,useEffect} from 'react';
import profileimg from './Img.png';
import './show.css';
import {  onAuthStateChanged,signOut } from 'firebase/auth';
import { ref,set, onValue } from "firebase/database";
import { db, auth } from '../firebase_config';
import { Link,useNavigate } from 'react-router-dom';

export default function Chat(){
	document.title="User-Chat";
	const nav_page = useNavigate();
	const msg_snt=useRef();
	const show_st=useRef();
	const snd_nm=useRef();
	const [showNotifi,setShowNotifi]=useState(true);
	const [currUser,setCurrUser]=useState({});
	const [data, setData] = useState([]);
	const [userShow,setUserShow]=useState("");
	const [userSt,setUserSt]=useState("Offline");
	const [msgData,setMsgData]=useState([]);
	const [msgNo,setMsgNo]=useState();
	/*const UserName = (key) => {
		console.log(key);
	}*/
	function getuserName(key)
	{
		document.getElementsByClassName("content_right_head")[0].style.display='block';
		document.getElementsByClassName("show_msg_text_prev")[0].style.display='block';
		document.getElementsByClassName("show_msg_text")[0].style.display='flex';
		const toUser = (key) => {
		  setUserShow(key);
		  onValue(ref(db, '/messages/'),(vals) => {
			  setMsgData([]);
			  vals.forEach((msgval)=>{
					const msgT=msgval.val();
					let msgd={};
					if(msgT.receiver===key && (msgT.receiver===currUser.email || msgT.sender===currUser.email))
					{
						msgd={msge:{msg:msgT.msg,ustatus:'sent'}};
					}
					else if(msgT.sender===key && (msgT.receiver===currUser.email || msgT.sender===currUser.email))
					{
						msgd={msge:{msg:msgT.msg,ustatus:'received'}};
					}
					Object.values(msgd).map((usermsg)=>{
						setMsgData((oldArray)=>[...oldArray,usermsg]);
						return null;
					});
					setMsgNo(msgT.no);
					/*Object.values(f).map((usernm)=>{
					setData((oldArray)=>[...oldArray,usernm.uname]);*/
				})
		  },{
				onlyOnce: true
			});
		};
		toUser(key);
	}
	function SndMsg(e)
	{
		e.preventDefault();
		var dt = new Date();
		if(msg_snt.current.value!=='')
		{
			set(ref(db,'/messages/'+(msgNo+1)),{
				no:msgNo+1,
				msg:msg_snt.current.value,
				receiver:snd_nm.current.value,
				sender:currUser.email,
				time:dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear()+" "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()
			})
		}
		msg_snt.current.value="";
		getuserName(snd_nm.current.value);
	}
	useEffect(() => {
		let unm="";
		onAuthStateChanged(auth,(currentUser)=>{
			if(currentUser)
			{
				setCurrUser(currentUser);
				unm=currentUser.email;
				onValue(ref(db, '/users/'),(vals) => {
				setShowNotifi(false);
				setData([]);
				const f=vals.val();
				Object.values(f).map((usernm)=>{
						if(usernm.Email!==unm && usernm.uname!==undefined && usernm.ustatus==='complete')
						{
							setData((oldArray)=>[...oldArray,usernm]);
						}
						if(usernm.Email===currentUser.email && usernm.ustatus!=='complete')
						{
							alert("Account has been blocked");
							signOut(auth);
						}
						return null;
					})
				},{
					onlyOnce: true
				});
			}
			else
			{
				nav_page("/login");
			}
		});
		const change_st = setTimeout(()=>{
			document.getElementsByClassName("img_active")[0].style.border='2px solid green';
			document.getElementsByClassName("show_user_st")[0].style.color='green';
			setUserSt("Online");
		}, 3000);
		return () => clearTimeout(change_st);
	}, [currUser.displayName,nav_page])
	return (
	<>
		<div className='success_popup_background' style={{display: showNotifi ? 'block' : 'none' }}><div className='success_popup_content crtfcs'>
		<center><div style={{color:'#ff0066',fontSize:'25px'}}><b>NOTICE</b></div><hr color='blue' size='2'/><font size='6' color='#b36b00'>Getting All Users...Please Wait</font></center>
		</div></div>
		<div className='head'><div className="head_content">User-Chat</div>
		<button className="home_button" onClick={()=>{
			nav_page("/login");
			}}>HOME</button></div>
		{/*Main Content Box Starts*/}<div className="content_box">
		{/*Left Content Box Starts*/}
			<div className="content_left">
			<div className="content_left_head"><img src={profileimg} height='80' width='80' alt="Profile" className="img_active"/>
			<span className='show_nm' style={{fontWeight:'bold',marginTop:'15px'}}><span style={{float:'right'}}>{currUser.displayName}</span><br/><span style={{fontSize:'0.7em'}}>{currUser.email}</span><br/><span className="show_user_st" style={{float:'right'}} ref={show_st}>&bull; {userSt}</span></span>
			</div>
			{/*All Users will be displayed herelistItems*/}
			{data.map((userdtl)=>(
					<div className='content_left_show' onClick={()=>getuserName(userdtl.Email)} title='Click to Start Chatting' key={userdtl.Email}>
					<img src={profileimg} height='50' width='50' alt='Show User' className='show_img' />
					<span className='show_nm'><span style={{float:'right'}}>{userdtl.uname}</span><br/><span style={{fontSize:'0.6em'}}>{userdtl.Email}</span></span></div>
			))}
		</div>{/*Left Content Box Ends*/}
		
		{/*Right Content Box Starts*/}
		<div className="content_right"><div className="content_right_head" style={{display:'none'}}>
		<img src={profileimg} alt="User Profile" height='80' width='80' className='show_img'/><span className='show_nm'>{userShow}</span></div>
		<div className="show_msg_text_prev">
		{msgData.map((m,i)=>{
			if(m.ustatus==='sent')
				return <div className="snd_msg_dpl" key={i}>{m.msg}</div>
			else
				return <div className="rcv_msg_dpl" key={i}>{m.msg}</div>
		})}
		{/*<!--<div class="rcv_msg_dpl">Receive</div><div class="snd_msg_dpl">ADBDD</div>-->*/}</div>
		<form className="show_msg_text" style={{border:'0',fontWeight:'normal',padding:'0',margin:'0'}}>
		<textarea rows='2' cols='100' required ref={msg_snt} autoFocus placeholder="Type message here..."></textarea>
		<input type="hidden" value={userShow} ref={snd_nm}/>
		<span className="send_msg"><input type="submit" style={{width:'auto',outline:'none'}} onClick={SndMsg} value="Send"/></span></form></div>
		{/* Right Content Box Ends */}
		</div>{/*Main Content Box Ends*/}
		<div className="content_footer"><Link to='/Privacy' style={{color:'white',marginRight:'400px'}}>Privacy Policy</Link><Link to='/Terms' style={{color:'white'}}>Terms and Conditions</Link></div>
	</>
	);
}