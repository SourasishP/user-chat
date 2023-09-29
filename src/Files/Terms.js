import React from 'react';
import '../Login/register.css'
import { useNavigate } from 'react-router-dom';

export default function Terms(){
	document.title="User-Chat | Terms and Conditions";
	const nav_page = useNavigate();
	return (
	<>
		<div className="show_head">User-Chat | Terms and Conditions</div><br/><br/>
		<ol style={{fontSize:'1.3em'}}>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Registration and Login</li>
			<ul type='disc'>
				<li>The user is responsible for providing true and accurate knowledge to his/her belief whenver it
				is requested or asked. The user is also responsible for updating his/her details as and when required.</li>
				<li>The user is also responsible for keeping his/her details confidential and must not share with anyone.
				Any use of the site by logging into a user account will be treated as responsibility of the user.</li>
				<li>If at any point of time we suspect or it comes to knowledge that the information given is not
				accurate, then the account may get suspended or blocked or terminated as and when required for
				the time period which will be decided there of. The user may not be contacted for any of such
				reasons.</li>
			</ul>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Description of Services</li>
			<ul type='disc'>
				<li>This site has been made purely for testing purposes and nothing in the site can
				be treated as actual or original information.</li>
				<li>By using the site, the user accepts that he/she is in agreement with the Privacy Policy and
				also the user is using the site at his/her sole discretion.</li>
				<li>The site provides chat services wherein a user can communicate with another user on the site.
				Nobody except the user is responsible for any disputes or any mis-communications arising due to 
				the same.</li>
				<li>Whatever content or message the user posts, it is the sole responsiblity of the user. It is
				also the users' personal feelings or belief. Nobody except the user can be held responsible
				for any kind of users' messages whether it is right or wrong or for any mis-information or mis-understandings
				or if it has hurt anyone's feelings.</li>
				<li>Users must not use the services offered in the site for unlawful practices.</li>
				<li>Users may bring any incorrect information to the notice.</li>
			</ul>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Eligibility</li>
			<ul type='disc'>
				<li>The user may be blocked or his/her account may be suspended or terminated for any unauthorized use of the
				site.</li>
				<li>If a user is blocked or if his account his/her suspended or terminated, it is the full responsiblity of the
				user for any losses arising due to it.</li>
				<li>In case of user's account suspension or blockage or termination, the decision of the
				administrator is final.</li>
				<li>At the time of registration, the details entered must be correct and the user must be authorized
				to use the details that the user is entering.</li>
				<li>The administrator reserves the right to terminate or suspend or block access to the site as
				and whenever required due to violation of terms of service.</li>
				<li>If we find any error in the site we may correct it or rectify it as and when required.</li>
			</ul>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Children</li>
			<ul type='disc'>
				<li>We advice and believe that children below 18 years of age should not use the services in the site or must use the services in the site with their parent's consent.</li>
				<li>We also advice and believe that children below 18 years of age should not provide any personal information in the site without their parental consent.</li>
				<li>If at any point of time we suspect or we come to know that any children below the above mentioned age are using the services
				in the site without their parent's consent, we may delete their entire data and may block or terminate or suspend access to the site or its services.</li>
			</ul><br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Notice</li>
			<ul type='disc'>
				<li>We will like to hear feedback or suggestions or advice from all users that may help in improving
				the site and its functionalities.</li>
				<li>However we are not bound by any manner for such suggestions.</li>
				<li>The user also agrees that this document is enough for satisfying the Terms and Conditions
				of the site and for the usage of the site.</li>
				<li>As the site is used for testing purposes, the users should not share any personal
				or private informations.</li>
				<li>Nobody is liable or responsible for any loss or damage or dispute arising due to the same.</li>
				<li>Nobody is liable or responsible for damage or loss arising due to failure of these Terms and Conditions or any kind of damage/loss for anyone for using the site.</li>
				<li>Nobody is responsible or can be held liable for any kind of incorrect information, for any mis-communications
				or due to any technical errors or failures. Users may bring such things to notice.</li>
			</ul>
			<br/><br/>
			<li style={{fontWeight:'bold',fontSize:'1.4em'}}>Change of this Terms and Conditions</li>
			<ul type='disc'>
				<li>We may change this Terms and  Conditions as and whenever required.</li>
				<li>The users is responsible for keeping a check on this page for any updates.</li>
				<li>Nobody except the user is responsible for any dispute arising due to his failure
				in checking this page.</li>
			</ul>
			<br/>
		</ol>
		<p style={{fontSize:'1.5em',fontWeight:'bold'}}>By using the site you agree to the above mentioned Terms and Conditions.</p>
		<center><button type="button" className="res_b" style={{marginBottom:'20px'}} onClick={()=>{nav_page("/login");}}>HOME</button></center>
	</>
	)
}