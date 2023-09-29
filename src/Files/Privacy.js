import React from 'react';
import '../Login/register.css'
import { useNavigate } from 'react-router-dom';

export default function Privacy(){
	document.title="User-Chat | Privacy Policy";
	const nav_page = useNavigate();
	return (
	<>
		<div className="show_head">User-Chat | Privacy Policy</div><br/><br/>
		<ol style={{fontSize:'1.3em'}}>
			<p style={{fontSize:'1.6em'}}>We value and respect your Privacy:</p>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>What information we collect?</li>
			<p>
				We collect your basic details like the your Name, your Email Address. At the time
				of registration on the site you need to provide a password. We may also collect your current time and date. Other information
				that we collect is the information you posts as messages. These basic details are provided by you
				and we collect it whenever you enter these information on the site.
				<br/><br/>
				We may also collect information including but not limited to your current time , your IP Address, pages of the site you visit, user agents.
				These information such as the IP Address and your current time and date are collected automatically. You do not Object
				in storage, process and usage of the information in any way.
				<br/><br/>
				We believe that we have the right to use your information as provided by you and usage of such information
				by us and Third Party Service Providers does account for violation of any rights.
			</p>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Why we collect the information and how we use it?</li>
			<p>
				Your basic personal details are used for providing the various services on the site. Your name
				and Email Address provided by you to us are shown to all other users on the site those who have registered. The messages that you
				post are shown to the specific users whoever you wants and may also be shown to all users as and when
				needed by you or us.<br/><br/>
				We use these information for indentifying you and for recognizing whosoever is using the services. We may display your name
				and your Email Address in our services to all other users. We may also collect this information for
				any kind of analysis purposes.<br/><br/>
				Your information may also be collected for keeping records and for analysis purposes for checking effectiveness of the site.
			</p>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>How we collect the information and retention period of the information?</li>
			<p>
				We collect your basic personal details such as your Name, Email Address and your newly created Password in the site whenever
				you voluntarily give it to us whenever we ask for in the site or whenever you visit the site.<br/><br/>
				Your IP Address and your current time and date is automatically collected whenever you visit the site or whenever
				you use the services in the site.<br/><br/>
				We store this information as per our requirement and also as per your requirement. We may also delete
				the information as per requirement.
			</p>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Security</li>
			<p>
				Every effort has been made to maintain the security of the data that the site collects. However,
				it is upto you to maintain the confidentiality of their credentials. Whatever content or message you post, it is the sole responsiblity of you. It is
				also the users' personal feelings or belief. Nobody except the user can be held responsible
				for any kind of users' messages whether it is right or wrong, for any incorrect information or if it has hurt anyone's feelings or for anything. It is also your
				responsibility to give the information as and when asked correctly and accurately which should be true according to the best of your knowledge. Nobody can be
				held responsible for in failure or breach in Security as the site is for testing purposes only. Users can also report more security practices that we can follow to keep the data secure.<br/><br/>
			</p>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Communications</li>
			<p>
				By using the site, we believe that you have given us unsolicited right to store your personal
				information as and when asked. These information can be used for communication with you
				whenver required.
			</p>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Cookies</li>
			<p>
				The site may also use cookies, local browser storage and other similar technologies to collect and store basic information.
				Cookies are small amount of data that is stored usually on the user's device. Cookies may provide
				us with information that we may use to improve the site.<br/><br/>
				If you want to block the site from using the cookies then you can restrict the access
				and storage of cookies from their browser settings. However if you restrict the use of cookies then
				many functionalities of the site may not work.
			</p>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Third Party Service Providers</li>
			<p>			
				The Site is hosted on Firebase(Firebase Hosting) and mainly uses technologies from Firebase for registering a new user,
				checking the login status of a user (Firebase Authentication). As already mentioned we may collect 
				the basic user's details such as your Name, Email Address, your current time and date and these details are stored on 
				Firebase Database (Firebase Realtime Database).
				<br/>
				More Details can be found <a href='https://firebase.google.com/support/privacy' style={{color:'blue'}}>here</a>.
				<br/><br/>
				Additionally, the site may also use Google Analytics as and when required. This service may be used for measuring effectiveness of the services, analysis of the services, tracking or measuring user activity on the site and for various other purposes.
				Google Analytics may also use cookies, identifiers for mobile devices and many other similar technologies to collect data.
				Please <a href="https://www.google.com/policies/privacy/partners/" style={{color:'blue'}}>Click Here</a> for finding out more about what information Google collect, how it processes data.<br/>
				Additionally, you may also choose to opt out of Google Analytics by installing this browser add-on. <a href='https://tools.google.com/dlpage/gaoptout/' style={{fontSize:'0.7em',color:'blue'}}>(Click here)</a>
				<br/><br/>
			</p>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Change of this Privacy Policy</li>
			<p>
				We may change this Privacy Policy from time to time as per the requirement. You
				are requested to keep checking this page for Policy updates. Nobody except the user is responsible for any dispute arising due to his failure
				in checking this page. By continuing using the site after thechange in its Privacy Policy 
				means that you are in agreement with the new Privacy Policy.
			</p>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Notice</li>
			<p>
				The site has been made for testing purposes and nothing in the site can be termed as original or valid.
				Nobody is responsible for any incorrect information or error in the site. Therefore you
				must not give out any personal information other than Email, Name and creation of a new Password
				in the site.
			</p><br/>
		</ol>
		<p style={{fontSize:'1.5em',fontWeight:'bold'}}>By using the site you agree to the above mentioned Privacy Policy.</p>
		<center><button type="button" className="res_b" style={{marginBottom:'20px'}} onClick={()=>{nav_page("/login");}}>HOME</button></center>
	</>
	)
}